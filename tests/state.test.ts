import assert from "node:assert/strict";
import { test } from "node:test";
import { summarize } from "../src/state";
import { fixture } from "./fixtures";

test("alarm, normal, unknown and unavailable are distinct", () => {
  const { hass } = fixture();
  const bindings = { smoke: ["binary_sensor.renamed_smoke"] };
  for (const [state, severity] of [
    ["off", "normal"],
    ["on", "alarm"],
    ["unknown", "unknown"],
    ["unavailable", "unavailable"],
    ["bad-value", "unknown"],
  ]) {
    hass.states[bindings.smoke[0]].state = state;
    assert.equal(summarize("smoke", bindings, hass).severity, severity, state);
  }
  delete hass.states[bindings.smoke[0]];
  assert.equal(summarize("smoke", bindings, hass).severity, "unknown");
});
test("battery data alone cannot make a safety device normal", () => {
  const { hass } = fixture();
  assert.equal(
    summarize("smoke", { battery: ["sensor.renamed_smoke_battery"] }, hass)
      .severity,
    "unknown",
  );
});
test("an active alarm takes priority over low battery, a test and missing channels", () => {
  const { hass, add } = fixture();
  hass.states["binary_sensor.renamed_smoke"].state = "on";
  hass.states["sensor.renamed_smoke_battery"].state = "5";
  add("binary_sensor.test", "smoke-a", "on");
  assert.equal(
    summarize(
      "smoke_co",
      {
        smoke: ["binary_sensor.renamed_smoke"],
        battery: ["sensor.renamed_smoke_battery"],
        test: ["binary_sensor.test"],
      },
      hass,
    ).severity,
    "alarm",
  );
});
test("both smoke and CO channels must be reported before a combined detector is normal", () => {
  const { hass } = fixture();
  const smoke = ["binary_sensor.renamed_smoke"];
  assert.equal(summarize("smoke_co", { smoke }, hass).severity, "unknown");
  assert.equal(
    summarize("smoke_co", { smoke, co: ["binary_sensor.zha_random_id"] }, hass)
      .severity,
    "normal",
  );
  hass.states["binary_sensor.zha_random_id"].state = "unavailable";
  assert.equal(
    summarize("smoke_co", { smoke, co: ["binary_sensor.zha_random_id"] }, hass)
      .severity,
    "unavailable",
  );
});
test("concentration and diagnostic values are not used as boolean alarms", () => {
  const { hass, add } = fixture();
  add("sensor.co_ppm", "co-a", "1", "carbon_monoxide");
  assert.equal(
    summarize("co", { co: ["sensor.co_ppm"] }, hass).severity,
    "unknown",
  );
});
test("unknown battery does not become zero; a real low battery is a warning", () => {
  const { hass } = fixture();
  const bindings = {
    smoke: ["binary_sensor.renamed_smoke"],
    battery: ["sensor.renamed_smoke_battery"],
  };
  hass.states["sensor.renamed_smoke_battery"].state = "unknown";
  assert.equal(summarize("smoke", bindings, hass).severity, "normal");
  hass.states["sensor.renamed_smoke_battery"].state = "0";
  assert.equal(summarize("smoke", bindings, hass).severity, "warning");
});
test("manufacturer fault enums are warnings while normal is clear", () => {
  const { hass, add } = fixture();
  add("sensor.fault_state", "smoke-a", "normal");
  const bindings = {
    smoke: ["binary_sensor.renamed_smoke"],
    fault: ["sensor.fault_state"],
  };
  assert.equal(summarize("smoke", bindings, hass).severity, "normal");
  hass.states["sensor.fault_state"].state =
    "open_circuit_fault|pollution_fault";
  assert.equal(summarize("smoke", bindings, hass).severity, "warning");
});
