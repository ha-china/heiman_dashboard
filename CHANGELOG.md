# Changelog

## 0.1.0 — Unreleased

- Validate release versions, locale resources, standalone packaging and documentation links in CI; gate publication on HACS checks and mark prerelease tags correctly.
- Merge inline and additional settings into one Device control panel without a second settings expander.
- Default to following the current HA user's language with English fallback; use English repository content and isolate localized strings in locale resources.
- Add HEIMAN Dashboard card discovery and a native visual configuration editor.
- Add 83 product presets from pinned Z2M metadata, including 10 with explicit ZHA quirk evidence.
- Add home, fire safety and minimal styles, English/Chinese localization and responsive layouts.
- Compact all three styles with merged status/readings, smaller illustrations and on-demand settings/details; keep alarm hush and active siren stop actions immediately available.
- Place MQTT/ZHA badges beside HEIMAN and move update timestamps into the header; omit empty action rows.
- Match device-scoped entities, logical child endpoints and multi-channel controls.
- Recognize ZHA's generic IAS zone for known heat alarm models.
- Update cards only when their device entities or shared display settings change, and index product aliases for larger installations.
- Add inline indicator, self-test, temporary hush, siren and supported select/number settings with capability-aware service payloads.
- Grey unavailable cards and disable their actuator controls.
- Add complete German, French, Spanish, Italian, Dutch, Portuguese and Polish UI translations alongside Chinese and English.
- Distinguish detector alarms, missing/unknown data and unavailable channels; display actual entity controls and diagnostics.
- Add reproducible single-file builds, a catalog update script, interactive demo, automated tests and HACS/release workflows.
