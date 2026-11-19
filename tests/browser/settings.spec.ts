import { test, expect } from "@playwright/test";
import type { Language } from "../../src/types";

declare global {
  interface Window {
    heimanTestCalls: {
      domain: string;
      service: string;
      data: Record<string, unknown>;
    }[];
    heimanTestRelease?: () => void;
  }
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#card-smoke .status-label")).toHaveText("正常");
});
test("self-test, temporary hush and indicator controls issue exact device services", async ({
  page,
}) => {
  const controls = page.locator("#card-smoke heiman-entity-controls");
  await expect(
    controls.getByRole("button", { name: "远程自检", exact: true }),
  ).toBeEnabled();
  await controls.getByRole("button", { name: "远程自检", exact: true }).click();
  expect(await page.evaluate(() => window.heimanDemo.calls.at(-1))).toEqual({
    domain: "button",
    service: "press",
    data: { entity_id: "button.smoke_trigger_selftest" },
  });
  await controls.getByRole("button", { name: "临时消音", exact: true }).click();
  expect(await page.evaluate(() => window.heimanDemo.calls.at(-1))).toEqual({
    domain: "switch",
    service: "turn_on",
    data: { entity_id: "switch.smoke_temporary_mute" },
  });
  await controls
    .getByRole("switch", { name: "状态指示灯", exact: true })
    .uncheck();
  expect(await page.evaluate(() => window.heimanDemo.calls.at(-1))).toEqual({
    domain: "switch",
    service: "turn_off",
    data: { entity_id: "switch.smoke_heartbeat_indicator" },
  });
  await expect(
    controls.getByRole("switch", { name: "状态指示灯", exact: true }),
  ).not.toBeChecked();
  await expect(controls.locator(".feedback")).toContainText("指令已发送");
});
test("Z2M sound profiles are staged until start; stop sends the exposed stop option", async ({
  page,
}) => {
  const controls = page.locator("#card-smoke heiman-entity-controls");
  await controls.locator(".siren summary").click();
  await controls
    .getByLabel("警音模式", { exact: true })
    .selectOption("co_siren");
  expect(await page.evaluate(() => window.heimanDemo.calls.length)).toBe(0);
  await controls.getByRole("button", { name: "开启警报", exact: true }).click();
  expect(await page.evaluate(() => window.heimanDemo.calls.at(-1))).toEqual({
    domain: "select",
    service: "select_option",
    data: {
      entity_id: "select.smoke_siren_for_automation_only",
      option: "co_siren",
    },
  });
  await controls.getByRole("button", { name: "停止警报", exact: true }).click();
  expect(await page.evaluate(() => window.heimanDemo.calls.at(-1))).toEqual({
    domain: "select",
    service: "select_option",
    data: {
      entity_id: "select.smoke_siren_for_automation_only",
      option: "stop",
    },
  });
});
test("ZHA basic sirens expose duration without unsupported tone or volume controls", async ({
  page,
}) => {
  const controls = page.locator("#card-co heiman-entity-controls");
  await controls.locator(".siren summary").click();
  await expect(controls.getByLabel("警音模式", { exact: true })).toHaveCount(0);
  await expect(controls.getByLabel("音量", { exact: true })).toHaveCount(0);
  await controls.getByLabel("持续时间", { exact: true }).fill("12");
  await controls.getByRole("button", { name: "开启警报", exact: true }).click();
  expect(await page.evaluate(() => window.heimanDemo.calls.at(-1))).toEqual({
    domain: "siren",
    service: "turn_on",
    data: { entity_id: "siren.co_alarm", duration: 12 },
  });
  await controls.getByRole("button", { name: "停止警报", exact: true }).click();
  expect(await page.evaluate(() => window.heimanDemo.calls.at(-1))).toEqual({
    domain: "siren",
    service: "turn_off",
    data: { entity_id: "siren.co_alarm" },
  });
});
test("full siren capabilities preserve dictionary tones and convert percentage volume", async ({
  page,
}) => {
  await page.evaluate(() =>
    window.heimanDemo.setAttributes("siren.co_alarm", {
      supported_features: 31,
      available_tones: { 1: "Burglar", 2: "Fire" },
    }),
  );
  const controls = page.locator("#card-co heiman-entity-controls");
  await controls.locator(".siren summary").click();
  await controls.getByLabel("警音模式", { exact: true }).selectOption("2");
  await controls.getByLabel("持续时间", { exact: true }).fill("15");
  await controls.getByLabel("音量", { exact: true }).fill("35");
  await controls.getByRole("button", { name: "开启警报", exact: true }).click();
  expect(await page.evaluate(() => window.heimanDemo.calls.at(-1))).toEqual({
    domain: "siren",
    service: "turn_on",
    data: {
      entity_id: "siren.co_alarm",
      tone: "Fire",
      duration: 15,
      volume_level: 0.35,
    },
  });
});
test("number settings submit valid numeric data and surface service failures", async ({
  page,
}) => {
  const controls = page.locator("#card-smoke heiman-entity-controls");
  await controls.locator(".advanced-settings summary").click();
  await controls.getByLabel("温度校准", { exact: true }).fill("16");
  await controls.getByRole("button", { name: "应用", exact: true }).click();
  await expect(controls.getByRole("alert")).toContainText("请输入设备允许范围");
  expect(await page.evaluate(() => window.heimanDemo.calls.length)).toBe(0);
  await controls.getByLabel("温度校准", { exact: true }).fill("-1.2");
  await controls.getByRole("button", { name: "应用", exact: true }).click();
  expect(await page.evaluate(() => window.heimanDemo.calls.at(-1))).toEqual({
    domain: "number",
    service: "set_value",
    data: { entity_id: "number.smoke_temperature_offset", value: -1.2 },
  });
  await page.evaluate(() => {
    window.heimanDemo.failService = true;
  });
  await controls.getByRole("button", { name: "远程自检", exact: true }).click();
  await expect(controls.getByRole("alert")).toHaveText(
    "指令执行失败，请重试。",
  );
  await expect(
    controls.getByRole("button", { name: "远程自检", exact: true }),
  ).toBeEnabled();
});
test("stop remains available while a siren start request is pending", async ({
  page,
}) => {
  await page.evaluate(() => {
    const card = document.querySelector(
      "#card-co",
    ) as HTMLElementTagNameMap["heiman-device-card"];
    const controls = card.shadowRoot!.querySelector("heiman-entity-controls")!;
    window.heimanTestCalls = [];
    controls.hass = {
      ...controls.hass!,
      callService: async (domain, service, data) => {
        window.heimanTestCalls.push({ domain, service, data });
        if (service === "turn_on")
          await new Promise<void>((resolve) => {
            window.heimanTestRelease = resolve;
          });
      },
    };
  });
  const controls = page.locator("#card-co heiman-entity-controls");
  await controls.getByRole("button", { name: "开启警报", exact: true }).click();
  await expect(
    controls.getByRole("button", { name: "开启警报", exact: true }),
  ).toBeDisabled();
  await expect(
    controls.getByRole("button", { name: "停止警报", exact: true }),
  ).toBeEnabled();
  await controls.getByRole("button", { name: "停止警报", exact: true }).click();
  expect(
    await page.evaluate(() =>
      window.heimanTestCalls.map((call) => call.service),
    ),
  ).toEqual(["turn_on", "turn_off"]);
  await page.evaluate(() => window.heimanTestRelease?.());
  await expect(
    controls.getByRole("button", { name: "开启警报", exact: true }),
  ).toBeEnabled();
});
test("offline cards are grey and their actuator controls are disabled", async ({
  page,
}) => {
  await page.locator("#scenario").selectOption("offline");
  const card = page.locator("#card-smoke"),
    controls = card.locator("heiman-entity-controls");
  await expect(card.locator(".status-label")).toHaveText("不可用");
  expect(
    await card
      .locator("ha-card")
      .evaluate((node) => getComputedStyle(node).filter),
  ).toBe("grayscale(1)");
  await expect(
    controls.getByRole("button", { name: "远程自检", exact: true }),
  ).toBeDisabled();
  await expect(
    controls.getByRole("button", { name: "停止警报", exact: true }),
  ).toBeDisabled();
  await expect(
    controls.getByRole("switch", { name: "状态指示灯", exact: true }),
  ).toBeDisabled();
});
test("nine languages cover unavailable states and inline settings without mobile overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  // HA's display registry can merge default English names into `name`.
  await page.evaluate(() => {
    window.heimanDemo.hass.entities!["switch.smoke_heartbeat_indicator"].name =
      "Heartbeat indicator";
    window.heimanDemo.hass.entities!["button.smoke_trigger_selftest"].name =
      "Trigger selftest";
    window.heimanDemo.refresh();
  });
  const labels: Record<Language, [string, string]> = {
    zh: ["不可用", "状态指示灯"],
    en: ["Unavailable", "Status indicator"],
    de: ["Nicht verfügbar", "Statusanzeige"],
    fr: ["Indisponible", "Voyant d’état"],
    es: ["No disponible", "Indicador de estado"],
    it: ["Non disponibile", "Indicatore di stato"],
    nl: ["Niet beschikbaar", "Statuslampje"],
    pt: ["Indisponível", "Indicador de estado"],
    pl: ["Niedostępne", "Dioda stanu"],
  };
  await page.locator("#scenario").selectOption("offline");
  for (const [language, [status, indicator]] of Object.entries(labels)) {
    await page.evaluate((language) => {
      const card = document.querySelector(
        "#card-smoke",
      ) as HTMLElementTagNameMap["heiman-device-card"];
      card.setConfig({
        type: "custom:heiman-device-card",
        model: "HS1SA-E-PLUS",
        device_id: "smoke",
        language: language as Language,
        show_details: false,
      });
    }, language);
    await expect(page.locator("#card-smoke .status-label")).toHaveText(status);
    await expect(
      page
        .locator("#card-smoke")
        .getByRole("switch", { name: indicator, exact: true }),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});
