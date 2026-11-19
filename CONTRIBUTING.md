# Contributing

Use Node.js 22.21+ and `npm ci`. Keep changes focused and describe the affected model, integration and expected behavior.

Product compatibility evidence belongs in the generated catalog and supported-devices table. Update them with `npm run catalog:update`; review upstream sources and add meaningful entity-resolution or status tests when behavior changes. Do not infer support for manufacturer-specific features from similar product names.

Run `npm run format`, `npm run check`, and `npm run test:browser`. Commit the built `dist/heiman_dashboard.js` with source changes. The browser tests use simulated HA data; include real device validation details when available. The local demo is available with `npm run dev`.

Pull requests should explain the problem, resulting behavior and validation performed. See [release instructions](docs/RELEASING.md) for HACS and hardware verification.
