import type {
  EntityState,
  HomeAssistant,
  Registry,
  RegistryEntity,
} from "../src/types";

export function fixture() {
  const registry: Registry = {
    devices: [
      {
        id: "smoke-a",
        manufacturer: "HEIMAN",
        model: "HS1SA-E-PLUS",
        name: "Living room",
      },
      {
        id: "co-a",
        manufacturer: "HEIMAN",
        model: "HS1CA-E PLUS",
        name: "Kitchen",
      },
      {
        id: "other",
        manufacturer: "Other",
        model: "Motion",
        name: "Other brand",
      },
    ],
    entities: [],
  };
  const hass: HomeAssistant = {
    states: {},
    language: "en",
    connection: {},
    callService: async () => undefined,
  };
  function add(
    id: string,
    device: string,
    state: string,
    deviceClass?: string,
    extra: Partial<RegistryEntity> = {},
  ): void {
    const value: EntityState = {
      entity_id: id,
      state,
      attributes: {
        friendly_name: `User renamed ${id}`,
        device_class: deviceClass,
      },
      last_updated: "2026-11-19T01:00:00Z",
    };
    hass.states[id] = value;
    registry.entities.push({
      entity_id: id,
      device_id: device,
      platform: device === "co-a" ? "zha" : "mqtt",
      ...extra,
    });
  }
  add("binary_sensor.renamed_smoke", "smoke-a", "off", "smoke");
  add("sensor.renamed_smoke_battery", "smoke-a", "95", "battery");
  add("binary_sensor.renamed_smoke_fault", "smoke-a", "off", "problem");
  add("binary_sensor.other_smoke", "other", "on", "smoke");
  add("binary_sensor.zha_random_id", "co-a", "off", "carbon_monoxide");
  return { registry, hass, add };
}
