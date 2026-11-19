import { domainOf } from "./entities";
import type { EntityState, RegistryEntity } from "./types";
import type { TranslationKey } from "./i18n";

export type SettingKind =
  "self_test" | "mute" | "indicator" | "siren" | "other";
export const canCommand = (state?: EntityState): boolean =>
  Boolean(state && state.state !== "unavailable");
export function settingKind(entry: RegistryEntity): SettingKind {
  const domain = domainOf(entry.entity_id);
  const key =
    `${entry.translation_key ?? ""}_${entry.entity_id.split(".")[1]}`.toLowerCase();
  if (
    domain === "siren" ||
    (domain === "select" && /siren_for_automation/.test(key))
  )
    return "siren";
  if (domain === "button" && /self_?test|remote_test|self_check/.test(key))
    return "self_test";
  if (
    ["switch", "button", "select"].includes(domain) &&
    /mute|silence|hush/.test(key)
  )
    return "mute";
  if (/indicator|heartbeat|backlight|(?:^|_)led(?:_|$)/.test(key))
    return "indicator";
  return "other";
}
export function settingLabel(
  entry: RegistryEntity,
): TranslationKey | undefined {
  const kind = settingKind(entry);
  if (kind === "self_test") return "remote_self_test";
  if (kind === "mute") return "temporary_mute";
  if (kind === "indicator") return "indicator";
  if (kind === "siren") return "siren";
  const key = `${entry.translation_key ?? ""}_${entry.entity_id}`;
  if (/default_siren_tone/.test(key)) return "tone";
  if (/default_siren_level/.test(key)) return "volume";
  if (/default_strobe_level/.test(key)) return "strobe_level";
  if (/default_strobe/.test(key)) return "strobe";
  if (/temperature_offset/.test(key)) return "temperature_offset";
  if (/humidity_offset/.test(key)) return "humidity_offset";
  if (/sensitivity/.test(key)) return "sensitivity";
  if (/identify/.test(key)) return "identify";
  return undefined;
}
export function numericValue(state: EntityState, raw: string): number {
  if (!raw.trim()) throw new Error("invalid_value");
  const value = Number(raw),
    min = Number(state.attributes.min),
    max = Number(state.attributes.max),
    step = Number(state.attributes.step);
  if (
    !Number.isFinite(value) ||
    (Number.isFinite(min) && value < min) ||
    (Number.isFinite(max) && value > max)
  )
    throw new Error("invalid_value");
  if (Number.isFinite(step) && step > 0) {
    const position = (value - (Number.isFinite(min) ? min : 0)) / step;
    if (Math.abs(position - Math.round(position)) > 1e-6)
      throw new Error("invalid_value");
  }
  return value;
}
export interface SirenTone {
  value: string;
  label: string;
  serviceValue: string | number;
}
export function sirenTones(state: EntityState): SirenTone[] {
  const tones = state.attributes.available_tones;
  if (Array.isArray(tones))
    return tones
      .filter((tone) => typeof tone === "string" || typeof tone === "number")
      .map((tone, index) => ({
        value: String(index),
        label: String(tone),
        serviceValue: tone,
      }));
  // HA accepts dictionary labels and resolves their integer keys server-side.
  if (tones && typeof tones === "object")
    return Object.entries(tones)
      .filter(([, label]) => typeof label === "string")
      .map(([value, label]) => ({
        value,
        label: String(label),
        serviceValue: String(label),
      }));
  return [];
}
export interface SirenDraft {
  tone?: string;
  duration?: string;
  volume?: string;
}
export function sirenParameters(
  state: EntityState,
  draft: SirenDraft,
): Record<string, unknown> {
  const features = Number(state.attributes.supported_features ?? 0);
  const result: Record<string, unknown> = {};
  if (features & 4 && draft.tone !== undefined && draft.tone !== "") {
    const tone = sirenTones(state).find((tone) => tone.value === draft.tone);
    if (!tone) throw new Error("invalid_value");
    result.tone = tone.serviceValue;
  }
  if (features & 16 && draft.duration?.trim()) {
    const duration = Number(draft.duration);
    if (!Number.isInteger(duration) || duration < 1 || duration > 65535)
      throw new Error("invalid_value");
    result.duration = duration;
  }
  if (features & 8 && draft.volume?.trim()) {
    const volume = Number(draft.volume);
    if (!Number.isFinite(volume) || volume < 0 || volume > 100)
      throw new Error("invalid_value");
    result.volume_level = volume / 100;
  }
  return result;
}
