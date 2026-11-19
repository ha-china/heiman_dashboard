# Releases and HACS validation

This project is prepared as a HACS **Dashboard** plugin. Version publication, default-catalog inclusion and hardware acceptance are separate release steps. A successful local build alone does not establish HACS approval.

## Repository metadata

The repository name `heiman_dashboard` matches `dist/heiman_dashboard.js` and `hacs.json.filename`. Its public location is `ha-china/heiman_dashboard`; update references if ownership changes.

Maintain the following GitHub repository metadata:

- Description: `HEIMAN product cards for Home Assistant with Zigbee2MQTT and ZHA support.`
- Topics: `home-assistant`, `hacs`, `lovelace-custom-card`, `heiman`, `zigbee2mqtt`, `zha`.
- Enable Issues, use Apache-2.0 licensing and keep README images accessible from the public default branch.

`hacs.json` uses supported frontend plugin fields. The distribution directory contains the installable JavaScript file, bundling Lit and local runtime resources. Validation uses category `plugin`; integration-only `hassfest` and Python `manifest.json` files do not apply.

Use English for source code, comments, documentation, demo content and commit messages. Keep translated UI text and native language names in `src/locales/`. Keep automatic HA language selection as the default, with English fallback when the language cannot be supported or determined.

## Validation

1. Run `npm ci`, `npm run format:check` and `npm run check`.
2. Run `npx playwright install --with-deps chromium` and `npm run test:browser`.
3. Commit the rebuilt `dist/heiman_dashboard.js`. When changing the version, update `package.json`, the lockfile, CHANGELOG and demo version together.
4. Install on the minimum supported HA version and the current stable version. Check HACS download/resource registration, browser reload, card search, visual configuration, saved configuration and sections/masonry layouts.
5. Use real Z2M and ZHA devices to verify model aliases, matching, normal/alarm/test/unavailable/low-battery states, multiple instances and multi-channel controls. Record firmware, HA and integration versions. Coordinate physical alarm/test actions with the installation owner.
6. Verify automatic language changes, regional language codes, English fallback and explicit language overrides. Ensure that all nine locale resources have the same key set.
7. Push the public repository and wait for both **HACS Action** and **Validate** to pass. HACS validation has no ignored checks and requires actual public repository metadata.

Run `npm run validate:release -- --tag v0.1.0` before tagging version 0.1.0. This checks package/lockfile/demo/bundle/release-note/changelog versions, supported locale files, duplicate or missing translation keys, locale imports, standalone distribution, local documentation links and catalog counts. It validates the local payload without publishing a tag or release.

All locale JSON is bundled into the JavaScript file. This frontend plugin does not need a separate runtime translation download or the Python integration `strings.json`/`translations/` layout. HACS plugin validation is distinct from integration-only hassfest checks.

## Publishing a release

The package version must match the Git tag: package version `0.1.0` corresponds to `v0.1.0`. Update the lockfile, demo, CHANGELOG and [prepared release notes](RELEASE_NOTES.md) together when changing that version. Pushing a matching tag triggers the Release workflow, which validates the full payload, runs browser and HACS checks, then publishes a GitHub Release with `heiman_dashboard.js` attached.

A prerelease package/tag such as `0.1.0-beta.1` / `v0.1.0-beta.1` is marked as a GitHub prerelease automatically. A plain tag such as `v0.1.0` creates a normal release. Set the package, lockfile, demo, changelog and release notes to the same prerelease version before using a prerelease tag. HACS requires a full published GitHub Release for default-catalog submission; a normal release after the required checks and maintainer acceptance is recommended for this project.

Do not confuse a successful `main` branch HACS run with a published release. A repository with no release can be used as a custom repository, but does not meet the default-catalog release requirement. GitHub tags alone do not satisfy it either.

The Release workflow does not submit the project to the HACS default catalog. Before requesting inclusion, validate custom-repository installation and follow the [HACS inclusion requirements](https://hacs.xyz/docs/publish/include/). The repository owner or a major contributor can submit a pull request to the `plugin` list in `hacs/default`.

Submit from a personal owner/contributor account with an editable pull request, using a new branch based on the current `hacs/default` default branch. Add `ha-china/heiman_dashboard` alphabetically to `plugin` and complete the upstream pull request template accurately. Publication and upstream submission are explicit maintainer actions; local validation performs neither.

References: [publishing requirements](https://hacs.xyz/docs/publish/start/), [dashboard repository structure](https://hacs.xyz/docs/publish/plugin/), [HACS Action](https://hacs.xyz/docs/publish/action/) and [HA card registration/editor](https://contributors.home-assistant.io/frontend/custom-ui/card-editor/).
