import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#card-smoke .status-label")).toHaveText("Normal");
});

test("six devices and their readings fit on a desktop without expanding settings", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const style of ["home", "fire", "minimal"]) {
    await page.locator(`[data-style=${style}]`).click();
    const cards = await page
      .locator("#cards heiman-device-card")
      .evaluateAll((nodes) =>
        nodes.map((node) => {
          const rect = node.getBoundingClientRect();
          return { height: rect.height, bottom: rect.bottom };
        }),
      );
    expect(cards).toHaveLength(6);
    expect(
      cards.every((card) => card.height < 280 && card.bottom <= 1000),
    ).toBe(true);
    await expect(page.locator("#card-smoke .settings-toggle")).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    await expect(page.locator("#card-smoke .metric-value")).toHaveText([
      "23.6 °C",
      "98 %",
      "178 lqi",
    ]);
    await expect(
      page.locator("#card-smoke heiman-entity-controls .full"),
    ).toBeHidden();
  }
});

test("settings and readings expand on demand without issuing commands or losing drafts", async ({
  page,
}) => {
  const card = page.locator("#card-smoke");
  await page.evaluate(() => {
    const element = document.querySelector(
      "#card-smoke",
    ) as HTMLElementTagNameMap["heiman-device-card"];
    element.setConfig({ ...window.heimanDemo.config, show_details: true });
  });
  await card.locator(".settings-toggle").click();
  const settings = card.locator("heiman-entity-controls");
  await expect(
    settings.getByRole("button", { name: "Remote self-test", exact: true }),
  ).toBeVisible();
  await settings.locator(".siren summary").click();
  await settings
    .getByLabel("Sound profile", { exact: true })
    .selectOption("co_siren");
  await card.locator(".details-toggle").click();
  await expect(card.locator(".readings")).toBeVisible();
  await expect(settings.locator(".full")).toBeHidden();
  await card.locator(".settings-toggle").click();
  await expect(card.locator(".readings")).toBeHidden();
  await expect(
    settings.getByLabel("Sound profile", { exact: true }),
  ).toHaveValue("co_siren");
  expect(await page.evaluate(() => window.heimanDemo.calls.length)).toBe(0);
});

test("an alarm exposes hush and a sounding siren exposes stop even with settings closed", async ({
  page,
}) => {
  const smoke = page.locator("#card-smoke"),
    co = page.locator("#card-co");
  await page.locator("#scenario").selectOption("alarm");
  await expect(smoke.locator(".status-label")).toHaveText("Alarm");
  await expect(smoke.locator(".settings-toggle")).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await smoke
    .locator(".emergency")
    .getByRole("button", { name: "Temporary hush", exact: true })
    .click();
  expect(await page.evaluate(() => window.heimanDemo.calls.at(-1))).toEqual({
    domain: "switch",
    service: "turn_on",
    data: { entity_id: "switch.smoke_temporary_mute" },
  });
  await page.evaluate(() => window.heimanDemo.setState("siren.co_alarm", "on"));
  await expect(co.locator(".emergency-stop")).toBeVisible();
  await co.locator(".emergency-stop").click();
  expect(await page.evaluate(() => window.heimanDemo.calls.at(-1))).toEqual({
    domain: "siren",
    service: "turn_off",
    data: { entity_id: "siren.co_alarm" },
  });
  await expect(co.locator(".emergency-stop")).toHaveCount(0);
  await page.evaluate(() =>
    window.heimanDemo.setState(
      "select.smoke_siren_for_automation_only",
      "co_siren",
    ),
  );
  await smoke.locator(".emergency-stop").click();
  expect(await page.evaluate(() => window.heimanDemo.calls.at(-1))).toEqual({
    domain: "select",
    service: "select_option",
    data: {
      entity_id: "select.smoke_siren_for_automation_only",
      option: "stop",
    },
  });
  await page.evaluate(() =>
    window.heimanDemo.setState(
      "select.smoke_siren_for_automation_only",
      "unknown",
    ),
  );
  await expect(smoke.locator(".emergency-stop")).toHaveCount(0);
});
