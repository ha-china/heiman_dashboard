import data from "./data/catalog.json";
import type { DeviceKind, DevicePreset, RegistryDevice } from "./types";

export const CATALOG = data.models as DevicePreset[];
export const CATALOG_SNAPSHOT = data.generatedOn;
export const normalizeModel = (value: string): string =>
  value.toLowerCase().replace(/[\s-]+/g, "");
const presetsById = new Map(
  CATALOG.map((preset) => [normalizeModel(preset.id), preset]),
);
const presetsByAlias = new Map<string, DevicePreset>();
for (const preset of CATALOG) {
  for (const alias of preset.aliases) {
    const key = normalizeModel(alias);
    if (!presetsByAlias.has(key)) presetsByAlias.set(key, preset);
  }
}
export function findPreset(value?: string | null): DevicePreset | undefined {
  if (!value || value === "auto") return undefined;
  const parentheticalId = value.match(/\(([^()]+)\)\s*$/)?.[1];
  const normalized = normalizeModel(parentheticalId ?? value);
  // Canonical IDs take priority over aliases. Avoid substring matches between variants.
  return presetsById.get(normalized) ?? presetsByAlias.get(normalized);
}
export function presetForDevice(
  device: RegistryDevice,
): DevicePreset | undefined {
  const preset = findPreset(device.model_id) ?? findPreset(device.model);
  if (!preset) return undefined;
  // Model fingerprints are vendor-specific. Do not adopt a different brand's TSxxxx device.
  if (
    /^TS\d+$/i.test(device.model ?? "") &&
    !/heiman/i.test(device.manufacturer ?? "")
  )
    return undefined;
  return preset;
}
export function isHeimanDevice(device: RegistryDevice): boolean {
  return (
    /heiman/i.test(device.manufacturer ?? "") &&
    Boolean(presetForDevice(device))
  );
}
export const KIND_ICONS: Record<DeviceKind, string> = {
  smoke: "smoke",
  co: "co",
  smoke_co: "smoke",
  heat: "temperature",
  gas: "gas",
  leak: "water",
  contact: "door",
  motion: "motion",
  fall: "motion",
  vibration: "motion",
  climate: "temperature",
  air: "air",
  siren: "bell",
  plug: "power",
  switch: "power",
  light: "light",
  cover: "cover",
  remote: "remote",
};
