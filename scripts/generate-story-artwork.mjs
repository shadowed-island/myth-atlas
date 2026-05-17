// Generate a Myth Atlas story artwork card matching the existing template style.
// Usage: node scripts/generate-story-artwork.mjs <story-id>
// Renders a 960x640 dark card via SVG, converts SVG -> PNG via rsvg-convert,
// then PNG -> WebP via cwebp, and writes it to public/story-artwork/generated/<story-id>.webp.

import { execFileSync } from "node:child_process";
import { writeFileSync, mkdtempSync, rmSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const repoRoot = resolve(dirname(__filename), "..");

const [, , storyId] = process.argv;
if (!storyId) {
  console.error("Usage: node scripts/generate-story-artwork.mjs <story-id>");
  process.exit(1);
}

const storiesSource = readFileSync(join(repoRoot, "lib/stories.ts"), "utf8");
const objectMatch = storiesSource.match(
  new RegExp(`\\{\\s*id:\\s*"${storyId}",[\\s\\S]*?\\n  \\}`, "m")
);
if (!objectMatch) {
  console.error(`Could not locate story with id="${storyId}" in lib/stories.ts`);
  process.exit(1);
}

const block = objectMatch[0];
const pick = (field) => {
  const re = new RegExp(`${field}:\\s*text\\("([^"]+)"`);
  const m = block.match(re);
  return m ? m[1] : "";
};
const category = (block.match(/category:\s*"([^"]+)"/) || [, ""])[1];

const title = pick("title");
const country = pick("country");
const region = pick("region");
const eyebrowMap = {
  myth: "ORIGIN",
  folktale: "TALE",
  epic: "EPIC",
  creature: "CREATURE",
  religion: "SACRED",
  history: "HISTORY"
};
const eyebrow = eyebrowMap[category] || category.toUpperCase();

const W = 960;
const H = 640;

function escape(value) {
  return value.replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  })[ch]);
}

function wrapTitle(text, maxCharsPerLine) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

const titleLines = wrapTitle(title, 22);
const titleFontSize = titleLines.length > 1 ? 56 : 64;
const titleStartY = H / 2 - ((titleLines.length - 1) * (titleFontSize + 10)) / 2 + 8;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="circleA" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#5b4a2b" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#5b4a2b" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="circleB" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#312922" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#312922" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="${W}" height="${H}" fill="#0c0b09"/>
  <rect x="14" y="14" width="${W - 28}" height="${H - 28}" rx="22" ry="22"
    fill="none" stroke="#3a352d" stroke-width="1" />
  <circle cx="${W - 180}" cy="${H / 2 - 60}" r="220" fill="url(#circleA)"/>
  <circle cx="${W - 80}" cy="${H / 2 + 140}" r="190" fill="url(#circleB)"/>
  <circle cx="${W - 200}" cy="${H / 2 - 60}" r="38" fill="none" stroke="#bb8a3a" stroke-width="1.4" opacity="0.55"/>
  <circle cx="${W - 200}" cy="${H / 2 - 60}" r="6" fill="#bb8a3a" opacity="0.7"/>

  <text x="${W / 2}" y="92" fill="#cf9b46" text-anchor="middle"
    font-family="'Inter', 'Avenir Next', sans-serif" font-size="20" font-weight="600"
    letter-spacing="8">${escape(eyebrow)}</text>

  ${titleLines
    .map(
      (line, i) =>
        `<text x="${W / 2}" y="${titleStartY + i * (titleFontSize + 10)}" fill="#fafaf6" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype','Book Antiqua',Georgia,serif" font-size="${titleFontSize}" font-weight="600">${escape(
          line
        )}</text>`
    )
    .join("\n  ")}

  <text x="${W / 2}" y="${H - 180}" fill="#cfcdc6" text-anchor="middle"
    font-family="'Inter','Avenir Next',sans-serif" font-size="22">${escape(
      `${country} · ${region}`
    )}</text>
  <text x="${W / 2}" y="${H - 130}" fill="#cf9b46" text-anchor="middle"
    font-family="'Inter','Avenir Next',sans-serif" font-size="20" font-weight="600"
    letter-spacing="10">MYTH ATLAS</text>
</svg>`;

const tmp = mkdtempSync(join(tmpdir(), "myth-atlas-art-"));
const svgPath = join(tmp, `${storyId}.svg`);
const pngPath = join(tmp, `${storyId}.png`);
const outPath = join(repoRoot, "public/story-artwork/generated", `${storyId}.webp`);

writeFileSync(svgPath, svg);

execFileSync("rsvg-convert", ["-w", String(W), "-h", String(H), "-o", pngPath, svgPath]);
execFileSync("cwebp", ["-q", "90", pngPath, "-o", outPath]);

rmSync(tmp, { recursive: true, force: true });

console.log(`Wrote ${outPath}`);
console.log(`  eyebrow:  ${eyebrow}`);
console.log(`  title:    ${title}`);
console.log(`  region:   ${country} · ${region}`);
