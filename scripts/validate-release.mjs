import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));

export function validateRelease(root = projectRoot, { tag } = {}) {
  const read = (path) => readFileSync(resolve(root, path), "utf8");
  const json = (path) => {
    assert.ok(existsSync(resolve(root, path)), `Missing file: ${path}`);
    const text = read(path);
    const value = JSON.parse(text);
    const source = ts.parseJsonText(path, text);
    const expression = source.statements[0]?.expression;
    if (expression && ts.isObjectLiteralExpression(expression)) {
      const keys = new Set();
      for (const property of expression.properties) {
        const key = property.name?.text;
        assert.ok(!keys.has(key), `Duplicate JSON key ${key}: ${path}`);
        keys.add(key);
      }
    }
    return value;
  };
  const pkg = json("package.json");
  const lock = json("package-lock.json");
  const hacs = json("hacs.json");
  const version = pkg.version;
  assert.match(
    version,
    /^\d+\.\d+\.\d+(?:-[\da-z.-]+)?(?:\+[\da-z.-]+)?$/i,
    "Use a semantic package version",
  );
  assert.equal(lock.name, pkg.name, "Package and lockfile names differ");
  assert.equal(lock.version, version, "Package and lockfile versions differ");
  assert.equal(
    lock.packages?.[""]?.version,
    version,
    "Lockfile root package version differs",
  );
  assert.equal(
    lock.packages?.[""]?.name,
    pkg.name,
    "Lockfile root package name differs",
  );
  assert.equal(
    pkg.license,
    "Apache-2.0",
    "Package license differs from the repository license",
  );
  assert.equal(
    hacs.filename,
    `${pkg.name}.js`,
    "HACS filename must match the repository bundle name",
  );
  assert.equal(hacs.name, "HEIMAN Dashboard", "Unexpected HACS display name");
  const allowedHacsKeys = new Set([
    "name",
    "filename",
    "content_in_root",
    "zip_release",
    "hide_default_branch",
    "country",
    "homeassistant",
    "hacs",
  ]);
  for (const key of Object.keys(hacs))
    assert.ok(
      allowedHacsKeys.has(key),
      `Unsupported plugin HACS manifest key: ${key}`,
    );
  assert.ok(
    !hacs.content_in_root,
    "This repository distributes its bundle from dist/",
  );
  assert.ok(
    !hacs.zip_release,
    "zip_release is not used for this Dashboard plugin",
  );
  if (tag)
    assert.equal(tag, `v${version}`, "Release tag and package version differ");

  const changelogVersion = read("CHANGELOG.md").match(
    /^##\s+(\d+\.\d+\.\d+(?:-[\da-z.-]+)?(?:\+[\da-z.-]+)?)/im,
  )?.[1];
  assert.equal(
    changelogVersion,
    version,
    "Changelog and package versions differ",
  );
  const notesVersion = read("docs/RELEASE_NOTES.md").match(
    /^# HEIMAN Dashboard (\S+)/m,
  )?.[1];
  assert.equal(
    notesVersion,
    version,
    "Release notes and package versions differ",
  );
  const demoVersion = read("demo/index.html").match(
    /HEIMAN DASHBOARD\s*\/\s*([^<\s]+)/,
  )?.[1];
  assert.equal(demoVersion, version, "Demo and package versions differ");
  const bundlePath = `dist/${hacs.filename}`;
  assert.ok(
    existsSync(resolve(root, bundlePath)),
    `Missing HACS installation file: ${bundlePath}`,
  );
  const bundle = read(bundlePath);
  assert.ok(
    bundle.startsWith(`/* HEIMAN Dashboard v${version} | Apache-2.0 |`),
    "Bundle banner version or license differs",
  );
  assert.ok(
    bundle.includes(`HEIMAN Dashboard ${version}`),
    "Bundle runtime version differs",
  );
  const bundledSource = ts.createSourceFile(
    bundlePath,
    bundle,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.JS,
  );
  const bundledStrings = new Set();
  function checkStandalone(node) {
    if (ts.isStringLiteralLike(node)) bundledStrings.add(node.text);
    assert.ok(
      !ts.isImportDeclaration(node),
      "The distributed bundle still requires an external module",
    );
    assert.ok(
      !(ts.isExportDeclaration(node) && node.moduleSpecifier),
      "The bundle re-exports an external module",
    );
    assert.ok(
      !(
        ts.isCallExpression(node) &&
        node.expression.kind === ts.SyntaxKind.ImportKeyword
      ),
      "The bundle still contains a dynamic import",
    );
    ts.forEachChild(node, checkStandalone);
  }
  checkStandalone(bundledSource);

  const types = ts.createSourceFile(
    "types.ts",
    read("src/types.ts"),
    ts.ScriptTarget.Latest,
    true,
  );
  const languageType = types.statements.find(
    (node) => ts.isTypeAliasDeclaration(node) && node.name.text === "Language",
  );
  assert.ok(
    languageType && ts.isUnionTypeNode(languageType.type),
    "Language must declare the supported locale codes",
  );
  const languages = languageType.type.types
    .map((node) => node.literal?.text)
    .sort();
  const resources = readdirSync(resolve(root, "src/locales"))
    .filter((name) => name.endsWith(".json"))
    .map((name) => name.slice(0, -5))
    .sort();
  for (const language of languages)
    assert.ok(resources.includes(language), `Missing locale: ${language}`);
  assert.deepEqual(
    resources,
    languages,
    "Locale files and supported languages differ",
  );
  const english = json("src/locales/en.json");
  const keys = Object.keys(english).sort();
  const imports = ts
    .createSourceFile(
      "i18n.ts",
      read("src/i18n.ts"),
      ts.ScriptTarget.Latest,
      true,
    )
    .statements.filter(ts.isImportDeclaration)
    .map((node) => node.moduleSpecifier.text);
  for (const language of languages) {
    assert.ok(
      imports.includes(`./locales/${language}.json`),
      `Locale ${language} is not imported by src/i18n.ts`,
    );
    const labels = json(`src/locales/${language}.json`);
    const missing = keys.filter((key) => !Object.hasOwn(labels, key));
    assert.equal(
      missing.length,
      0,
      `Locale ${language} is missing keys: ${missing.join(", ")}`,
    );
    assert.deepEqual(
      Object.keys(labels).sort(),
      keys,
      `Locale ${language} has unexpected keys`,
    );
    for (const [key, value] of Object.entries(labels))
      assert.ok(
        typeof value === "string" && value.trim(),
        `Empty or invalid locale value: ${language}.${key}`,
      );
    assert.ok(
      bundledStrings.has(labels.device_control),
      `Locale ${language} is absent from the distributed bundle`,
    );
  }

  const markdown = [
    "README.md",
    "CONTRIBUTING.md",
    "THIRD_PARTY_LICENSES.md",
    ...readdirSync(resolve(root, "docs"))
      .filter((name) => name.endsWith(".md"))
      .map((name) => `docs/${name}`),
  ];
  let localLinks = 0;
  for (const path of markdown) {
    const content = read(path).replace(/```[\s\S]*?```/g, "");
    for (const match of content.matchAll(
      /!?\[[^\]]*\]\(([^\s)]+)(?:\s+"[^"]*")?\)/g,
    )) {
      const target = match[1].replace(/^<|>$/g, "");
      if (/^(?:[a-z]+:|\/\/|#)/i.test(target)) continue;
      const resolved = resolve(
        root,
        dirname(path),
        decodeURIComponent(target.split("#")[0]),
      );
      assert.ok(
        !relative(root, resolved).startsWith(".."),
        `Documentation link leaves the repository: ${path} -> ${target}`,
      );
      assert.ok(
        existsSync(resolved),
        `Broken documentation link: ${path} -> ${target}`,
      );
      localLinks++;
    }
  }
  const readmeImages = [
    ...read("README.md").matchAll(/!\[[^\]]*\]\((image\/[^)]+\.png)\)/g),
  ].map((match) => match[1]);
  assert.ok(
    readmeImages.length > 0,
    "README must include local product preview images",
  );
  for (const image of readmeImages) {
    const bytes = readFileSync(resolve(root, image));
    assert.equal(
      bytes.subarray(0, 8).toString("hex"),
      "89504e470d0a1a0a",
      `Invalid PNG preview: ${image}`,
    );
  }
  const catalog = json("src/data/catalog.json");
  const readme = read("README.md");
  assert.ok(
    readme.includes(`**${english.device_control}**`),
    "README control label differs from the English UI",
  );
  assert.ok(
    readme.includes(`**${english.follow_system}**`),
    "README language selector label differs from the English UI",
  );
  const deviceTable = read("docs/SUPPORTED_DEVICES.md");
  const documentedModels = [...deviceTable.matchAll(/^\| ([^|]+) \|/gm)]
    .map((match) => match[1].trim())
    .filter((value) => value !== "Model" && !/^-+$/.test(value));
  assert.deepEqual(
    documentedModels,
    catalog.models.map((model) => model.id),
    "Device documentation and catalog models differ",
  );
  assert.ok(
    read("README.md").includes(`**${catalog.models.length} product presets**`),
    "README product count differs from the catalog",
  );
  const quirks = catalog.models.filter((model) => model.zha === "quirk").length;
  assert.ok(
    read("README.md").includes(`**${quirks} presets**`),
    "README ZHA quirk count differs from the catalog",
  );

  return {
    version,
    expectedTag: `v${version}`,
    checkedTag: tag ?? null,
    bundle: bundlePath,
    languages: languages.length,
    translationKeys: keys.length,
    localLinks,
    models: catalog.models.length,
    zhaQuirks: quirks,
  };
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  try {
    const args = process.argv.slice(2);
    assert.ok(
      args.length === 0 || (args.length === 2 && args[0] === "--tag"),
      "Usage: npm run validate:release -- [--tag vX.Y.Z]",
    );
    const index = process.argv.indexOf("--tag");
    if (index !== -1)
      assert.ok(process.argv[index + 1], "--tag requires a tag name");
    console.log(
      JSON.stringify(
        validateRelease(projectRoot, {
          tag: index === -1 ? undefined : process.argv[index + 1],
        }),
        null,
        2,
      ),
    );
  } catch (error) {
    console.error(`Release validation failed: ${error.message}`);
    process.exitCode = 1;
  }
}
