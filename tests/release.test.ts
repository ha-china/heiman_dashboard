import assert from "node:assert/strict";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
// @ts-expect-error The release CLI is a JavaScript development script.
import { validateRelease } from "../scripts/validate-release.mjs";

const source = fileURLToPath(new URL("../", import.meta.url));
const version = JSON.parse(
  await readFile(join(source, "package.json"), "utf8"),
).version;
const wrongVersion = version === "9.9.9" ? "9.9.8" : "9.9.9";
const modelCount = JSON.parse(
  await readFile(join(source, "src/data/catalog.json"), "utf8"),
).models.length;
const files = [
  "package.json",
  "package-lock.json",
  "hacs.json",
  "CHANGELOG.md",
  "README.md",
  "CONTRIBUTING.md",
  "THIRD_PARTY_LICENSES.md",
  "LICENSE",
  "NOTICE",
  "src",
  "dist",
  "docs",
  "demo",
  "image",
  "scripts",
  ".github",
];
async function fixture(action: (root: string) => Promise<void>) {
  const root = await mkdtemp(join(tmpdir(), "heiman-release-check-"));
  try {
    await Promise.all(
      files.map((file) =>
        cp(join(source, file), join(root, file), { recursive: true }),
      ),
    );
    await action(root);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
}
async function editJson(
  root: string,
  file: string,
  update: (value: any) => void,
) {
  const path = join(root, file);
  const value = JSON.parse(await readFile(path, "utf8"));
  update(value);
  await writeFile(path, JSON.stringify(value));
}

test("release validation accepts the complete current installation payload", () => {
  const result = validateRelease(source, { tag: `v${version}` });
  assert.equal(result.version, version);
  assert.equal(result.languages, 9);
  assert.equal(result.models, modelCount);
  assert.ok(result.localLinks > 0);
});
test("release validation rejects missing or incomplete translation resources", async () => {
  await fixture(async (root) => {
    await rm(join(root, "src/locales/pl.json"));
    assert.throws(() => validateRelease(root), /Missing locale: pl/);
  });
  await fixture(async (root) => {
    await editJson(root, "src/locales/fr.json", (labels) => {
      delete labels.device_control;
    });
    assert.throws(() => validateRelease(root), /missing keys: device_control/);
  });
});
test("release validation rejects duplicate keys and empty translations", async () => {
  await fixture(async (root) => {
    const path = join(root, "src/locales/en.json");
    const text = await readFile(path, "utf8");
    await writeFile(path, text.replace("{", '{"device_control":"Duplicate",'));
    assert.throws(
      () => validateRelease(root),
      /Duplicate JSON key device_control/,
    );
  });
  await fixture(async (root) => {
    await editJson(root, "src/locales/de.json", (labels) => {
      labels.device_control = " ";
    });
    assert.throws(
      () => validateRelease(root),
      /Empty or invalid locale value: de.device_control/,
    );
  });
});
test("release validation rejects version drift and a mismatched release tag", async () => {
  assert.throws(
    () => validateRelease(source, { tag: `v${wrongVersion}` }),
    /Release tag and package version differ/,
  );
  await fixture(async (root) => {
    await editJson(root, "package-lock.json", (lock) => {
      lock.packages[""].version = wrongVersion;
    });
    assert.throws(
      () => validateRelease(root),
      /Lockfile root package version differs/,
    );
  });
  await fixture(async (root) => {
    const path = join(root, "demo/index.html");
    await writeFile(
      path,
      (await readFile(path, "utf8")).replace(
        `HEIMAN DASHBOARD / ${version}`,
        `HEIMAN DASHBOARD / ${wrongVersion}`,
      ),
    );
    assert.throws(
      () => validateRelease(root),
      /Demo and package versions differ/,
    );
  });
});
test("release validation rejects unimported locales and external runtime files", async () => {
  await fixture(async (root) => {
    const path = join(root, "src/i18n.ts");
    await writeFile(
      path,
      (await readFile(path, "utf8")).replace(
        'import pl from "./locales/pl.json";',
        "",
      ),
    );
    assert.throws(() => validateRelease(root), /Locale pl is not imported/);
  });
  await fixture(async (root) => {
    const path = join(root, "dist/heiman_dashboard.js");
    await writeFile(
      path,
      (await readFile(path, "utf8")) + '\nimport "./missing-resource.js";\n',
    );
    assert.throws(
      () => validateRelease(root),
      /still requires an external module/,
    );
  });
});
test("release validation rejects broken documentation images", async () => {
  await fixture(async (root) => {
    await rm(join(root, "image/preview-home.png"));
    assert.throws(
      () => validateRelease(root),
      /Broken documentation link: README.md/,
    );
  });
});
