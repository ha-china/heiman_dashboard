await customElements.whenDefined("heiman-device-card");
const devices = [
  ["smoke", "HS1SA-E-PLUS", "Living room smoke alarm", "living", "mqtt"],
  ["co", "HS1CA-E-PLUS", "Kitchen CO alarm", "kitchen", "zha"],
  ["climate", "HS3HT", "Bedroom climate", "bedroom", "mqtt"],
  ["leak", "HS1WL/HS3WL", "Laundry leak sensor", "laundry", "zha"],
  ["contact", "HS1DS", "Entrance door", "entry", "zha"],
  ["plug", "HS2SK", "Reading corner plug", "living", "mqtt"],
].map(([id, model, name, area_id, platform]) => ({
  id,
  model,
  name,
  area_id,
  platform,
  manufacturer: "HEIMAN",
}));
let states = {};
let locale = { language: "en" };
const entities = {};
const now = new Date().toISOString();
function entity(
  deviceId,
  domain,
  suffix,
  state,
  deviceClass,
  unit,
  extra = {},
) {
  const device = devices.find((item) => item.id === deviceId);
  const entity_id = `${domain}.${deviceId}_${suffix}`;
  states[entity_id] = {
    entity_id,
    state: String(state),
    attributes: {
      friendly_name: `${device.name} ${suffix}`,
      ...(deviceClass ? { device_class: deviceClass } : {}),
      ...(unit ? { unit_of_measurement: unit } : {}),
      ...extra,
    },
    last_changed: now,
    last_updated: now,
  };
  entities[entity_id] = {
    entity_id,
    device_id: deviceId,
    platform: device.platform,
    ...(domain === "button" || domain === "select"
      ? { entity_category: "config" }
      : {}),
  };
}
entity("smoke", "binary_sensor", "smoke", "off", "smoke");
entity("smoke", "sensor", "temperature", 23.6, "temperature", "°C");
entity("smoke", "sensor", "battery", 98, "battery", "%");
entity("smoke", "sensor", "linkquality", 178, undefined, "lqi");
entity("smoke", "button", "trigger_selftest", "unknown");
entity("smoke", "switch", "temporary_mute", "off");
entities["switch.smoke_temporary_mute"].entity_category = "config";
entity("smoke", "switch", "heartbeat_indicator", "on");
entity(
  "smoke",
  "select",
  "siren_for_automation_only",
  "stop",
  undefined,
  undefined,
  { options: ["stop", "smoke_siren", "co_siren"] },
);
entity("smoke", "number", "temperature_offset", "unknown", undefined, "°C", {
  min: -15,
  max: 15,
  step: 0.1,
});
entity("co", "binary_sensor", "co", "off", "carbon_monoxide");
entity("co", "sensor", "battery", 96, "battery", "%");
entity("co", "sensor", "temperature", 24.1, "temperature", "°C");
entity("co", "sensor", "rssi", -64, "signal_strength", "dBm");
entity("co", "siren", "alarm", "off", undefined, undefined, {
  supported_features: 19,
});
entities["siren.co_alarm"].entity_category = "config";
entity("co", "button", "remote_test", "unknown");
entity("climate", "sensor", "temperature", 22.8, "temperature", "°C");
entity("climate", "sensor", "humidity", 54, "humidity", "%");
entity("climate", "sensor", "battery", 86, "battery", "%");
entity("climate", "sensor", "linkquality", 201, undefined, "lqi");
entity("leak", "binary_sensor", "moisture", "off", "moisture");
entity("leak", "sensor", "battery", 100, "battery", "%");
entity("leak", "sensor", "rssi", -67, "signal_strength", "dBm");
entity("contact", "binary_sensor", "contact", "off", "door");
entity("contact", "sensor", "battery", 92, "battery", "%");
entity("contact", "sensor", "rssi", -58, "signal_strength", "dBm");
entity("plug", "switch", "outlet", "on");
entity("plug", "sensor", "power", 36.4, "power", "W");
entity("plug", "sensor", "energy", 2.18, "energy", "kWh");
const normalStates = structuredClone(states);
const calls = [];
const connection = {};
const cards = [];
let style = "home";
const baseConfig = {
  type: "custom:heiman-device-card",
  style,
  show_details: false,
  language: "auto",
};
const editor = document.querySelector("#editor");
const preview = document.querySelector("#editor-preview");
let editorConfig = { ...baseConfig, model: "HS1SA-E-PLUS", device_id: "smoke" };
function hass() {
  return {
    states,
    entities,
    devices: Object.fromEntries(devices.map((device) => [device.id, device])),
    areas: {
      living: { name: "Living room" },
      kitchen: { name: "Kitchen" },
      bedroom: { name: "Bedroom" },
      laundry: { name: "Laundry" },
      entry: { name: "Entrance" },
    },
    language: locale.language,
    locale,
    connection,
    callService: async (domain, service, data) => {
      calls.push({ domain, service, data });
      document.querySelector("#events").textContent =
        `Simulated service call: ${domain}.${service} → ${data.entity_id}`;
      if (window.heimanDemo.failService) throw new Error("Demo failure");
      if (states[data.entity_id])
        states = {
          ...states,
          [data.entity_id]: {
            ...states[data.entity_id],
            state:
              service === "select_option"
                ? String(data.option)
                : service === "set_value"
                  ? String(data.value)
                  : service === "press"
                    ? new Date().toISOString()
                    : service === "turn_on"
                      ? "on"
                      : "off",
            last_updated: new Date().toISOString(),
          },
        };
      refresh();
    },
  };
}
function refresh() {
  const value = hass();
  for (const card of cards) card.hass = value;
  editor.hass = value;
  preview.hass = value;
}
for (const device of devices) {
  const card = document.createElement("heiman-device-card");
  card.id = `card-${device.id}`;
  card.setConfig({ ...baseConfig, model: device.model, device_id: device.id });
  document.querySelector("#cards").append(card);
  cards.push(card);
}
editor.setConfig(editorConfig);
preview.setConfig(editorConfig);
editor.addEventListener("config-changed", (event) => {
  editorConfig = event.detail.config;
  preview.setConfig(editorConfig);
});
document.addEventListener("hass-more-info", (event) => {
  document.querySelector("#events").textContent =
    `Home Assistant details: ${event.detail.entityId}`;
});
document.querySelectorAll("[data-style]").forEach((button) =>
  button.addEventListener("click", () => {
    style = button.dataset.style;
    document
      .querySelectorAll("[data-style]")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
    for (let i = 0; i < cards.length; i++)
      cards[i].setConfig({
        ...baseConfig,
        style,
        model: devices[i].model,
        device_id: devices[i].id,
      });
  }),
);
document.querySelector("#scenario").addEventListener("change", (event) => {
  states = structuredClone(normalStates);
  if (event.target.value === "alarm")
    states["binary_sensor.smoke_smoke"].state = "on";
  if (event.target.value === "offline")
    states["binary_sensor.smoke_smoke"].state = "unavailable";
  if (event.target.value === "battery")
    states["sensor.smoke_battery"].state = "12";
  refresh();
});
document.querySelector("#edit-toggle").addEventListener("click", (event) => {
  const panel = document.querySelector("#editor-panel");
  panel.hidden = !panel.hidden;
  event.currentTarget.setAttribute("aria-expanded", String(!panel.hidden));
  if (!panel.hidden)
    panel.scrollIntoView({ behavior: "instant", block: "start" });
});
window.heimanDemo = {
  get hass() {
    return hass();
  },
  get calls() {
    return calls;
  },
  get config() {
    return editorConfig;
  },
  failService: false,
  refresh,
  setLanguage(language) {
    locale = { language };
    refresh();
  },
  setState(id, state) {
    states = { ...states, [id]: { ...states[id], state } };
    refresh();
  },
  setAttributes(id, attributes) {
    states = {
      ...states,
      [id]: {
        ...states[id],
        attributes: { ...states[id].attributes, ...attributes },
      },
    };
    refresh();
  },
};
refresh();
