// Batch-generate the same story-artwork cards that
// scripts/generate-story-artwork.mjs renders one at a time, but using
// the bundled `sharp` library so we don't need rsvg-convert + cwebp.
//
// Usage:
//   node scripts/generate-story-artwork-batch.mjs              # missing only
//   node scripts/generate-story-artwork-batch.mjs --all        # regenerate everything
//
// Writes to public/story-artwork/generated/<story-id>.webp.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

import { loadStories } from "./load-stories.mjs";

const require = createRequire(import.meta.url);
// sharp ships as a transitive next.js dep — pull it in from the pnpm store.
const sharpPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "node_modules/.pnpm/sharp@0.34.5/node_modules/sharp"
);
const sharp = require(sharpPath);

const __filename = fileURLToPath(import.meta.url);
const repoRoot = resolve(dirname(__filename), "..");
const outDir = join(repoRoot, "public/story-artwork/generated");

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

const force = process.argv.includes("--all");
const stories = loadStories(repoRoot);

const W = 960;
const H = 640;

function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
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

function buildSvg(story) {
  const eyebrowMap = {
    myth: "ORIGIN",
    folktale: "TALE",
    epic: "EPIC",
    creature: "CREATURE",
    religion: "SACRED",
    history: "HISTORY"
  };
  const eyebrow = eyebrowMap[story.category] || String(story.category).toUpperCase();

  const title = story.title.en;
  const country = story.country.en;
  const region = story.region ? story.region.en : "";

  const titleLines = wrapTitle(title, 22);
  const titleFontSize = titleLines.length > 1 ? 56 : 64;
  const titleStartY = H / 2 - ((titleLines.length - 1) * (titleFontSize + 10)) / 2 + 8;

  return `<?xml version="1.0" encoding="UTF-8"?>
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
    letter-spacing="8">${escapeXml(eyebrow)}</text>

  ${titleLines
    .map(
      (line, i) =>
        `<text x="${W / 2}" y="${titleStartY + i * (titleFontSize + 10)}" fill="#fafaf6" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype','Book Antiqua',Georgia,serif" font-size="${titleFontSize}" font-weight="600">${escapeXml(
          line
        )}</text>`
    )
    .join("\n  ")}

  <text x="${W / 2}" y="${H - 180}" fill="#cfcdc6" text-anchor="middle"
    font-family="'Inter','Avenir Next',sans-serif" font-size="22">${escapeXml(
      region ? `${country} · ${region}` : country
    )}</text>
  <text x="${W / 2}" y="${H - 130}" fill="#cf9b46" text-anchor="middle"
    font-family="'Inter','Avenir Next',sans-serif" font-size="20" font-weight="600"
    letter-spacing="10">MYTH ATLAS</text>
</svg>`;
}

async function renderOne(story) {
  const outPath = join(outDir, `${story.id}.webp`);
  if (!force && existsSync(outPath)) {
    return { id: story.id, skipped: true };
  }
  const svg = buildSvg(story);
  const buf = await sharp(Buffer.from(svg), { density: 144 })
    .resize(W, H)
    .webp({ quality: 90 })
    .toBuffer();
  writeFileSync(outPath, buf);
  return { id: story.id, written: true };
}

let made = 0;
let skipped = 0;
let failed = 0;
const failures = [];

for (const story of stories) {
  try {
    const result = await renderOne(story);
    if (result.written) {
      made += 1;
      if (made % 20 === 0) console.log(`  ... ${made} written`);
    } else if (result.skipped) {
      skipped += 1;
    }
  } catch (err) {
    failed += 1;
    failures.push([story.id, err.message]);
  }
}

console.log(`Done. written=${made}, skipped=${skipped}, failed=${failed}`);
if (failures.length) {
  console.log("First failures:");
  for (const [id, msg] of failures.slice(0, 5)) console.log(`  ${id}: ${msg}`);
}
