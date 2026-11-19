import { domainOf } from "./entities";
import type {
  BoundEntities,
  DeviceKind,
  EntityState,
  HomeAssistant,
  Role,
} from "./types";

export const unavailable = (state?: EntityState): boolean =>
  !state ||
  ["unknown", "unavailable", "none", ""].includes(state.state.toLowerCase());
export const isActive = (state?: EntityState): boolean =>
  Boolean(
    state &&
    ["on", "true", "1", "detected", "alarm", "open"].includes(
      state.state.toLowerCase(),
    ),
  );
export const PRIMARY_ROLES: Partial<Record<DeviceKind, Role[]>> = {
  smoke: ["smoke"],
  co: ["co"],
  smoke_co: ["smoke", "co"],
  heat: ["heat"],
  gas: ["gas"],
  leak: ["leak"],
  contact: ["contact"],
  motion: ["motion"],
  fall: ["fall", "motion"],
  vibration: ["vibration"],
  climate: ["temperature", "humidity"],
  air: ["co2", "voc", "pm25", "temperature", "humidity"],
  plug: ["control"],
  switch: ["control"],
  light: ["control"],
  cover: ["control"],
  remote: ["action", "battery"],
  siren: ["control"],
};
export type Severity =
  "normal" | "alarm" | "warning" | "active" | "unknown" | "unavailable";
export interface DeviceStatus {
  severity: Severity;
  key:
    | "normal"
    | "alarm"
    | "warning"
    | "testing"
    | "open"
    | "closed"
    | "detected"
    | "clear"
    | "on"
    | "off"
    | "tracking"
    | "unknown"
    | "unavailable";
  primary?: string;
  alerts: Role[];
  partial: boolean;
}
export function summarize(
  kind: DeviceKind,
  bindings: BoundEntities,
  hass: HomeAssistant,
): DeviceStatus {
  const ids = (roles: Role[]) => roles.flatMap((role) => bindings[role] ?? []);
  const primaryRoles = PRIMARY_ROLES[kind] ?? [];
  const primaryIds = ids(primaryRoles);
  const safety =
    ["smoke", "co", "heat", "gas", "leak"].includes(kind) ||
    kind === "smoke_co";
  const hazards = ids(["smoke", "co", "heat", "gas", "leak"]);
  const activeHazard = hazards.find(
    (id) => domainOf(id) === "binary_sensor" && isActive(hass.states[id]),
  );
  const alerts = (["battery_low", "tamper", "fault"] as Role[]).filter((role) =>
    (bindings[role] ?? []).some((id) => {
      const state = hass.states[id];
      if (unavailable(state)) return false;
      if (role === "fault" && domainOf(id) === "sensor")
        return ![
          "normal",
          "clear",
          "ok",
          "off",
          "0",
          "false",
          "no_fault",
        ].includes(state.state.toLowerCase());
      return isActive(state);
    }),
  );
  if (
    (bindings.battery ?? []).some((id) => {
      const state = hass.states[id];
      return (
        !unavailable(state) &&
        Number.isFinite(Number(state.state)) &&
        Number(state.state) <= 20
      );
    }) &&
    !alerts.includes("battery_low")
  )
    alerts.push("battery_low");
  const validAlarmState = (id: string): boolean =>
    domainOf(id) === "binary_sensor" &&
    [
      "on",
      "off",
      "true",
      "false",
      "1",
      "0",
      "detected",
      "clear",
      "alarm",
    ].includes(hass.states[id]?.state.toLowerCase());
  const partial = primaryIds.some(
    (id) => unavailable(hass.states[id]) || (safety && !validAlarmState(id)),
  );
  const primary =
    primaryIds.find((id) => !unavailable(hass.states[id])) ?? primaryIds[0];
  if (activeHazard)
    return {
      severity: "alarm",
      key: "alarm",
      primary: activeHazard,
      alerts,
      partial,
    };
  // Every detector channel is required for a combined detector's normal state.
  const missingHazard =
    safety && primaryRoles.some((role) => !bindings[role]?.length);
  if (!primary || missingHazard)
    return { severity: "unknown", key: "unknown", primary, alerts, partial };
  if (
    (safety && partial) ||
    primaryIds.every((id) => unavailable(hass.states[id]))
  ) {
    const explicitOffline = primaryIds.some(
      (id) => hass.states[id]?.state === "unavailable",
    );
    return {
      severity: explicitOffline ? "unavailable" : "unknown",
      key: explicitOffline ? "unavailable" : "unknown",
      primary,
      alerts,
      partial,
    };
  }
  if (alerts.length)
    return { severity: "warning", key: "warning", primary, alerts, partial };
  if (ids(["test"]).some((id) => isActive(hass.states[id])))
    return { severity: "active", key: "testing", primary, alerts, partial };
  const active = primaryIds.some((id) => isActive(hass.states[id]));
  if (kind === "contact" || kind === "cover") {
    const open =
      kind === "cover"
        ? primaryIds.some((id) =>
            ["open", "opening", "closing"].includes(hass.states[id]?.state),
          )
        : active;
    return {
      severity: open ? "active" : "normal",
      key: open ? "open" : "closed",
      primary,
      alerts,
      partial,
    };
  }
  if (["motion", "fall", "vibration"].includes(kind))
    return {
      severity:
        kind === "fall" && active ? "alarm" : active ? "active" : "normal",
      key: active ? "detected" : "clear",
      primary,
      alerts,
      partial,
    };
  if (["plug", "switch", "light", "siren"].includes(kind))
    return {
      severity: active ? "active" : "normal",
      key: active ? "on" : "off",
      primary,
      alerts,
      partial,
    };
  if (kind === "remote")
    return { severity: "normal", key: "tracking", primary, alerts, partial };
  return { severity: "normal", key: "normal", primary, alerts, partial };
}
export function formatState(
  hass: HomeAssistant,
  state: EntityState | undefined,
): string {
  if (!state) return "—";
  if (hass.formatEntityState) {
    try {
      return hass.formatEntityState(state);
    } catch {
      /* Older or third-party HA clients may lack a formatter. */
    }
  }
  const unit = state.attributes.unit_of_measurement;
  return `${state.state}${unit ? ` ${String(unit)}` : ""}`;
}
