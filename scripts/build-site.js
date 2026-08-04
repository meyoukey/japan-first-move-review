const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const ignoredDirectories = new Set([".git", "node_modules"]);

function listHtmlFiles(directory = root) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) {
      continue;
    }

    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...listHtmlFiles(absolutePath));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(absolutePath);
    }
  }
  return files;
}

function snapshotHtmlFiles() {
  return new Map(listHtmlFiles().map((filePath) => [filePath, fs.readFileSync(filePath)]));
}

function restoreHtmlFiles(snapshot) {
  for (const currentFile of listHtmlFiles()) {
    if (!snapshot.has(currentFile)) {
      fs.rmSync(currentFile);
    }
  }

  for (const [filePath, contents] of snapshot) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, contents);
  }
}

function runScript(scriptName) {
  const result = spawnSync(process.execPath, [path.join(__dirname, scriptName)], {
    cwd: root,
    env: process.env,
    stdio: "inherit",
  });

  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`${scriptName} exited with status ${result.status ?? "unknown"}`);
  }
}

const htmlSnapshot = snapshotHtmlFiles();

try {
  runScript("generate-seo-pages.js");
  runScript("prerender-pages.js");
  console.log("Site build completed successfully.");
} catch (error) {
  restoreHtmlFiles(htmlSnapshot);
  console.error("Site build failed. Restored all HTML files to their pre-build state.");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
