const fs = require("fs");
const http = require("http");
const path = require("path");
const { spawnSync } = require("child_process");

let chromium;
try {
  ({ chromium } = require("playwright-core"));
} catch {
  throw new Error("playwright-core is required. Run npm install before prerendering.");
}

const root = path.resolve(__dirname, "..");
const siteOrigin = "https://japanfirstmove.com";
const excludedPaths = new Set();
const appContainerPattern = /<main\b(?=[^>]*\bid="app")[^>]*>[\s\S]*?<\/main>/g;

function commandPath(command) {
  const lookup = spawnSync(process.platform === "win32" ? "where" : "which", [command], {
    encoding: "utf8",
  });
  if (lookup.status !== 0) {
    return "";
  }
  return lookup.stdout.split(/\r?\n/).find(Boolean) ?? "";
}

function chromeExecutablePath() {
  const candidates = [
    process.env.JFM_CHROME_PATH,
    chromium.executablePath(),
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Google Chrome Beta.app/Contents/MacOS/Google Chrome Beta",
    process.env.PROGRAMFILES && path.join(process.env.PROGRAMFILES, "Google", "Chrome", "Application", "chrome.exe"),
    process.env["PROGRAMFILES(X86)"] &&
      path.join(process.env["PROGRAMFILES(X86)"], "Google", "Chrome", "Application", "chrome.exe"),
    process.env.LOCALAPPDATA &&
      path.join(process.env.LOCALAPPDATA, "Google", "Chrome", "Application", "chrome.exe"),
    commandPath("google-chrome"),
    commandPath("google-chrome-stable"),
    commandPath("chromium"),
    commandPath("chromium-browser"),
  ].filter(Boolean);

  const executablePath = candidates.find((candidate) => fs.existsSync(candidate));
  if (!executablePath) {
    throw new Error("Could not find Chrome. Set JFM_CHROME_PATH to a Chrome executable and try again.");
  }
  return executablePath;
}

function sitemapPaths() {
  const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
  const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => new URL(match[1]))
    .filter((url) => url.origin === siteOrigin)
    .map((url) => url.pathname)
    .filter((pathname) => !excludedPaths.has(pathname));

  const uniquePaths = [...new Set(paths)];
  if (uniquePaths.length !== paths.length) {
    throw new Error("The sitemap contains duplicate indexable paths.");
  }
  if (uniquePaths.length === 0) {
    throw new Error("The sitemap did not contain any pages to prerender.");
  }
  return uniquePaths;
}

function outputPathForRoute(routePath) {
  if (routePath === "/") {
    return path.join(root, "index.html");
  }
  return path.join(root, routePath.replace(/^\/+|\/+$/g, ""), "index.html");
}

function mimeType(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  return (
    {
      ".css": "text/css; charset=utf-8",
      ".html": "text/html; charset=utf-8",
      ".ico": "image/x-icon",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".js": "text/javascript; charset=utf-8",
      ".json": "application/json; charset=utf-8",
      ".png": "image/png",
      ".svg": "image/svg+xml",
      ".webp": "image/webp",
      ".woff2": "font/woff2",
      ".xml": "application/xml; charset=utf-8",
    }[extension] ?? "application/octet-stream"
  );
}

function resolvePublicFile(requestUrl) {
  const requestPath = decodeURIComponent(new URL(requestUrl, "http://127.0.0.1").pathname);
  const normalizedPath = path.posix.normalize(requestPath);
  const relativePath = normalizedPath.replace(/^\/+/, "");
  const candidates = relativePath
    ? normalizedPath.endsWith("/")
      ? [path.join(relativePath, "index.html")]
      : [relativePath, path.join(relativePath, "index.html")]
    : ["index.html"];

  for (const candidate of candidates) {
    const absolutePath = path.resolve(root, candidate);
    if (absolutePath !== root && !absolutePath.startsWith(`${root}${path.sep}`)) {
      continue;
    }
    try {
      if (fs.statSync(absolutePath).isFile()) {
        return absolutePath;
      }
    } catch {
      // Try the next route candidate.
    }
  }
  return "";
}

function createStaticServer() {
  return http.createServer((request, response) => {
    const filePath = resolvePublicFile(request.url ?? "/");
    if (!filePath) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Cache-Control": "no-store",
      "Content-Type": mimeType(filePath),
    });
    fs.createReadStream(filePath).pipe(response);
  });
}

function listen(server) {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        reject(new Error("Could not determine the local prerender server port."));
        return;
      }
      resolve(`http://127.0.0.1:${address.port}`);
    });
  });
}

function closeServer(server) {
  return new Promise((resolve) => server.close(resolve));
}

function preparedOutputs(renderedPages) {
  return renderedPages.map(({ routePath, innerHtml }) => {
    const filePath = outputPathForRoute(routePath);
    if (!fs.existsSync(filePath)) {
      throw new Error(`${routePath}: output HTML file does not exist.`);
    }

    const original = fs.readFileSync(filePath, "utf8");
    const containers = original.match(appContainerPattern) ?? [];
    if (containers.length !== 1) {
      throw new Error(`${routePath}: expected exactly one app container, found ${containers.length}.`);
    }

    const normalizedInnerHtml = innerHtml
      .trim()
      .split(/\r?\n/)
      .map((line) => line.trimEnd())
      .join("\n");
    const prerenderedMain = `<main id="app" tabindex="-1" data-prerendered="true">\n${normalizedInnerHtml}\n    </main>`;
    const updated = original.replace(appContainerPattern, prerenderedMain);
    if (!updated.includes('data-prerendered="true"') || !updated.includes("<h1")) {
      throw new Error(`${routePath}: prepared HTML failed the static content check.`);
    }

    return { filePath, original, updated };
  });
}

function writeOutputs(outputs) {
  const temporaryFiles = [];
  try {
    for (const output of outputs) {
      const temporaryPath = `${output.filePath}.prerender-${process.pid}.tmp`;
      fs.writeFileSync(temporaryPath, output.updated);
      temporaryFiles.push(temporaryPath);
    }
    for (let index = 0; index < outputs.length; index += 1) {
      fs.renameSync(temporaryFiles[index], outputs[index].filePath);
    }
  } catch (error) {
    for (const output of outputs) {
      fs.writeFileSync(output.filePath, output.original);
    }
    throw error;
  } finally {
    for (const temporaryPath of temporaryFiles) {
      if (fs.existsSync(temporaryPath)) {
        fs.rmSync(temporaryPath);
      }
    }
  }
}

function restoreOutputs(outputs) {
  for (const output of outputs) {
    fs.writeFileSync(output.filePath, output.original);
  }
}

async function main() {
  const routes = sitemapPaths();
  const server = createStaticServer();
  const localOrigin = await listen(server);
  const browser = await chromium.launch({
    executablePath: chromeExecutablePath(),
    headless: true,
  });
  let outputs = [];

  try {
    const renderContext = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const renderPage = await renderContext.newPage();
    let activeRoute = "";
    const renderErrors = [];

    renderPage.on("console", (message) => {
      if (message.type() === "error") {
        renderErrors.push(`${activeRoute}: console error: ${message.text()}`);
      }
    });
    renderPage.on("pageerror", (error) => {
      renderErrors.push(`${activeRoute}: page error: ${error.message}`);
    });

    const renderedPages = [];
    for (const routePath of routes) {
      activeRoute = routePath;
      const errorCountBeforeNavigation = renderErrors.length;
      const response = await renderPage.goto(`${localOrigin}${routePath}`, {
        timeout: 20000,
        waitUntil: "networkidle",
      });
      if (!response || !response.ok()) {
        throw new Error(`${routePath}: local page returned ${response?.status() ?? "no response"}.`);
      }

      await renderPage.waitForSelector("#app > *", { timeout: 10000 });
      const rendered = await renderPage.evaluate(() => {
        const app = document.querySelector("#app");
        return {
          appChildCount: app?.children.length ?? 0,
          h1Count: app?.querySelectorAll("h1").length ?? 0,
          innerHtml: app?.innerHTML ?? "",
          isNotFound: Boolean(app?.textContent?.includes("Page not found")),
          textLength: app?.textContent?.trim().length ?? 0,
        };
      });

      if (renderErrors.length !== errorCountBeforeNavigation) {
        throw new Error(renderErrors.slice(errorCountBeforeNavigation).join("\n"));
      }
      if (rendered.appChildCount < 1 || rendered.h1Count !== 1 || rendered.textLength < 80 || rendered.isNotFound) {
        throw new Error(
          `${routePath}: incomplete render (children ${rendered.appChildCount}, H1 ${rendered.h1Count}, text ${rendered.textLength}).`,
        );
      }

      renderedPages.push({ routePath, innerHtml: rendered.innerHtml });
    }
    await renderContext.close();

    outputs = preparedOutputs(renderedPages);
    writeOutputs(outputs);

    const staticContext = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 844 },
    });
    const staticPage = await staticContext.newPage();
    for (const routePath of routes) {
      const response = await staticPage.goto(`${localOrigin}${routePath}`, {
        timeout: 20000,
        waitUntil: "networkidle",
      });
      if (!response || !response.ok()) {
        throw new Error(`${routePath}: static page returned ${response?.status() ?? "no response"}.`);
      }

      const staticCheck = await staticPage.evaluate(() => ({
        h1Count: document.querySelectorAll("#app h1").length,
        innerWidth: window.innerWidth,
        isPrerendered: document.querySelector("#app")?.dataset.prerendered === "true",
        scrollWidth: document.documentElement.scrollWidth,
        textLength: document.querySelector("#app")?.textContent?.trim().length ?? 0,
      }));
      if (
        !staticCheck.isPrerendered ||
        staticCheck.h1Count !== 1 ||
        staticCheck.textLength < 80 ||
        staticCheck.scrollWidth > staticCheck.innerWidth + 1
      ) {
        throw new Error(`${routePath}: failed the JavaScript-disabled mobile check.`);
      }
    }
    await staticContext.close();

    console.log(`Prerendered and verified ${outputs.length} indexable content pages.`);
  } catch (error) {
    if (outputs.length > 0) {
      restoreOutputs(outputs);
    }
    throw error;
  } finally {
    await browser.close();
    await closeServer(server);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack : error);
  process.exitCode = 1;
});
