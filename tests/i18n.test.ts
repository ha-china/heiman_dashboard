import assert from "node:assert/strict";
import { test } from "node:test";
import {
  LANGUAGE_NAMES,
  TRANSLATIONS,
  languageFor,
  translate,
} from "../src/i18n";
import { normalizeConfig } from "../src/config";
import type { CardConfig, HomeAssistant, Language } from "../src/types";

test("all nine languages provide every card, editor and control string", () => {
  assert.equal(Object.keys(LANGUAGE_NAMES).length, 9);
  const keys = Object.keys(TRANSLATIONS.en).sort();
  for (const [language, labels] of Object.entries(TRANSLATIONS)) {
    assert.deepEqual(Object.keys(labels).sort(), keys, language);
    for (const value of Object.values(labels))
      assert.ok(value.trim(), language);
    assert.equal(
      normalizeConfig({
        type: "custom:heiman-device-card",
        language: language as Language,
      }).language,
      language,
    );
  }
});
test("regional HA language codes resolve and explicit language overrides are respected", () => {
  for (const [code, expected] of [
    ["zh-Hans", "zh"],
    ["de-DE", "de"],
    ["fr-CA", "fr"],
    ["pt_PT", "pt"],
    ["nl-BE", "nl"],
    ["pl-PL", "pl"],
    ["ru", "en"],
  ]) {
    assert.equal(
      languageFor(undefined, { language: code } as HomeAssistant),
      expected,
    );
  }
  assert.equal(
    languageFor(
      { language: "it" } as CardConfig,
      { language: "de-DE" } as HomeAssistant,
    ),
    "it",
  );
  assert.equal(translate("de", "unavailable"), TRANSLATIONS.de.unavailable);
  assert.equal(
    translate("fr", "remote_self_test"),
    TRANSLATIONS.fr.remote_self_test,
  );
});

test("automatic selection follows HA locale and falls back to English", () => {
  const config = normalizeConfig({ type: "custom:heiman-device-card" });
  assert.equal(config.language, "auto");
  assert.equal(languageFor(config), "en");
  assert.equal(languageFor(config, {} as HomeAssistant), "en");
  assert.equal(
    languageFor(config, { language: "sv-SE" } as HomeAssistant),
    "en",
  );
  assert.equal(languageFor(config, { language: "" } as HomeAssistant), "en");
  assert.equal(
    languageFor(config, {
      language: "fr",
      locale: { language: "de-DE" },
    } as HomeAssistant),
    "de",
  );
  assert.equal(
    languageFor(config, {
      language: "fr",
      locale: { language: "sv-SE" },
    } as HomeAssistant),
    "en",
  );
});
