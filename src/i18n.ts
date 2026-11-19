import type { CardConfig, HomeAssistant, Language } from "./types";
import en from "./locales/en.json";
import zh from "./locales/zh.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";
import es from "./locales/es.json";
import it from "./locales/it.json";
import nl from "./locales/nl.json";
import pt from "./locales/pt.json";
import pl from "./locales/pl.json";

export const LANGUAGE_NAMES: Record<Language, string> = {
  zh: zh.language_name,
  en: en.language_name,
  de: de.language_name,
  fr: fr.language_name,
  es: es.language_name,
  it: it.language_name,
  nl: nl.language_name,
  pt: pt.language_name,
  pl: pl.language_name,
};
export type TranslationKey = keyof typeof en;
export const TRANSLATIONS: Record<Language, Record<TranslationKey, string>> = {
  en,
  zh,
  de,
  fr,
  es,
  it,
  nl,
  pt,
  pl,
};
export function languageFor(
  config?: CardConfig,
  hass?: HomeAssistant,
): Language {
  if (config?.language && config.language !== "auto") return config.language;
  const language = (hass?.locale?.language ?? hass?.language ?? "en")
    .toLowerCase()
    .split(/[-_]/)[0];
  return Object.hasOwn(LANGUAGE_NAMES, language)
    ? (language as Language)
    : "en";
}
export const translate = (language: Language, key: TranslationKey): string =>
  (TRANSLATIONS[language] ?? en)[key] ?? en[key];
