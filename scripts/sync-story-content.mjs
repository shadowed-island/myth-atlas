import fs from "node:fs";
import path from "node:path";

import { loadStories } from "./load-stories.mjs";

const workspaceDir = process.cwd();
const stories = loadStories(workspaceDir);

const categoryLabels = {
  myth: "Myth",
  folktale: "Folktale",
  epic: "Epic",
  creature: "Creature",
  religion: "Sacred Story",
  history: "Legendary History"
};
const categoryOrder = ["myth", "folktale", "epic", "creature", "religion", "history"];
const collator = new Intl.Collator("en");

const summary = buildSummary(stories);

updateFileSection(
  path.join(workspaceDir, "README.md"),
  "<!-- STORY_LIST_START -->",
  "<!-- STORY_LIST_END -->",
  buildReadmeBlock(summary)
);

updateFileSection(
  path.join(workspaceDir, "docs/index.html"),
  "<!-- STORY_CATALOG_START -->",
  "<!-- STORY_CATALOG_END -->",
  buildDocsCatalogBlock(summary)
);

function updateFileSection(filePath, startMarker, endMarker, block) {
  const source = fs.readFileSync(filePath, "utf8");

  if (!source.includes(startMarker) || !source.includes(endMarker)) {
    throw new Error(`${path.basename(filePath)} must include ${startMarker} and ${endMarker} markers.`);
  }

  const next = source.replace(
    new RegExp(`${escapeForRegex(startMarker)}[\\s\\S]*?${escapeForRegex(endMarker)}`),
    `${startMarker}\n${block}\n${endMarker}`
  );

  fs.writeFileSync(filePath, next);
}

function buildSummary(allStories) {
  const byCategory = new Map(categoryOrder.map((category) => [category, 0]));
  const byRegion = new Map();

  for (const story of allStories) {
    byCategory.set(story.category, (byCategory.get(story.category) ?? 0) + 1);

    const region = story.region?.en ?? "Unknown Region";
    const regionStories = byRegion.get(region) ?? [];
    regionStories.push(story);
    byRegion.set(region, regionStories);
  }

  return {
    totalStories: allStories.length,
    totalRegions: byRegion.size,
    byCategory,
    regions: [...byRegion.entries()].sort(([left], [right]) => collator.compare(left, right))
  };
}

function buildReadmeBlock(summaryData) {
  const summaryParts = categoryOrder
    .map((category) => `**${categoryLabels[category]} ${summaryData.byCategory.get(category) ?? 0}**`);
  const categorySummary = `${summaryParts.slice(0, -1).join(", ")}, and ${summaryParts.at(-1)}`;

  const sections = summaryData.regions.map(([region, regionStories]) => {
    const titles = regionStories.map((story) => `${story.title.en} (${story.title.zh})`).join(", ");
    const storyCount = regionStories.length;
    const storyLabel = storyCount === 1 ? "story" : "stories";

    return [
      "<details>",
      `<summary><strong>${region}</strong> (${storyCount} ${storyLabel})</summary>`,
      "",
      titles,
      "",
      "</details>",
      ""
    ].join("\n");
  });

  return [
    "Myth Atlas currently includes "
      + `**${summaryData.totalStories}** stories across **${summaryData.totalRegions}** regional groupings. `
      + `The current mix is ${categorySummary}.`,
    "",
    "The block below is generated from `lib/stories.ts` by `pnpm stories:sync`.",
    "",
    ...sections
  ].join("\n");
}

function buildDocsCatalogBlock(summaryData) {
  const categoryCards = categoryOrder.map((category) => [
    '          <article class="catalog-stat-card">',
    `            <strong>${summaryData.byCategory.get(category) ?? 0}</strong>`,
    `            <span>${escapeHtml(categoryLabels[category])}</span>`,
    "          </article>"
  ].join("\n"));

  const groups = summaryData.regions.map(([region, regionStories]) => {
    const titles = regionStories
      .map((story) => `${escapeHtml(story.title.en)} (${escapeHtml(story.title.zh)})`)
      .join(", ");
    const storyCount = regionStories.length;
    const storyLabel = storyCount === 1 ? "story" : "stories";

    return [
      '          <details class="catalog-group">',
      `            <summary><strong>${escapeHtml(region)}</strong><span>${storyCount} ${storyLabel}</span></summary>`,
      `            <p class="catalog-group-body">${titles}</p>`,
      "          </details>"
    ].join("\n");
  });

  return [
    '        <section class="catalog-section" id="catalog">',
    '          <div class="section-heading">',
    '            <p class="eyebrow">Catalog snapshot</p>',
    '            <h2>See what is already inside the atlas.</h2>',
    `            <p class="section-intro">Myth Atlas currently includes <strong>${summaryData.totalStories}</strong> stories across <strong>${summaryData.totalRegions}</strong> regional groupings. This section is generated from <code>lib/stories.ts</code> by <code>pnpm stories:sync</code>.</p>`,
    "          </div>",
    '          <div class="catalog-summary-grid">',
    ...categoryCards,
    "          </div>",
    '          <div class="catalog-groups">',
    ...groups,
    "          </div>",
    "        </section>"
  ].join("\n");
}

function escapeForRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
