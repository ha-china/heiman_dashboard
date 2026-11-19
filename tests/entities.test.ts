import assert from "node:assert/strict";
import { test } from "node:test";
import { CATALOG, findPreset } from "../src/catalog";
import { normalizeConfig } from "../src/config";
import {
  bindEntities,
  configurationEntities,
  currentRegistry,
  loadRegistry,
  resolveDevice,
  roleFor,
} from "../src/entities";
import { fixture } from "./fixtures";
import type { CardConfig } from "../src/types";

const config: CardConfig = {
  type: "custom:heiman-device-card",
  model: "HS1SA-E-PLUS",
};
test("catalog preserves exact model variants and ZHA aliases", () => {
  assert.ok(CATALOG.length >= 80);
  assert.equal(findPreset("SmokeSensor-EF2-3.0")?.id, "HS1SA-E Lover");
  assert.equal(findPreset("HS1CA-E PLUS")?.id, "HS1CA-E-PLUS");
  assert.notEqual(findPreset("HS1CG-M")?.id, findPreset("HS1CG_M")?.id);
  assert.equal(findPreset("HS1SA-E-PLUS-FAKE"), undefined);
  assert.equal(new Set(CATALOG.map((model) => model.id)).size, CATALOG.length);
  for (const model of CATALOG) assert.equal(findPreset(model.id)?.id, model.id);
});
test("model-only setup resolves one device and scopes entities by device ID", () => {
  const { hass, registry } = fixture();
  const resolved = resolveDevice(config, hass, registry);
  assert.equal(resolved.device?.id, "smoke-a");
  assert.deepEqual(resolved.bindings.smoke, ["binary_sensor.renamed_smoke"]);
  assert.deepEqual(resolved.bindings.battery, ["sensor.renamed_smoke_battery"]);
  assert.equal(resolved.reason, undefined);
  assert.ok(!resolved.entities.some((entry) => entry.device_id === "other"));
});
test("multiple instances require an explicit choice and never bind the first", () => {
  const { hass, registry } = fixture();
  registry.devices.push({ ...registry.devices[0], id: "smoke-b" });
  const ambiguous = resolveDevice(config, hass, registry);
  assert.equal(ambiguous.reason, "choose_device");
  assert.deepEqual(ambiguous.bindings, {});
  assert.equal(
    resolveDevice({ ...config, device_id: "smoke-a" }, hass, registry).device
      ?.id,
    "smoke-a",
  );
});
test("current MQTT discovery uses model_id and older names may embed the model", () => {
  const { hass, registry } = fixture();
  registry.devices[0].model = "Smart smoke alarm";
  registry.devices[0].model_id = "HS1SA-E-PLUS";
  assert.equal(resolveDevice(config, hass, registry).device?.id, "smoke-a");
  delete registry.devices[0].model_id;
  registry.devices[0].model = "Smart smoke alarm (HS1SA-E-PLUS)";
  assert.equal(resolveDevice(config, hass, registry).device?.id, "smoke-a");
  assert.equal(
    normalizeConfig({ ...config, model: "HS1CA-E PLUS" }).model,
    "HS1CA-E-PLUS",
  );
});
test("an explicit missing device or wrong model cannot fall through to another instance", () => {
  const { hass, registry } = fixture();
  for (const [id, reason] of [
    ["deleted", "missing_device"],
    ["co-a", "model_mismatch"],
  ]) {
    const result = resolveDevice(
      {
        ...config,
        device_id: id,
        entities: { smoke: "binary_sensor.renamed_smoke" },
      },
      hass,
      registry,
    );
    assert.equal(result.reason, reason);
    assert.deepEqual(result.bindings, {});
  }
});
test("ZHA manufacturer model aliases and renamed entity IDs use device classes", () => {
  const { hass, registry } = fixture();
  const resolved = resolveDevice(
    { ...config, model: "HS1CA-E-PLUS" },
    hass,
    registry,
  );
  assert.equal(resolved.device?.id, "co-a");
  assert.deepEqual(resolved.bindings.co, ["binary_sensor.zha_random_id"]);
});
test("translation keys survive arbitrary entity ID renaming", () => {
  const { hass, add, registry } = fixture();
  add("binary_sensor.renamed_completely", "smoke-a", "on", undefined, {
    translation_key: "self_test",
  });
  assert.equal(roleFor(registry.entities.at(-1)!, hass, "smoke"), "test");
});
test("disabled and hidden entities are excluded for both registry API shapes", () => {
  const { hass, add, registry } = fixture();
  add("binary_sensor.disabled_smoke", "smoke-a", "on", "smoke", {
    disabled_by: "user",
  });
  add("binary_sensor.hidden_smoke", "smoke-a", "on", "smoke", {
    hidden_by: "user",
  });
  add("binary_sensor.display_hidden_smoke", "smoke-a", "on", "smoke", {
    hidden: true,
  });
  assert.deepEqual(
    bindEntities(
      registry.entities.filter((entry) => entry.device_id === "smoke-a"),
      hass,
      "smoke",
    ).smoke,
    ["binary_sensor.renamed_smoke"],
  );
});
test("config switches and numerical concentrations never become detector states", () => {
  const { hass, add, registry } = fixture();
  add("switch.smoke_mute", "smoke-a", "on", undefined, {
    entity_category: "config",
  });
  add("sensor.smoke_carbon_monoxide", "smoke-a", "1", "carbon_monoxide");
  add("sensor.smoke_level", "smoke-a", "10");
  const result = resolveDevice(config, hass, registry);
  assert.equal(result.bindings.control, undefined);
  assert.equal(result.bindings.co, undefined);
  assert.deepEqual(result.bindings.smoke, ["binary_sensor.renamed_smoke"]);
});
test("manual entity-only setup works without registry access", () => {
  const { hass } = fixture();
  const result = resolveDevice(
    { ...config, entities: { smoke: "binary_sensor.renamed_smoke" } },
    hass,
    { devices: [], entities: [] },
  );
  assert.equal(result.reason, undefined);
  assert.deepEqual(result.bindings.smoke, ["binary_sensor.renamed_smoke"]);
});
test("detector mute switches use native settings when upstream omits config metadata", () => {
  const { hass, add, registry } = fixture();
  add("switch.sensor_remote_mute", "smoke-a", "off");
  const result = resolveDevice(config, hass, registry);
  assert.equal(result.bindings.control, undefined);
  assert.ok(
    configurationEntities(result.entities, hass, "smoke").some(
      (entry) => entry.entity_id === "switch.sensor_remote_mute",
    ),
  );
});
test("primary entity identifies its parent device", () => {
  const { hass, registry } = fixture();
  const result = resolveDevice(
    { ...config, entity: "binary_sensor.renamed_smoke" },
    hass,
    registry,
  );
  assert.equal(result.device?.id, "smoke-a");
});
test("logical child endpoints are grouped under a single product", () => {
  const { hass, registry, add } = fixture();
  registry.devices = [
    { id: "relay", model: "HS1RM-E", manufacturer: "HEIMAN" },
    {
      id: "relay-left",
      model: "HS1RM-E",
      manufacturer: "HEIMAN",
      parent_device_id: "relay",
    },
    {
      id: "relay-right",
      model: "HS1RM-E",
      manufacturer: "HEIMAN",
      parent_device_id: "relay",
    },
  ];
  add("switch.relay_left", "relay-left", "on");
  add("switch.relay_right", "relay-right", "off");
  const result = resolveDevice({ ...config, model: "HS1RM-E" }, hass, registry);
  assert.equal(result.candidates.length, 1);
  assert.deepEqual(result.bindings.control, [
    "switch.relay_left",
    "switch.relay_right",
  ]);
});
test("registry requests are shared per HA connection and rejected requests can retry", async () => {
  const { hass, registry } = fixture();
  let calls = 0;
  hass.callWS = async <T>(message: { type: string }): Promise<T> => {
    calls++;
    return (
      message.type.includes("device") ? registry.devices : registry.entities
    ) as T;
  };
  const [one, two] = await Promise.all([
    loadRegistry(hass),
    loadRegistry({ ...hass }),
  ]);
  assert.equal(calls, 2);
  assert.equal(one, two);
  hass.callWS = async () => {
    throw new Error("permission denied");
  };
  await assert.rejects(loadRegistry(hass, true));
  hass.callWS = async <T>(message: { type: string }): Promise<T> =>
    (message.type.includes("device")
      ? registry.devices
      : registry.entities) as T;
  assert.equal((await loadRegistry(hass)).devices.length, 3);
});
test("already loaded HA registries need no websocket access", () => {
  const { hass, registry } = fixture();
  hass.devices = Object.fromEntries(
    registry.devices.map((device) => [device.id, device]),
  );
  hass.entities = Object.fromEntries(
    registry.entities.map((entry) => [entry.entity_id, entry]),
  );
  assert.equal(currentRegistry(hass)?.devices.length, 3);
});
test("configuration validates inputs and preserves HA layout options", () => {
  assert.throws(() => normalizeConfig({ ...config, style: "broken" as never }));
  assert.throws(() => normalizeConfig({ ...config, model: "made up" }));
  assert.throws(() =>
    normalizeConfig({ ...config, entities: { smoke: "invalid" } }),
  );
  assert.throws(() =>
    normalizeConfig({ ...config, show_details: "false" as never }),
  );
  const grid_options = { columns: 6, rows: 3 };
  const normalized = normalizeConfig({ ...config, grid_options });
  assert.deepEqual(normalized.grid_options, grid_options);
  assert.equal(normalized.style, "home");
});
