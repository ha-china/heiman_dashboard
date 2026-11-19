import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";

test("default cards follow HA language changes and use English fallback", async ({
  page,
}) => {
  await page.goto("/");
  const card = page.locator("#card-smoke");
  const editor = page.locator("#editor");
  await expect(card.locator(".status-label")).toHaveText("Normal");
  await expect(editor.locator("#language")).toHaveValue("auto");
  await expect(editor.locator('#language option[value="auto"]')).toHaveText(
    "Follow Home Assistant",
  );

  for (const [locale, code] of [
    ["zh-Hans", "zh"],
    ["de-DE", "de"],
    ["fr-CA", "fr"],
    ["es-ES", "es"],
    ["it-IT", "it"],
    ["nl-BE", "nl"],
    ["pt_PT", "pt"],
    ["pl-PL", "pl"],
    ["en-GB", "en"],
    ["sv-SE", "en"],
    ["", "en"],
  ]) {
    const labels = JSON.parse(
      readFileSync(
        new URL(`../../src/locales/${code}.json`, import.meta.url),
        "utf8",
      ),
    );
    await page.evaluate(
      (locale) => window.heimanDemo.setLanguage(locale),
      locale,
    );
    await expect(card).toHaveAttribute("lang", code);
    await expect(card.locator(".status-label")).toHaveText(labels.normal);
    await expect(card.locator(".settings-toggle")).toHaveText(labels.settings);
    await expect(editor.locator('#language option[value="auto"]')).toHaveText(
      labels.follow_system,
    );
    expect(await page.evaluate(() => window.heimanDemo.config.language)).toBe(
      "auto",
    );
  }

  await page.evaluate(() => {
    const card = document.querySelector(
      "#card-smoke",
    ) as HTMLElementTagNameMap["heiman-device-card"];
    card.setConfig({ ...window.heimanDemo.config, language: "en" });
    window.heimanDemo.setLanguage("de-DE");
  });
  await expect(card.locator(".settings-toggle")).toHaveText("Device settings");
  await expect(page.locator("#card-co")).toHaveAttribute("lang", "de");
  expect(await page.evaluate(() => window.heimanDemo.calls.length)).toBe(0);
});
