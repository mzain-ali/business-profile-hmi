// scripts/generate-pdf.mjs — exports the /print route to a pixel-accurate
// landscape PDF using Playwright (real Chromium, full CSS support).
import { chromium } from "playwright";
import { spawn, execSync } from "node:child_process";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "HMI-Parts-Business-Profile.pdf");

async function isUrlHealthy(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      resolve(res.statusCode === 200);
    }).on("error", () => resolve(false));
  });
}

async function waitForServer(url, timeoutMs = 25000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await isUrlHealthy(url)) return true;
    await new Promise((r) => setTimeout(r, 500));
  }
  return false;
}

async function main() {
  let targetUrl = `http://localhost:3000/print`;
  let spawnedServer = null;

  const is3000Healthy = await isUrlHealthy(targetUrl);
  if (!is3000Healthy) {
    console.log("Port 3000 is unavailable or returning error. Building & starting production server on port 3005...");
    const nextBin = path.join(__dirname, "..", "node_modules", "next", "dist", "bin", "next");

    execSync(`"${process.execPath}" "${nextBin}" build`, {
      cwd: path.join(__dirname, ".."),
      stdio: "ignore",
    });

    targetUrl = "http://localhost:3005/print";
    spawnedServer = spawn(process.execPath, [nextBin, "start", "-p", "3005"], {
      cwd: path.join(__dirname, ".."),
      stdio: "ignore",
    });

    const ready = await waitForServer(targetUrl, 25000);
    if (!ready) {
      if (spawnedServer) spawnedServer.kill();
      throw new Error("Could not start production server on port 3005.");
    }
  }

  console.log(`Navigating to ${targetUrl} ...`);
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(targetUrl, { waitUntil: "networkidle" });

  // Ensure all web fonts and images are fully loaded before rendering PDF
  await page.evaluate(async () => {
    await document.fonts.ready;
    const images = Array.from(document.querySelectorAll("img"));
    await Promise.all(
      images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        });
      })
    );
  });

  await page.pdf({
    path: OUT,
    width: "13.333in",
    height: "7.5in",
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();
  if (spawnedServer) {
    spawnedServer.kill();
  }

  console.log(`Successfully exported 10-page PDF to: ${OUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
