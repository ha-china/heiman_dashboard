import assert from "node:assert/strict";
import { test } from "node:test";
import {
  canCommand,
  numericValue,
  settingKind,
  sirenParameters,
  sirenTones,
} from "../src/control-actions";
import type { EntityState } from "../src/types";

const state = (
  entity_id: string,
  value = "off",
  attributes: Record<string, unknown> = {},
): EntityState => ({ entity_id, state: value, attributes });
test("stateless buttons may be unknown before their first press; unavailable entities cannot be commanded", () => {
  assert.equal(canCommand(state("button.test", "unknown")), true);
  assert.equal(canCommand(state("button.test", "unavailable")), false);
  assert.equal(canCommand(undefined), false);
});
test("Z2M and ZHA names resolve to direct controls", () => {
  for (const [id, translation_key, kind] of [
    ["button.device_trigger_selftest", undefined, "self_test"],
    ["button.renamed", "remote_test", "self_test"],
    ["switch.device_temporary_mute", undefined, "mute"],
    ["switch.renamed", "buzzer_manual_mute", "mute"],
    ["switch.renamed", "heartbeat_indicator", "indicator"],
    ["select.device_siren_for_automation_only", undefined, "siren"],
    ["siren.alarm", undefined, "siren"],
    ["select.device_default_siren_tone", undefined, "other"],
  ] as const)
    assert.equal(settingKind({ entity_id: id, translation_key }), kind, id);
});
test("native siren feature flags control tone, volume and duration payloads", () => {
  const full = state("siren.alarm", "off", {
    supported_features: 31,
    available_tones: { 1: "Burglar", 2: "Fire" },
  });
  assert.equal(sirenTones(full)[1].serviceValue, "Fire");
  assert.deepEqual(
    sirenParameters(full, { tone: "2", duration: "15", volume: "40" }),
    { tone: "Fire", duration: 15, volume_level: 0.4 },
  );
  const basic = state("siren.basic", "off", { supported_features: 19 });
  assert.deepEqual(
    sirenParameters(basic, {
      tone: "invalid",
      duration: "20",
      volume: "invalid",
    }),
    { duration: 20 },
  );
  assert.deepEqual(sirenParameters(full, {}), {});
  assert.throws(() => sirenParameters(full, { volume: "101" }));
  assert.throws(() => sirenParameters(full, { duration: "1.5" }));
  assert.throws(() => sirenParameters(full, { tone: "999" }));
});
test("numeric controls validate range, step and blank values", () => {
  const number = state("number.offset", "unknown", {
    min: -15,
    max: 15,
    step: 0.1,
  });
  assert.equal(numericValue(number, "-2.3"), -2.3);
  for (const invalid of ["", "unknown", "16", "-15.1", "0.15"])
    assert.throws(() => numericValue(number, invalid), invalid);
});
