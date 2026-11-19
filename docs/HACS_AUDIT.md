# HACS submission audit

Audit date: **2026-11-19**. Target package version: **0.1.0**.

This is a readiness snapshot and a description of repeatable checks. It is not a record of HACS default-catalog acceptance. Repository metadata and publication status must be checked again when submitting.

## Conclusion

The repository satisfies the checked Dashboard plugin structure, metadata, translation and local version-consistency requirements. The audit found **no published GitHub Release or tag**. A full GitHub Release must be published after successful validation before requesting default-catalog inclusion. The prepared [release notes](RELEASE_NOTES.md) and [release workflow](../.github/workflows/release.yaml) make that next step reviewable; this audit does not publish a release or submit an upstream PR.

## Checked requirements

| Area                  | Finding                                                                                                                                                                                                                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Repository metadata   | Public, active, Issues enabled, English description and topics present. GitHub recognizes the Apache-2.0 license.                                                                                                                                                                                           |
| HACS category         | Dashboard / `plugin`; integration-only hassfest and Python manifests do not apply.                                                                                                                                                                                                                          |
| Installation file     | `dist/heiman_dashboard.js` matches the repository name and `hacs.json.filename`.                                                                                                                                                                                                                            |
| Runtime resources     | Lit, SVG drawings, catalog and all locale resources are bundled into one JavaScript file; no external module imports remain.                                                                                                                                                                                |
| Local version         | Package, both lockfile version fields, demo, bundle banner, runtime version, changelog and prepared release-note version are checked against 0.1.0. The intended tag is `v0.1.0`; it is not treated as already published.                                                                                   |
| Translation resources | Nine files: `en`, `zh`, `de`, `fr`, `es`, `it`, `nl`, `pt`, `pl`. Each has 139 matching, nonempty keys. Duplicate keys, missing files and unimported locales fail validation.                                                                                                                               |
| Language behavior     | Automatic HA language selection, regional codes, explicit overrides and English fallback have browser coverage.                                                                                                                                                                                             |
| Documentation         | Local links and PNG preview files are checked. README model/quirk counts match the catalog and supported-device table: 83 presets and 10 explicit ZHA quirk matches.                                                                                                                                        |
| Repository language   | Source, comments, documentation, demo and commit messages use English. Localized UI text remains in locale resources.                                                                                                                                                                                       |
| HACS validation       | Audit commit `593cc4f` passed [HACS validation](https://github.com/ha-china/heiman_dashboard/actions/runs/44465416583) and [frontend validation](https://github.com/ha-china/heiman_dashboard/actions/runs/44465416507) without ignored HACS checks. Rerun checks after further changes and before release. |
| Release status        | **Blocking default-catalog submission:** no GitHub Release existed at audit start. A branch install and green HACS Action do not replace this requirement.                                                                                                                                                  |

## Validation coverage and limits

Live frontend checks were performed on HA 2026.11.0 using the native HA Marketplace installation path and existing Z2M/ZHA entities. Card discovery, visual editing, three styles, offline grouping, inline controls and locale switching were checked. Classic HACS UI installation and the declared minimum HA 2025.10.0 environment were not independently exercised during this audit.

Browser command payloads were checked without actuating physical alarms or self-tests. Product presets and upstream quirks are compatibility evidence, not hardware certification. The README and release notes distinguish this evidence from full per-model/firmware validation.

## Repeatable local checks

The audit passed formatting, type checking, a reproducible bundle build, 37 unit tests and 23 browser tests. Negative fixtures verify that missing/incomplete translations, duplicate or empty keys, version drift, unimported locales, external runtime imports and missing README images are rejected. Release-command simulations cover stable and prerelease tags without publishing anything.

```sh
npm ci
npm run format:check
npm run check
npx playwright install --with-deps chromium
npm run test:browser
npm run validate:release -- --tag v0.1.0
git diff --exit-code -- dist/
```

The release validator checks the local installation payload. It does not claim that a remote tag/release exists, that the release asset has been uploaded, or that HACS has accepted an upstream submission.

The release workflow now also checks publication metadata, compares the downloaded installation asset with the validated bundle and runs HACS validation after publication. These remote publication checks will execute when a maintainer publishes a release; local workflow simulations do not replace that live verification.

## Common failure modes

| Symptom                                                   | Check or correction                                                                                                                                                                           |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HACS description/topics validation fails                  | Update the GitHub repository About fields; changing README text alone does not update repository metadata.                                                                                    |
| Default-catalog release check fails                       | Create a full GitHub Release after checks pass. A commit or tag alone is insufficient.                                                                                                        |
| HACS shows a commit ID while the card logs 0.1.0          | Expected for default-branch installs without releases. Release tags determine normal HACS release versions.                                                                                   |
| Tag, package or browser version differs                   | Run the release validator and rebuild/commit the distribution. Update every versioned file together. Do not add an unsupported `version` field to `hacs.json`.                                |
| Missing language or untranslated menu                     | Validate locale file existence, matching keys, nonempty values, imports and bundle inputs. A separate integration-style translation directory is not needed for this bundle.                  |
| Card unavailable in the picker                            | Check module registration, the resource URL/type and browser reload. Avoid duplicate resource registrations.                                                                                  |
| README images or local links are broken                   | Keep linked files committed with correct case; run the local release validator.                                                                                                               |
| New source but old downloaded UI                          | Rebuild and commit `dist/heiman_dashboard.js`; use a new resource cache identifier. If manually deploying to a server that serves a precompressed copy, update the JS and gzip file together. |
| Prerelease unexpectedly marked stable                     | Use a matching prerelease package/tag such as `0.1.0-beta.1` / `v0.1.0-beta.1`. The workflow derives the GitHub prerelease flag from the tag.                                                 |
| Automated publication does not trigger release validation | `GITHUB_TOKEN` does not trigger another workflow through `release.published`. Run publication verification and HACS checks directly in the release workflow.                                  |
| Claim exceeds actual testing                              | Keep minimum-version and physical-device acceptance limits explicit; never describe all catalog presets as hardware-certified.                                                                |

## Official references

- [HACS general publishing requirements](https://www.hacs.xyz/docs/publish/start/)
- [HACS Dashboard plugin structure](https://www.hacs.xyz/docs/publish/plugin/)
- [HACS default-catalog inclusion requirements](https://www.hacs.xyz/docs/publish/include/)
- [HACS Action behavior and checks](https://www.hacs.xyz/docs/publish/action/)
