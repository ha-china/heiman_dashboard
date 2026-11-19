import { findPreset, isHeimanDevice, presetForDevice } from "./catalog";
import type {
  BoundEntities,
  CardConfig,
  DeviceKind,
  HomeAssistant,
  Registry,
  RegistryEntity,
  Resolution,
  Role,
} from "./types";

const registryRequests = new WeakMap<object, Promise<Registry>>();
export function currentRegistry(hass: HomeAssistant): Registry | undefined {
  if (hass.devices && hass.entities && Object.keys(hass.devices).length > 0)
    return {
      devices: Object.values(hass.devices),
      entities: Object.values(hass.entities),
    };
  return undefined;
}
export async function loadRegistry(
  hass: HomeAssistant,
  retry = false,
): Promise<Registry> {
  const current = currentRegistry(hass);
  if (current) return current;
  if (!hass.callWS) return { devices: [], entities: [] };
  const key = hass.connection ?? hass;
  if (retry) registryRequests.delete(key);
  let request = registryRequests.get(key);
  if (!request) {
    request = Promise.all([
      hass.callWS<Registry["devices"]>({ type: "config/device_registry/list" }),
      hass.callWS<Registry["entities"]>({
        type: "config/entity_registry/list",
      }),
    ]).then(([devices, entities]) => ({ devices, entities }));
    registryRequests.set(key, request);
    request.catch(() => registryRequests.delete(key));
  }
  return request;
}

export const domainOf = (entityId: string): string => entityId.split(".")[0];
const CONTROL_DOMAINS = ["switch", "light", "siren", "cover", "fan"];
export function roleFor(
  entry: RegistryEntity,
  hass: HomeAssistant,
  kind?: DeviceKind,
): Role | undefined {
  const domain = domainOf(entry.entity_id);
  const state = hass.states[entry.entity_id];
  const deviceClass = String(state?.attributes.device_class ?? "");
  const has = (pattern: RegExp) =>
    [entry.translation_key ?? "", entry.entity_id.split(".")[1]].some((key) =>
      pattern.test(key.toLowerCase()),
    );
  if (CONTROL_DOMAINS.includes(domain)) {
    if (
      entry.entity_category ||
      has(
        /(?:^|_)(?:mute|temporary_mute|remote_mute|heartbeat|indicator|child_lock|radar_switch|selftest)(?:_|$)/,
      )
    )
      return undefined;
    // Detector settings are not household on/off controls, even if discovery omits entity_category.
    return !kind ||
      ["plug", "switch", "light", "cover", "siren", "motion"].includes(kind)
      ? "control"
      : undefined;
  }
  if (domain === "event") return "action";
  if (!["binary_sensor", "sensor"].includes(domain)) return undefined;
  if (domain === "binary_sensor") {
    if (
      deviceClass === "battery" ||
      has(/(?:^|_)(?:battery_low|low_battery)(?:_|$)/)
    )
      return "battery_low";
    if (deviceClass === "tamper" || has(/(?:^|_)tamper(?:_|$)/))
      return "tamper";
    if (
      deviceClass === "problem" ||
      has(/(?:^|_)(?:fault|fault_state|sensor_fault_state)(?:_|$)/)
    )
      return "fault";
    if (has(/(?:^|_)(?:test|self_test|self_check|selfcheck)(?:_|$)/))
      return "test";
    if (has(/(?:^|_)(?:muted|mute_state|sensor_mute_state)(?:_|$)/))
      return "muted";
    if (deviceClass === "smoke") return "smoke";
    if (deviceClass === "carbon_monoxide") return "co";
    if (deviceClass === "gas") return kind === "co" ? "co" : "gas";
    if (deviceClass === "moisture") return "leak";
    if (["door", "window", "opening", "garage_door"].includes(deviceClass))
      return "contact";
    if (["motion", "occupancy", "presence"].includes(deviceClass))
      return "motion";
    if (deviceClass === "vibration") return "vibration";
    if (deviceClass === "heat") return "heat";
    // Match suffixes rather than the device's display name: a smoke detector's battery is not a smoke alarm.
    if (has(/(?:^|_)(?:smoke|smoke_alarm)(?:_\d+)?$/)) return "smoke";
    if (has(/(?:^|_)(?:carbon_monoxide|co_alarm|co)(?:_\d+)?$/)) return "co";
    if (has(/(?:^|_)(?:gas|gas_alarm)(?:_\d+)?$/)) return "gas";
    if (has(/(?:^|_)(?:water_leak|water_leakage|moisture)(?:_\d+)?$/))
      return "leak";
    if (has(/(?:^|_)(?:contact|opening)(?:_\d+)?$/)) return "contact";
    if (has(/(?:^|_)(?:occupancy|motion|presence)(?:_\d+)?$/)) return "motion";
    if (has(/(?:^|_)(?:fall|fall_down|fall_detected)(?:_\d+)?$/)) return "fall";
    if (has(/(?:^|_)vibration(?:_\d+)?$/)) return "vibration";
    if (has(/(?:^|_)(?:heat|heat_alarm)(?:_\d+)?$/)) return "heat";
    return undefined;
  }
  const classes: Record<string, Role> = {
    temperature: "temperature",
    humidity: "humidity",
    battery: "battery",
    signal_strength: "signal",
    power: "power",
    energy: "energy",
    voltage: "voltage",
    current: "current",
    illuminance: "illuminance",
    carbon_dioxide: "co2",
    volatile_organic_compounds: "voc",
    volatile_organic_compounds_parts: "voc",
    pm25: "pm25",
  };
  if (classes[deviceClass]) return classes[deviceClass];
  if (has(/(?:^|_)(?:fault_state|sensor_fault_state)(?:_\d+)?$/))
    return "fault";
  if (
    has(
      /(?:^|_)(?:linkquality|link_quality|rssi|lqi|signal_strength)(?:_\d+)?$/,
    )
  )
    return "signal";
  if (has(/(?:^|_)(?:action|last_action)(?:_\d+)?$/)) return "action";
  if (has(/(?:^|_)(?:battery|battery_percentage)(?:_\d+)?$/)) return "battery";
  if (
    has(
      /(?:^|_)(?:temperature|device_temperature|device_intenal_temperature)(?:_\d+)?$/,
    )
  )
    return "temperature";
  if (has(/(?:^|_)humidity(?:_\d+)?$/)) return "humidity";
  if (has(/(?:^|_)(?:muted|mute_state)(?:_\d+)?$/)) return "muted";
  // Numeric CO/gas/smoke concentrations are measurements, never boolean alarm decisions.
  return undefined;
}

export function bindEntities(
  entries: RegistryEntity[],
  hass: HomeAssistant,
  kind?: DeviceKind,
  overrides: CardConfig["entities"] = {},
): BoundEntities {
  const bindings: BoundEntities = {};
  for (const entry of [...entries].sort((a, b) =>
    a.entity_id.localeCompare(b.entity_id),
  )) {
    if (entry.disabled_by || entry.hidden_by || entry.hidden) continue;
    const role = roleFor(entry, hass, kind);
    if (role) (bindings[role] ??= []).push(entry.entity_id);
  }
  for (const [role, id] of Object.entries(overrides))
    if (id) bindings[role as Role] = [id];
  return bindings;
}

export function resolveDevice(
  config: CardConfig,
  hass: HomeAssistant,
  registry: Registry,
): Resolution {
  const wanted = findPreset(config.model);
  const primaryEntry = config.entity
    ? registry.entities.find((entity) => entity.entity_id === config.entity)
    : undefined;
  const selectedId = config.device_id || primaryEntry?.device_id;
  const candidates = registry.devices.filter((device) => {
    if (device.disabled_by) return false;
    const preset = presetForDevice(device);
    if (
      device.parent_device_id &&
      registry.devices.some(
        (parent) =>
          parent.id === device.parent_device_id &&
          presetForDevice(parent)?.id === preset?.id,
      )
    )
      return false;
    return wanted ? preset?.id === wanted.id : isHeimanDevice(device);
  });
  let device = selectedId
    ? registry.devices.find((item) => item.id === selectedId)
    : candidates.length === 1
      ? candidates[0]
      : undefined;
  let reason: Resolution["reason"];
  if (selectedId && !device) reason = "missing_device";
  else if (device && wanted && presetForDevice(device)?.id !== wanted.id) {
    reason = "model_mismatch";
    device = undefined;
  } else if (!device && candidates.length > 1) reason = "choose_device";
  else if (!device) reason = "no_device";
  const preset = wanted ?? (device ? presetForDevice(device) : undefined);
  const deviceIds = device
    ? descendantIds(registry, device.id)
    : new Set<string>();
  const entries = device
    ? registry.entities.filter(
        (entry) => entry.device_id && deviceIds.has(entry.device_id),
      )
    : [];
  if (
    config.entity &&
    !entries.some((entry) => entry.entity_id === config.entity)
  )
    entries.push(primaryEntry ?? { entity_id: config.entity });
  const bindings = bindEntities(entries, hass, preset?.kind, config.entities);
  // An explicitly assigned primary entity may have no device class (custom discovery).
  if (
    config.entity &&
    !Object.values(bindings).some((ids) => ids?.includes(config.entity!))
  ) {
    const domain = domainOf(config.entity);
    if (domain === "binary_sensor" && preset) {
      const role =
        (
          { smoke_co: "smoke", climate: undefined, air: undefined } as Partial<
            Record<DeviceKind, Role>
          >
        )[preset.kind] ??
        ([
          "smoke",
          "co",
          "heat",
          "gas",
          "leak",
          "contact",
          "motion",
          "fall",
          "vibration",
        ].includes(preset.kind)
          ? (preset.kind as Role)
          : undefined);
      if (role && !config.entities?.[role]) bindings[role] = [config.entity];
    }
  }
  // Missing explicit devices and model mismatches must never silently bind another device.
  if (reason === "missing_device" || reason === "model_mismatch")
    return { candidates, preset, entities: [], bindings: {}, reason };
  if (Object.keys(bindings).length > 0 && !device) reason = undefined;
  return { device, preset, candidates, entities: entries, bindings, reason };
}

export function configurationEntities(
  entries: RegistryEntity[],
  hass: HomeAssistant,
  kind?: DeviceKind,
): RegistryEntity[] {
  return entries.filter(
    (entry) =>
      !entry.disabled_by &&
      !entry.hidden_by &&
      !entry.hidden &&
      hass.states[entry.entity_id] &&
      (["button", "number", "select", "text", "update", "remote"].includes(
        domainOf(entry.entity_id),
      ) ||
        entry.entity_category === "config" ||
        (CONTROL_DOMAINS.includes(domainOf(entry.entity_id)) &&
          roleFor(entry, hass, kind) !== "control")),
  );
}

export function descendantIds(registry: Registry, id: string): Set<string> {
  const ids = new Set([id]);
  let previousSize = 0;
  while (ids.size !== previousSize) {
    previousSize = ids.size;
    for (const device of registry.devices)
      if (device.parent_device_id && ids.has(device.parent_device_id))
        ids.add(device.id);
  }
  return ids;
}
