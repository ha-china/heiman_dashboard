import { findPreset } from "./catalog";
import { LANGUAGE_NAMES } from "./i18n";
import type { CardConfig, Role } from "./types";

export const ROLES: Role[] = [
  "smoke",
  "co",
  "heat",
  "gas",
  "leak",
  "contact",
  "motion",
  "fall",
  "vibration",
  "temperature",
  "humidity",
  "battery",
  "battery_low",
  "tamper",
  "fault",
  "test",
  "muted",
  "signal",
  "power",
  "energy",
  "voltage",
  "current",
  "illuminance",
  "co2",
  "voc",
  "pm25",
  "action",
  "control",
];
export function normalizeConfig(input: CardConfig): CardConfig {
  if (!input || typeof input !== "object")
    throw new Error("HEIMAN: configuration must be an object.");
  if (
    input.model !== undefined &&
    (typeof input.model !== "string" ||
      (input.model !== "auto" && !findPreset(input.model)))
  )
    throw new Error(`HEIMAN: unknown model ${String(input.model)}.`);
  if (
    input.style !== undefined &&
    !["home", "fire", "minimal"].includes(input.style)
  )
    throw new Error("HEIMAN: style must be home, fire or minimal.");
  if (
    input.language !== undefined &&
    input.language !== "auto" &&
    !Object.hasOwn(LANGUAGE_NAMES, input.language)
  )
    throw new Error(
      `HEIMAN: language must be auto or one of ${Object.keys(LANGUAGE_NAMES).join(", ")}.`,
    );
  for (const key of ["name", "device_id", "entity"] as const) {
    if (input[key] !== undefined && typeof input[key] !== "string")
      throw new Error(`HEIMAN: ${key} must be a string.`);
  }
  for (const key of [
    "show_battery",
    "show_signal",
    "show_details",
    "show_controls",
  ] as const) {
    if (input[key] !== undefined && typeof input[key] !== "boolean")
      throw new Error(`HEIMAN: ${key} must be a boolean.`);
  }
  if (input.entity && !/^\w+\.[\w]+$/.test(input.entity))
    throw new Error("HEIMAN: invalid entity ID.");
  if (input.entities !== undefined) {
    if (
      !input.entities ||
      typeof input.entities !== "object" ||
      Array.isArray(input.entities)
    )
      throw new Error("HEIMAN: entities must map roles to entity IDs.");
    for (const [role, id] of Object.entries(input.entities)) {
      if (
        !ROLES.includes(role as Role) ||
        typeof id !== "string" ||
        !/^\w+\.[\w]+$/.test(id)
      )
        throw new Error(`HEIMAN: invalid entity override for ${role}.`);
    }
  }
  return {
    ...input,
    type: "custom:heiman-device-card",
    model: findPreset(input.model)?.id ?? "auto",
    style: input.style ?? "home",
    language: input.language ?? "auto",
    entities: { ...input.entities },
  };
}
