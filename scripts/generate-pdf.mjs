// scripts/generate-pdf.mjs — exports the /print route to a pixel-accurate
// landscape PDF using Playwright (real Chromium, full CSS support).
//
// Usage:
//   1. npm run build && npm run start   (in one terminal, leave running)
//   2. npm run pdf                      (in another terminal)
//
// Or run `node scripts/generate-pdf.mjs --dev` to hit a `next dev` server
// on port 3000 instead (slower render, fine for quick checks).

import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const URL = `http://localhost:${PORT}/print`;
const OUT = path.join(__dirname, "..", "HMI-Parts-Business-Profile.pdf");

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log(`Navigating to ${URL} ...`);
  await page.goto(URL, { waitUntil: "networkidle" });

  // Make sure web fonts have actually painted before printing.
  await page.evaluate(() => document.fonts.ready);

  await page.pdf({
    path: OUT,
    width: "13.333in",
    height: "7.5in",
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log(`Saved: ${OUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
