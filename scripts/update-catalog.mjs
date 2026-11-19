// Read upstream metadata as text/AST only. Never execute downloaded converter/quirk code.
import ts from "typescript";
import { mkdir, writeFile } from "node:fs/promises";

const repos = {
  z2m: ["Koenkk/zigbee-herdsman-converters", "master"],
  zha: ["zigpy/zha-device-handlers", "dev"],
};
const headers = {
  "User-Agent": "heiman-dashboard-catalog",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};
async function get(url, json = false) {
  const response = await fetch(url, {
    headers,
    signal: AbortSignal.timeout(30000),
  });
  if (!response.ok) throw new Error(`${response.status} fetching ${url}`);
  return json ? response.json() : response.text();
}
const sources = {};
for (const [key, [repository, branch]] of Object.entries(repos)) {
  const commit = await get(
    `https://api.github.com/repos/${repository}/commits/${branch}`,
    true,
  );
  sources[key] = {
    repository,
    branch,
    commit: commit.sha,
    url: `https://github.com/${repository}/tree/${commit.sha}`,
  };
}
const z2m = sources.z2m;
const sourceText = await get(
  `https://raw.githubusercontent.com/${z2m.repository}/${z2m.commit}/src/devices/heiman.ts`,
);
const source = ts.createSourceFile(
  "heiman.ts",
  sourceText,
  ts.ScriptTarget.Latest,
  true,
);
let definitions;
function visit(node) {
  if (
    ts.isVariableDeclaration(node) &&
    node.name.getText(source) === "definitions" &&
    node.initializer &&
    ts.isArrayLiteralExpression(node.initializer)
  )
    definitions = node.initializer;
  ts.forEachChild(node, visit);
}
visit(source);
if (!definitions)
  throw new Error(
    "Upstream definitions array not found; review changed source structure.",
  );
const property = (node, name) =>
  node.properties.find((p) => p.name?.getText(source) === name)?.initializer;
function strings(node, key) {
  const result = [];
  function walk(current) {
    if (!key && ts.isStringLiteral(current)) result.push(current.text);
    if (
      key &&
      ts.isPropertyAssignment(current) &&
      current.name.getText(source) === key &&
      ts.isStringLiteral(current.initializer)
    )
      result.push(current.initializer.text);
    ts.forEachChild(current, walk);
  }
  if (node) walk(node);
  return result;
}
function kindFor(description, id) {
  if (/smoke.*CO/i.test(description)) return "smoke_co";
  if (/smoke/i.test(description)) return "smoke";
  if (/carbon monoxide/i.test(description)) return "co";
  if (/heat alarm/i.test(description)) return "heat";
  if (/gas sensor/i.test(description)) return "gas";
  if (/water leakage/i.test(description)) return "leak";
  if (/door sensor/i.test(description)) return "contact";
  if (/fall detection/i.test(description)) return "fall";
  if (/motion|occupancy|presence|PIR sensor/i.test(description))
    return "motion";
  if (/vibration/i.test(description)) return "vibration";
  if (/temperature.*humidity/i.test(description)) return "climate";
  if (/air quality/i.test(description)) return "air";
  if (/siren/i.test(description)) return "siren";
  if (/plug/i.test(description)) return "plug";
  if (/relay module|gang with neutral/i.test(description)) return "switch";
  if (/E27|bulb|night light|notifier/i.test(description)) return "light";
  if (/window shade/i.test(description)) return "cover";
  if (/remote|scene switch|button|IR Control/i.test(description))
    return "remote";
  throw new Error(`Classify new device ${id}: ${description}`);
}
const models = definitions.elements.map((node) => {
  const id = property(node, "model")?.text;
  const description = property(node, "description")?.text;
  if (!id || !description)
    throw new Error("Unrecognized definition; review upstream.");
  const aliases = [
    ...strings(property(node, "zigbeeModel")),
    ...strings(property(node, "fingerprint"), "modelID"),
    ...id.split("/"),
  ];
  // A Tuya model ID alone is ambiguous across manufacturers, so do not add TSxxxx fingerprints.
  return {
    id,
    description,
    kind: kindFor(description, id),
    aliases: [...new Set(aliases.filter((a) => a !== id))],
    zha: "standard",
    zhaSources: [],
  };
});
const zha = sources.zha;
const files = await get(
  `https://api.github.com/repos/${zha.repository}/contents/zhaquirks/heiman?ref=${zha.commit}`,
  true,
);
const normalize = (value) => value.toLowerCase().replace(/[\s-]+/g, "");
for (const file of files.filter(
  (f) => f.name.endsWith(".py") && f.name !== "__init__.py",
)) {
  const text = await get(file.download_url);
  const matches = [
    ...text.matchAll(/\.applies_to\("(?:HEIMAN|Heiman)",\s*"([^"]+)"\)/g),
    ...text.matchAll(/\((?:HEIMAN|"HEIMAN"),\s*"([^"]+)"\)/g),
  ];
  for (const [, alias] of matches) {
    const model = models.find((m) =>
      [m.id, ...m.aliases].some((a) => normalize(a) === normalize(alias)),
    );
    if (!model)
      throw new Error(
        `Unmapped ZHA model ${alias} in ${file.name}. Add a reviewed preset.`,
      );
    model.aliases = [...new Set([...model.aliases, alias])].filter(
      (a) => a !== model.id,
    );
    model.zha = "quirk";
    if (!model.zhaSources.includes(file.name)) model.zhaSources.push(file.name);
  }
}
const generatedOn = new Date().toISOString().slice(0, 10);
const catalog = { generatedOn, sources, models };
const documentation = `# Supported devices\n\nSnapshot: ${generatedOn}. ${models.length} product presets.\n\nZigbee2MQTT presets come from the pinned [HEIMAN converter](${z2m.url}/src/devices/heiman.ts). ZHA evidence comes from pinned [HEIMAN quirks](${zha.url}/zhaquirks/heiman). ZHA has no exhaustive supported-device list. **Quirk** means a matching upstream handler exists; **Standard entities** means this card can display the device if ZHA exposes its standard HA entities, not verified device compatibility. Quirks on the development branch may require a newer Home Assistant release. No physical devices have been certified by this project.\n\nAll presets work through HA entities; the card does not pair Zigbee devices or install quirks. A shared marketing name does not guarantee equal capabilities across firmware or integrations. Only entities actually exposed by your integration are displayed.\n\n| Model | Type | Z2M | ZHA evidence | Zigbee model aliases |\n| --- | --- | --- | --- | --- |\n${models.map((m) => `| ${m.id} | ${m.kind} | Converter | ${m.zha === "quirk" ? m.zhaSources.map((f) => `[Quirk](${zha.url}/zhaquirks/heiman/${f})`).join(", ") : "Standard entities"} | ${m.aliases.join(", ")} |`).join("\n")}\n\n## Updating\n\nRun \`npm run catalog:update\`, review the diff and upstream capabilities, then run \`npm run check\` and \`npm run test:browser\`. Unknown product types or unmatched ZHA models stop generation for review. Commit the catalog and this table together. Source revisions are stored in \`src/data/catalog.json\`. Generation is a development task; installed cards never fetch upstream data.\n`;
await mkdir("src/data", { recursive: true });
await mkdir("docs", { recursive: true });
await writeFile(
  "src/data/catalog.json",
  `${JSON.stringify(catalog, null, 2)}\n`,
);
await writeFile("docs/SUPPORTED_DEVICES.md", documentation);
console.log(
  `Catalog: ${models.length} presets, ${models.filter((m) => m.zha === "quirk").length} with explicit ZHA quirks.`,
);
