# HEIMAN Dashboard 0.1.0

Initial Dashboard plugin for HEIMAN devices already paired through Zigbee2MQTT or ZHA.

- Discover HEIMAN Dashboard in the HA card picker and select a model, device and style in the visual editor.
- Choose Home, Fire safety or Minimal styling with a compact readings layout.
- Match 83 product presets and known Zigbee aliases from pinned upstream sources, including 10 presets with explicit ZHA quirk evidence.
- Display detector alarms, unknown/unavailable states, battery, signal and exposed measurements.
- Use one Device control panel for supported self-test, hush, indicator, siren and select/number controls.
- Follow the current HA user's language by default, with English fallback and nine complete locale resources.
- Install a single JavaScript file with bundled translations, Lit runtime and local SVG drawings.

## Installation

Add `ha-china/heiman_dashboard` as a HACS **Dashboard** custom repository, download and reload the browser. Edit a dashboard, add a card and search for **HEIMAN Dashboard**. See the repository README for resource registration and manual installation.

## Compatibility and validation limits

- The declared HA compatibility target is 2025.10.0 or later; live frontend validation has been performed on HA 2026.11.0. Minimum-version acceptance remains to be completed.
- Capabilities depend on the entities and firmware exposed by Z2M/ZHA. A product preset or upstream quirk is not certification that all hardware features have been tested.
- Device names and vendor-specific options remain as supplied by the integration. The card does not pair devices or install ZHA quirks.
- Browser service requests have been validated without triggering physical alarm or self-test actions. Physical hardware acceptance remains a separate maintainer step.
- HACS default-catalog inclusion is separate from publishing this release.
