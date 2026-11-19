import { test, expect, type Page } from "@playwright/test";
import type { CardConfig, HomeAssistant, DevicePreset } from "../../src/types";
import { readFileSync } from "node:fs";

const { models: CATALOG } = JSON.parse(
  readFileSync(new URL("../../src/data/catalog.json", import.meta.url), "utf8"),
) as { models: DevicePreset[] };

declare global {
  interface Window {
    heimanDemo: {
      hass: HomeAssistant;
      calls: {
        domain: string;
        service: string;
        data: { entity_id: string; [key: string]: unknown };
      }[];
      config: CardConfig;
      failService: boolean;
      refresh(): void;
      setState(id: string, value: string): void;
      setAttributes(id: string, attributes: Record<string, unknown>): void;
      setLanguage(language: string): void;
    };
  }
}
async function ready(page: Page) {
  await page.goto("/");
  await expect(page.locator("#card-smoke .status-label")).toHaveText("Normal");
}
test("card picker registration, module reload and default setup", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await ready(page);
  expect(
    await page.evaluate(
      () =>
        window.customCards?.filter((card) => card.type === "heiman-device-card")
          .length,
    ),
  ).toBe(1);
  await page.evaluate(async () => {
    const resource = "/dist/heiman_dashboard.js?reload=1";
    await import(resource);
  });
  expect(
    await page.evaluate(
      () =>
        window.customCards?.filter((card) => card.type === "heiman-device-card")
          .length,
    ),
  ).toBe(1);
  await expect(page.locator("#card-co .status-label")).toHaveText("Normal");
  await expect(page.locator("#card-co .top .source-badge")).toHaveText("ZHA");
  expect(errors).toEqual([]);
});
test("all three styles and alarm/offline/low-battery scenarios update", async ({
  page,
}) => {
  await ready(page);
  for (const style of ["fire", "minimal", "home"]) {
    await page.locator(`[data-style='${style}']`).click();
    await expect(page.locator(`#card-smoke ha-card`)).toHaveClass(style);
  }
  await page.locator("#scenario").selectOption("alarm");
  await expect(page.locator("#card-smoke ha-card")).toHaveAttribute(
    "data-severity",
    "alarm",
  );
  await expect(page.locator("#card-smoke .status-label")).toHaveText("Alarm");
  await page.locator("#scenario").selectOption("offline");
  await expect(page.locator("#card-smoke .status-label")).toHaveText(
    "Unavailable",
  );
  await page.locator("#scenario").selectOption("battery");
  await expect(page.locator("#card-smoke .alerts")).toContainText(
    "Low battery",
  );
  await page.evaluate(() =>
    window.heimanDemo.setState("binary_sensor.smoke_smoke", "unknown"),
  );
  await expect(page.locator("#card-smoke .status-label")).toHaveText("Unknown");
});
test("visual editor saves model, instance, style, language and display settings", async ({
  page,
}) => {
  await ready(page);
  await page.locator("#edit-toggle").click();
  const editor = page.locator("#editor");
  await editor.locator("#search").fill("HS3HT");
  await editor.locator("#model").selectOption("HS3HT");
  await expect(page.locator("#editor-preview .model")).toHaveText("HS3HT");
  expect(await page.evaluate(() => window.heimanDemo.config.device_id)).toBe(
    "climate",
  );
  await editor.getByRole("button", { name: "Fire safety" }).click();
  await expect(page.locator("#editor-preview ha-card")).toHaveClass("fire");
  await editor.locator("#name").fill("My bedroom");
  await editor.locator("#name").press("Tab");
  await expect(page.locator("#editor-preview h2")).toHaveText("My bedroom");
  await editor.getByLabel("Show battery", { exact: true }).uncheck();
  await expect(
    page
      .locator("#editor-preview .metric-label")
      .filter({ hasText: "Battery" }),
  ).toHaveCount(0);
  await editor.locator("#language").selectOption("en");
  await expect(page.locator("#editor-preview .status-label")).toHaveText(
    "Normal",
  );
  await editor.locator("#search").fill("SmokeSensor-EF2");
  await expect(editor.locator("option[value='HS1SA-E Lover']")).toHaveCount(1);
});
test("same-model instances need selection and registry updates change the card", async ({
  page,
}) => {
  await ready(page);
  await page.evaluate(() => {
    const hass = window.heimanDemo.hass;
    hass.devices = {
      ...hass.devices,
      extra: {
        id: "extra",
        model: "HS1SA-E-PLUS",
        manufacturer: "HEIMAN",
        name: "Second alarm",
      },
    };
    const card = document.createElement("heiman-device-card");
    card.id = "ambiguous";
    card.setConfig({
      type: "custom:heiman-device-card",
      model: "HS1SA-E-PLUS",
      language: "en",
    });
    card.hass = hass;
    document.body.append(card);
  });
  await expect(page.locator("#ambiguous .empty")).toContainText(
    "Several devices match",
  );
  await page.evaluate(() => {
    const card = document.querySelector(
      "#ambiguous",
    ) as HTMLElementTagNameMap["heiman-device-card"];
    card.setConfig({
      type: "custom:heiman-device-card",
      model: "HS1SA-E-PLUS",
      device_id: "smoke",
      language: "en",
    });
  });
  await expect(page.locator("#ambiguous .status-label")).toHaveText("Normal");
  await page.evaluate(() => {
    const card = document.querySelector(
      "#ambiguous",
    ) as HTMLElementTagNameMap["heiman-device-card"];
    const hass = window.heimanDemo.hass;
    delete hass.devices!.smoke;
    card.hass = hass;
  });
  await expect(page.locator("#ambiguous .empty")).toContainText("no longer");
});
test("native information dialogs receive entity IDs without sending device commands", async ({
  page,
}) => {
  await ready(page);
  await page.locator("#card-smoke .icon-button").click();
  await expect(page.locator("#events")).toContainText(
    "binary_sensor.smoke_smoke",
  );
  expect(await page.evaluate(() => window.heimanDemo.calls.length)).toBe(0);
});
test("switch commands target the selected entity, update state and recover from failures", async ({
  page,
}) => {
  await ready(page);
  await page.locator("#card-plug .actions button").click();
  await expect(page.locator("#card-plug .status-label")).toHaveText("Off");
  expect(await page.evaluate(() => window.heimanDemo.calls.at(-1))).toEqual({
    domain: "switch",
    service: "turn_off",
    data: { entity_id: "switch.plug_outlet" },
  });
  await page.evaluate(() => {
    window.heimanDemo.failService = true;
  });
  await page.locator("#card-plug .actions button").click();
  await expect(page.locator("#card-plug .error")).toContainText(
    "command failed",
  );
  await page.evaluate(() =>
    window.heimanDemo.setState("switch.plug_outlet", "unavailable"),
  );
  await expect(page.locator("#card-plug .actions button")).toBeDisabled();
});
test("manual mapping works after registry permission failure", async ({
  page,
}) => {
  await ready(page);
  await page.evaluate(() => {
    const card = document.createElement("heiman-device-card");
    card.id = "manual";
    card.setConfig({
      type: "custom:heiman-device-card",
      model: "HS1SA-E-PLUS",
      entities: { smoke: "binary_sensor.smoke_smoke" },
      language: "en",
    });
    card.hass = {
      ...window.heimanDemo.hass,
      devices: undefined,
      entities: undefined,
      connection: {},
      callWS: async () => {
        throw new Error("permission denied");
      },
    };
    document.body.append(card);
  });
  await expect(page.locator("#manual .status-label")).toHaveText("Normal");
});
test("malicious device labels render as text and mobile layouts do not overflow", async ({
  page,
}) => {
  await ready(page);
  await page.evaluate(() => {
    const card = document.querySelector(
      "#card-smoke",
    ) as HTMLElementTagNameMap["heiman-device-card"];
    card.setConfig({
      type: "custom:heiman-device-card",
      model: "HS1SA-E-PLUS",
      device_id: "smoke",
      name: '<img src=x onerror="window.pwned=1">',
      language: "en",
    });
  });
  await expect(page.locator("#card-smoke h2")).toHaveText(
    '<img src=x onerror="window.pwned=1">',
  );
  await expect(page.locator("#card-smoke h2 img")).toHaveCount(0);
  await page.setViewportSize({ width: 375, height: 900 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await expect(page.locator("#card-smoke .status-label")).toHaveText("Normal");
});
test("every catalog preset renders with MQTT model_id and its available HA capabilities", async ({
  page,
}) => {
  await ready(page);
  const errors = await page.evaluate(async (presets) => {
    const hass = {
      ...window.heimanDemo.hass,
      devices: {},
      entities: {},
      states: {},
    } as HomeAssistant;
    const host = document.createElement("div");
    document.body.append(host);
    const cards = presets.map((preset, index) => {
      const id = `catalog_${index}`;
      hass.devices![id] = {
        id,
        model: preset.description,
        model_id: preset.id,
        manufacturer: "HEIMAN",
      };
      const add = (
        domain: string,
        suffix: string,
        value: string,
        deviceClass?: string,
      ) => {
        const entity_id = `${domain}.${id}_${suffix}`;
        hass.entities![entity_id] = {
          entity_id,
          device_id: id,
          platform: "mqtt",
          translation_key: suffix,
        };
        hass.states[entity_id] = {
          entity_id,
          state: value,
          attributes: { device_class: deviceClass, supported_features: 11 },
        };
      };
      if (preset.kind === "smoke_co") {
        add("binary_sensor", "smoke", "off", "smoke");
        add("binary_sensor", "co", "off", "carbon_monoxide");
      } else if (
        [
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
      ) {
        const classes: Record<string, string> = {
          smoke: "smoke",
          co: "carbon_monoxide",
          heat: "heat",
          gas: "gas",
          leak: "moisture",
          contact: "door",
          motion: "motion",
          vibration: "vibration",
        };
        add("binary_sensor", preset.kind, "off", classes[preset.kind]);
      } else if (preset.kind === "climate") {
        add("sensor", "temperature", "21", "temperature");
        add("sensor", "humidity", "50", "humidity");
      } else if (preset.kind === "air")
        add("sensor", "co2", "450", "carbon_dioxide");
      else if (preset.kind === "remote")
        add("sensor", "battery", "95", "battery");
      else
        add(
          ["plug", "switch"].includes(preset.kind) ? "switch" : preset.kind,
          "control",
          preset.kind === "cover" ? "closed" : "off",
        );
      const card = document.createElement("heiman-device-card");
      card.setConfig({
        type: "custom:heiman-device-card",
        model: preset.id,
        device_id: id,
      });
      card.hass = hass;
      host.append(card);
      return { card, preset };
    });
    for (const { card } of cards) {
      await card.updateComplete;
      await card.updateComplete;
    }
    return cards
      .filter(
        ({ card }) =>
          card.shadowRoot?.querySelector(".empty") ||
          ["unknown", "unavailable"].includes(
            card.shadowRoot
              ?.querySelector("ha-card")
              ?.getAttribute("data-severity") ?? "unknown",
          ),
      )
      .map(({ preset }) => preset.id);
  }, CATALOG);
  expect(errors).toEqual([]);
});
test("multi-channel controls address each entity and covers honor supported features", async ({
  page,
}) => {
  await ready(page);
  await page.evaluate(() => {
    const hass = window.heimanDemo.hass;
    hass.devices = {
      ...hass.devices,
      relay: { id: "relay", model_id: "HS1RM-E", manufacturer: "HEIMAN" },
      curtain: {
        id: "curtain",
        model_id: "HS2CM-N-DC",
        manufacturer: "HEIMAN",
      },
    };
    hass.entities = { ...hass.entities };
    for (const suffix of ["left", "right"]) {
      const id = `switch.relay_${suffix}`;
      hass.entities[id] = {
        entity_id: id,
        device_id: "relay",
        platform: "zha",
      };
      hass.states[id] = {
        entity_id: id,
        state: "off",
        attributes: { friendly_name: suffix },
      };
    }
    hass.entities["cover.curtain"] = {
      entity_id: "cover.curtain",
      device_id: "curtain",
      platform: "mqtt",
    };
    hass.states["cover.curtain"] = {
      entity_id: "cover.curtain",
      state: "closed",
      attributes: { friendly_name: "Curtain", supported_features: 1 },
    };
    for (const [id, model] of [
      ["relay", "HS1RM-E"],
      ["curtain", "HS2CM-N-DC"],
    ]) {
      const card = document.createElement("heiman-device-card");
      card.id = `test-${id}`;
      card.setConfig({
        type: "custom:heiman-device-card",
        model,
        device_id: id,
        language: "en",
      });
      card.hass = hass;
      document.body.append(card);
    }
  });
  await expect(page.locator("#test-relay .actions button")).toHaveCount(2);
  await page
    .locator("#test-relay .actions button")
    .filter({ hasText: "right" })
    .click();
  expect(
    (await page.evaluate(() => window.heimanDemo.calls.at(-1)))?.data.entity_id,
  ).toBe("switch.relay_right");
  await expect(page.locator("#test-curtain .actions button")).toHaveCount(1);
  await page.locator("#test-curtain .actions button").click();
  expect(await page.evaluate(() => window.heimanDemo.calls.at(-1))).toEqual({
    domain: "cover",
    service: "open_cover",
    data: { entity_id: "cover.curtain" },
  });
});
test("unrelated HA state changes do not redraw cards, while bound state changes do", async ({
  page,
}) => {
  await ready(page);
  const result = await page.evaluate(async () => {
    const card = document.querySelector(
      "#card-smoke",
    ) as HTMLElementTagNameMap["heiman-device-card"];
    const initial = window.heimanDemo.hass;
    card.hass = initial;
    await card.updateComplete;
    await card.updateComplete;
    let renders = 0;
    card.addController({
      hostUpdated() {
        renders++;
      },
    });
    for (let i = 0; i < 20; i++) {
      card.hass = {
        ...initial,
        states: {
          ...initial.states,
          "sensor.unrelated": {
            entity_id: "sensor.unrelated",
            state: String(i),
            attributes: {},
          },
        },
      };
      await card.updateComplete;
    }
    const unrelated = renders;
    card.hass = {
      ...initial,
      states: {
        ...initial.states,
        "binary_sensor.smoke_smoke": {
          ...initial.states["binary_sensor.smoke_smoke"],
          state: "on",
        },
      },
    };
    await card.updateComplete;
    const related = renders;
    card.hass = { ...card.hass, themes: { darkMode: true } };
    await card.updateComplete;
    return { unrelated, related, theme: renders };
  });
  expect(result).toEqual({ unrelated: 0, related: 1, theme: 2 });
  await expect(page.locator("#card-smoke .status-label")).toHaveText("Alarm");
  await expect(page.locator("#card-smoke ha-card")).toHaveAttribute(
    "data-dark",
    "",
  );
});
