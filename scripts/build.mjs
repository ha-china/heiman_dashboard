import { build } from "esbuild";
import { readFile } from "node:fs/promises";

const { version } = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url)),
);
const runtimeLicense = await readFile("node_modules/lit/LICENSE", "utf8");
await build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/heiman_dashboard.js",
  bundle: true,
  format: "esm",
  target: ["es2022"],
  minify: true,
  legalComments: "inline",
  define: { __VERSION__: JSON.stringify(version) },
  banner: {
    js: `/* HEIMAN Dashboard v${version} | Apache-2.0 | See LICENSE and NOTICE */\n/* Bundled Lit runtime:\n${runtimeLicense}\n*/`,
  },
});
