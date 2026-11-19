# Architecture

HEIMAN Dashboard is a frontend Home Assistant Lovelace card. Its HACS category is **Dashboard**, represented as `plugin` in validation workflows. The repository follows `heiman_home` conventions for the root README, Apache-2.0 license, HACS metadata and GitHub checks, while its runtime uses a frontend plugin structure.

```text
heiman_dashboard/
├── hacs.json                      # Display name, bundle name and minimum HA version
├── dist/heiman_dashboard.js        # Committed, installable single-file bundle
├── src/
│   ├── index.ts                   # Card, editor and picker registration
│   ├── base.ts                    # HA state, registry loading and lifecycle
│   ├── card.ts                    # Device display, details and native actions
│   ├── editor.ts                  # Model, device, style and entity assignments
│   ├── catalog.ts                 # Product and Zigbee alias lookup
│   ├── config.ts                  # Validation and defaults
│   ├── entities.ts                # Device ownership, child devices and roles
│   ├── entity-controls.ts         # Inline test, hush, indicator and siren settings
│   ├── control-actions.ts         # Control classification and parameter validation
│   ├── state.ts                   # Status priorities and value formatting
│   ├── i18n.ts                    # Language selection and English fallback
│   ├── locales/                   # Complete translations and native language names
│   ├── card-styles.ts             # Home, fire safety, minimal and dark styles
│   ├── icons.ts                   # Local SVG icons and generic product drawings
│   └── data/catalog.json          # Models, aliases and pinned upstream sources
├── scripts/                       # Build, preview and catalog update tools
├── tests/                         # Matching, state and browser interaction checks
├── demo/                          # Preview with explicitly simulated device data
├── image/                         # Screenshots generated from the demo
├── README.md
└── .github/workflows/             # Frontend validation, HACS checks and releases
```

## Card setup and layout

The module registers `heiman-device-card`, its visual editor and the **HEIMAN Dashboard** entry in `window.customCards`. Home Assistant uses `getConfigElement()` to load the editor and `getStubConfig()` for initial configuration. The editor emits `config-changed` with the full configuration and preserves HA layout options such as `grid_options`.

Model selection matches device registry `model_id`, `model` and known Zigbee aliases. A unique match can be selected automatically; choosing a model with one match saves its device ID. Multiple instances require an explicit selection. A deleted device or a model mismatch prompts the user to select again. Unknown model configurations fail validation.

All three styles use a compact layout. A small product drawing sits beside the name, status appears once and measurements share a readings strip. The MQTT/ZHA badge sits beside HEIMAN, while the header timestamp provides a full date tooltip. The bottom action row appears only when settings or details are available.

Device control and details start collapsed and open one at a time. Device control contains quick actions, sirens, indicators and all remaining configuration fields in one panel; additional settings have no separate expander. The control component stays mounted to retain drafts and pending service requests. Detector alarms expose the available hush action immediately, and a siren reported as sounding exposes its supported stop action even when controls are collapsed. An unknown siren state is never interpreted as sounding.

## Z2M and ZHA adaptation

Both integrations use HA device/entity registries and `hass.states`; the card does not access MQTT or Zigbee directly. Already loaded `hass.devices` and `hass.entities` take precedence. Otherwise, device/entity registry WebSocket requests are shared per HA connection. Failed requests can retry, and disconnected components discard stale responses.

Entities are grouped by `device_id`, including recursive logical child endpoints. Matching prioritizes domain, device class and translation key, then semantically explicit entity ID suffixes. Disabled and hidden entities are excluded. Configuration switches are not treated as primary power controls, and numeric concentrations never become boolean alarm decisions.

All matched entities for each role are retained. Multiple switches remain separate controls; any active detector channel can raise an alarm. The main display uses the first measurement per role, with all readings available in details. Manual `entities` assignments override automatic matching.

Switches, lights and covers use native HA services against their exact entity IDs. Cover actions follow `supported_features`. Inline settings use `button.press`, `switch.turn_on/off`, `select.select_option`, `number.set_value` and `text.set_value` as appropriate. Temporary hush issues the exposed hush request without inventing an inverse command.

Z2M automation sound profiles use the `siren_for_automation_only` select options. ZHA sirens use native `siren.turn_on/off`. Tone, volume and duration follow feature bits 4, 8 and 16, preserving dictionary/list tone semantics. Stop remains available during a pending start request. A button reporting `unknown` can still be pressed for the first time; unavailable devices or entities cannot be commanded. Service success means the request was sent, not that a physical test passed or hush took effect.

Firmware updates and complex remote functions use the native `hass-more-info` dialog. Settings without configuration-category metadata can still be discovered. Cards rerender when their own entities, shared registries or display settings change, avoiding unrelated updates in large installations.

## Status and reliability

Alarm state has priority. Missing, unknown, unavailable or invalid safety readings never produce a normal state. Combined smoke/CO detectors require both channels to report normal. Low battery, tamper and faults remain visible as maintenance alerts. Unknown battery values do not become zero; LQI is not converted to a percentage; temperature and concentration readings do not invent vendor alarm thresholds.

Unavailable cards are grey. A dashboard can place them last using mutually exclusive [native HA visibility conditions](https://www.home-assistant.io/dashboards/conditional/) for online/unavailable groups and a full-width heading before the unavailable group. Conditions use primary entity states and preserve alarm priority. Missing auxiliary battery or temperature data alone does not establish device unavailability. HA shows conditional cards in edit mode to allow configuration.

Lit escapes configuration values, labels and readings. The runtime uses no `unsafeHTML`, remote scripts or external translation services, and sends no device data to HEIMAN or catalog sources.

## Language and repository conventions

`language: auto` is the default. It follows the current HA user's interface language, including regional codes and runtime language changes. Unsupported or unavailable language settings fall back to English. An explicit card language takes precedence. The visual editor labels automatic selection **Follow Home Assistant**.

`src/locales/en.json` defines translation keys; the other eight resources provide the same key set. Native language names also live in these resources. Source code, comments, documentation, demo content and commit messages use English. Localized UI text belongs in `src/locales/`.

## Extension and validation

Run `npm run catalog:update` to obtain new Z2M/ZHA source snapshots. The script extracts metadata with TypeScript AST/text parsing without executing downloaded code. It records upstream commit hashes and per-model ZHA handlers. Unrecognized product categories or unmapped ZHA models stop generation for review.

Review `src/data/catalog.json`, `docs/SUPPORTED_DEVICES.md` and upstream differences, then add matching/state coverage where required. New styles involve `card-styles.ts`, editor options, configuration validation and translation resources. Generic SVG drawings are illustrative; official product assets can be bundled locally later.

Run `npm run check` and `npm run test:browser`, then commit the rebuilt `dist/heiman_dashboard.js`. Minimum HA support is a compatibility target; releases still require validation on the minimum supported version and actual hardware.
