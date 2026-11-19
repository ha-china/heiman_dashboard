import { build } from "esbuild";
import { readFile, readdir } from "node:fs/promises";

const { version } = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url)),
);
const runtimeLicense = await readFile("node_modules/lit/LICENSE", "utf8");
const result = await build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/heiman_dashboard.js",
  bundle: true,
  format: "esm",
  target: ["es2022"],
  minify: true,
  legalComments: "inline",
  metafile: true,
  define: { __VERSION__: JSON.stringify(version) },
  banner: {
    js: `/* HEIMAN Dashboard v${version} | Apache-2.0 | See LICENSE and NOTICE */\n/* Bundled Lit runtime:\n${runtimeLicense}\n*/`,
  },
});
const inputs = new Set(Object.keys(result.metafile.inputs));
for (const file of await readdir("src/locales")) {
  if (file.endsWith(".json") && !inputs.has(`src/locales/${file}`))
    throw new Error(
      `Locale resource is missing from the installation bundle: ${file}`,
    );
}
const outputs = Object.values(result.metafile.outputs);
if (outputs.length !== 1 || outputs.some((output) => output.imports.length))
  throw new Error("The card must build as one self-contained JavaScript file.");
