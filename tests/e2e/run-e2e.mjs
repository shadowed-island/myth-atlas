import { mkdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright-core";

const chromePath =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const e2ePort = 3200 + Math.floor(Math.random() * 400);
let baseUrl = process.env.E2E_BASE_URL || `http://127.0.0.1:${e2ePort}`;
const resultsDir = new URL("../../e2e-results/", import.meta.url);

let serverProcess = null;

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function waitForServer(url, timeout = 30_000) {
  const started = Date.now();

  while (Date.now() - started < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Server is still booting.
    }

    await delay(400);
  }

  throw new Error(`Timed out waiting for ${url}`);
}

async function startServerIfNeeded() {
  if (process.env.E2E_BASE_URL) {
    await waitForServer(baseUrl);
    return;
  }

  serverProcess = spawn(
    "pnpm",
    ["start", "--hostname", "127.0.0.1", "--port", String(e2ePort)],
    {
      cwd: new URL("../../", import.meta.url),
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"]
    }
  );

  serverProcess.stdout.on("data", (chunk) => {
    process.stdout.write(`[e2e-server] ${chunk}`);
  });
  serverProcess.stderr.on("data", (chunk) => {
    process.stderr.write(`[e2e-server] ${chunk}`);
  });

  await waitForServer(baseUrl);
}

async function openPage(browser, options) {
  const page = await browser.newPage(options);
  const errors = [];
  const requests = [];
  const failedRequests = [];

  await page.addInitScript(() => {
    window.__speechEvents = [];

    if (!window.speechSynthesis) {
      Object.defineProperty(window, "speechSynthesis", {
        configurable: true,
        value: {}
      });
    }

    const synth = window.speechSynthesis;
    const originalCancel = typeof synth.cancel === "function" ? synth.cancel.bind(synth) : null;

    synth.cancel = () => {
      window.__speechEvents.push({ type: "cancel" });
      originalCancel?.();
    };
    synth.speak = (utterance) => {
      window.__speechEvents.push({
        type: "speak",
        text: utterance?.text ?? ""
      });
    };
  });

  page.on("request", (request) => {
    requests.push(request.url());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(message.text());
    }
  });
  page.on("requestfailed", (request) => {
    failedRequests.push(`${request.url()} ${request.failure()?.errorText ?? ""}`);
  });

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForSelector("canvas", { timeout: 10_000 });

  return { page, errors, requests, failedRequests };
}

async function expectCanvas(page) {
  const canvas = page.locator("canvas");
  await canvas.waitFor({ state: "visible" });
  const box = await canvas.boundingBox();

  assert(box, "Expected canvas to have a bounding box");
  assert(box.width > 300, `Expected canvas width > 300, got ${box.width}`);
  assert(box.height > 300, `Expected canvas height > 300, got ${box.height}`);
}

async function switchToChinese(page) {
  await page.getByRole("button", { name: /Language:|语言:/ }).click();
  await page.locator('.language-menu-popover').getByRole("menuitemradio", { name: "中文" }).click();
  await page.waitForTimeout(150);
}

async function clickLocator(locator) {
  await locator.scrollIntoViewIfNeeded();
  await locator.evaluate((element) => element.click());
}

async function clickStoryRow(page, index = 0) {
  await clickLocator(page.locator(".story-row").nth(index));
}

async function getSpeechEvents(page) {
  return page.evaluate(() => window.__speechEvents);
}

async function testDesktop(browser) {
  const { page, errors, requests, failedRequests } = await openPage(browser, {
    viewport: { width: 1440, height: 980 },
    deviceScaleFactor: 1
  });

  await expectCanvas(page);
  await page.locator("canvas").screenshot({
    path: new URL("desktop-canvas.png", resultsDir).pathname
  });
  await page.screenshot({
    path: new URL("desktop-full.png", resultsDir).pathname,
    fullPage: true
  });

  const initialStoryCount = await page.locator(".story-row").count();
  assert(
    initialStoryCount >= 24,
    `Expected at least 24 initial story rows, got ${initialStoryCount}`
  );
  assert(
    (await page.locator(".story-card").count()) === 0,
    "Expected card view to stay inactive on first load"
  );
  const firstStoryArtworkSrc =
    (await page.locator(".story-row .story-thumb-image").first().getAttribute("src")) || "";
  assert(
    decodeURIComponent(firstStoryArtworkSrc).includes("/story-artwork/"),
    "Expected story rows to use local artwork assets"
  );
  assert(
    (await page.locator(".story-emoji-marker").count()) >= 8,
    "Expected emoji-style markers to render"
  );
  assert(
    ((await page.locator(".brand-subtitle").textContent()) || "").includes(
      "Browse world myths"
    ),
    "Expected English value statement under the title"
  );
  assert(await page.locator(".desktop-hint-inline").isVisible(), "Expected lighter first-use desktop hint");
  assert((await page.locator(".platform-cta").count()) === 0, "Expected platform CTA to be removed from desktop stage");

  const viewModeToggle = page.getByRole("button", {
    name: /Switch to card view|切换到卡片视图/
  });
  await viewModeToggle.click();
  await page.waitForTimeout(100);
  assert(
    (await page.locator(".story-card").count()) === initialStoryCount,
    `Expected ${initialStoryCount} story cards after switching to card view`
  );
  assert(
    (await page.locator(".story-card .story-card-image").count()) === initialStoryCount,
    "Expected card view to render artwork visuals for every story"
  );
  assert((await page.locator(".story-row").count()) === 0, "Expected list rows to hide in card view");
  await page.getByRole("button", { name: /Switch to list view|切换到列表视图/ }).click();
  await page.waitForTimeout(100);
  assert(
    (await page.locator(".story-row").count()) === initialStoryCount,
    "Expected list rows to return after switching back to list view"
  );

  const soundButton = page.getByRole("button", {
    name: /Play background music|Pause background music/
  });
  assert(
    (await soundButton.getAttribute("aria-pressed")) === "true",
    "Expected background music to be enabled by default"
  );
  await soundButton.click();
  await page.waitForTimeout(100);
  assert(
    (await soundButton.getAttribute("aria-pressed")) === "false",
    "Expected sound button to pause background music"
  );
  await soundButton.click();
  const narrationButton = page.getByRole("button", {
    name: /Enable spoken narration|Disable spoken narration|开启语音讲述|关闭语音讲述/
  });
  assert(
    (await narrationButton.getAttribute("aria-pressed")) === "false",
    "Expected narration to be disabled by default"
  );
  assert(
    await narrationButton.isDisabled(),
    "Expected narration button to stay disabled until a story context exists"
  );
  const focusButton = page.getByRole("button", {
    name: /Enter focused globe view|Exit focused globe view/
  });
  await focusButton.click();
  await page.waitForTimeout(100);
  assert(
    (await focusButton.getAttribute("aria-pressed")) === "true",
    "Expected focus mode button to become pressed"
  );
  assert(
    (await page.locator(".explorer-panel").isVisible()) === false,
    "Expected focus mode to hide explorer panel"
  );
  await page.keyboard.press("Escape");
  await page.waitForTimeout(100);
  assert(
    (await focusButton.getAttribute("aria-pressed")) === "false",
    "Expected focus mode button to exit on Escape"
  );

  await switchToChinese(page);
  assert(
    ((await page.locator(".brand-subtitle").textContent()) || "").includes("浏览世界神话故事"),
    "Expected subtitle to switch to Chinese"
  );
  assert(
    ((await page.locator(".panel-heading h2").textContent()) || "").includes("故事"),
    "Expected results label to switch to Chinese"
  );
  assert(
    (await page.getByRole("button", { name: /切换到卡片视图/ }).count()) === 1 &&
      (await page.getByRole("button", { name: /切换到列表视图/ }).count()) === 1,
    "Expected view mode toggles to localize to Chinese"
  );

  await page.getByRole("button", { name: "随机故事" }).first().click();
  await page.waitForTimeout(200);
  await page.locator(".detail-card-desktop h2").first().waitFor({ state: "visible" });

  const canvasBox = await page.locator(".canvas-wrap canvas").boundingBox();
  assert(canvasBox, "Expected desktop canvas box");
  await page.mouse.move(canvasBox.x + canvasBox.width / 2, canvasBox.y + 180);
  await page.mouse.down();
  await page.mouse.move(canvasBox.x + canvasBox.width / 2 + 140, canvasBox.y + 220, {
    steps: 8
  });
  await page.mouse.up();
  await page.mouse.wheel(0, -300);

  await page.getByLabel("搜索故事").fill("潘多拉");
  await page.waitForTimeout(150);
  assert(
    (await page.locator(".story-row").count()) === 1,
    "Expected Chinese Pandora search to reduce list to 1 story"
  );
  assert(
    ((await page.locator(".panel-heading h2").textContent()) || "").includes("匹配“潘多拉”"),
    "Expected Chinese results label to reflect the narrowed search"
  );

  await clickStoryRow(page);
  await page.waitForTimeout(250);
  await page
    .locator(".detail-card-desktop h2")
    .first()
    .waitFor({ state: "visible" });
  assert(
    (await page.locator(".detail-card-desktop h2").first().textContent()) ===
      "潘多拉打开魔罐",
    "Expected desktop detail to show Pandora in Chinese"
  );
  assert(
    (await page.locator(".detail-card-desktop .detail-context").first().textContent() || "").includes(
      "希腊神话"
    ),
    "Expected richer Chinese background detail"
  );
  assert(
    (await page.locator(".related-story-button").count()) >= 1,
    "Expected related stories to render"
  );
  assert(
    (await narrationButton.isDisabled()) === false,
    "Expected narration button to enable once a story is selected"
  );
  const speechEventCountBeforeSingleStory = (await getSpeechEvents(page)).length;
  await narrationButton.click();
  await page.waitForTimeout(300);
  const singleStorySpeech = (await getSpeechEvents(page)).slice(speechEventCountBeforeSingleStory);
  assert(
    singleStorySpeech.some(
      (event) => event.type === "speak" && event.text.includes("潘多拉打开魔罐")
    ),
    "Expected single-story narration to speak the selected story"
  );
  await narrationButton.click();
  await page.waitForTimeout(150);

  await page.getByRole("button", { name: /重置筛选|重置视图/ }).click();
  await page.locator(".category-strip .category-chip").filter({ hasText: /^神话$/ }).click();
  await page.waitForTimeout(150);
  const mythCount = await page.locator(".story-row").count();
  assert(
    mythCount > 0 && mythCount < initialStoryCount,
    `Expected Myth filter to narrow the story list, got ${mythCount}`
  );

  await page.getByLabel("搜索故事").fill("埃及");
  await page.waitForTimeout(150);
  const egyptMythCount = await page.locator(".story-row").count();
  const egyptMythTitles = await page.locator(".story-row strong").allTextContents();
  assert(
    egyptMythCount > 0 && egyptMythCount < mythCount,
    `Expected Myth + Egypt to narrow the story list, got ${egyptMythCount}`
  );
  assert(
    egyptMythTitles.includes("伊西斯复原奥西里斯"),
    "Expected Myth + Egypt to include Isis Restores Osiris in Chinese"
  );
  await clickLocator(page.locator(".story-row").filter({ hasText: "伊西斯复原奥西里斯" }));
  await page.waitForTimeout(250);
  assert(
    (await page.locator(".detail-card-desktop h2").first().textContent()) ===
      "伊西斯复原奥西里斯",
    "Expected detail to show Isis Restores Osiris in Chinese"
  );
  assert(
    ((await page.locator(".detail-card-desktop h2").first().textContent()) || "").includes(
      "伊西斯复原奥西里斯"
    ),
    "Expected detail to stay synced to the selected localized story"
  );

  await page.getByLabel("搜索故事").fill("zzzz-not-found");
  await page.waitForTimeout(150);
  await page.locator(".list-empty-state").waitFor({ state: "visible" });
  assert(
    ((await page.locator(".list-empty-state").textContent()) || "").includes(
      "暂时没有匹配这次搜索的故事"
    ),
    "Expected Chinese empty search state"
  );
  await clickLocator(page.locator(".suggestion-chip").filter({ hasText: /^太阳$/ }));
  await page.waitForTimeout(150);
  assert(
    (await page.locator(".story-row").count()) >= 2,
    "Expected Chinese suggested search to restore results"
  );

  await page
    .locator(".detail-card-desktop")
    .getByLabel("关闭故事详情")
    .click();
  await page.locator(".detail-empty").first().waitFor({ state: "visible" });
  assert(
    ((await page.locator(".detail-empty").first().textContent()) || "").includes(
      "选择一个故事以展开它的背景"
    ),
    "Expected guided empty detail state in Chinese"
  );
  assert(
    await narrationButton.isDisabled(),
    "Expected narration button to disable again after leaving story context"
  );

  const tourButton = page.getByRole("button", {
    name: /开始导览故事巡游|停止导览故事巡游/
  });
  await tourButton.click();
  await page.getByRole("button", { name: /停止导览故事巡游|Stop guided story tour/ }).waitFor({
    state: "visible"
  });
  assert(
    (await page.locator(".detail-card-desktop h2").count()) >= 1,
    "Expected guided tour to select a story in the desktop detail panel"
  );
  const speechEventCountBeforeTourNarration = (await getSpeechEvents(page)).length;
  await narrationButton.click();
  await page.waitForTimeout(300);
  const tourSpeech = (await getSpeechEvents(page)).slice(speechEventCountBeforeTourNarration);
  assert(
    tourSpeech.some((event) => event.type === "speak"),
    "Expected guided tour narration to start speaking after narration is enabled"
  );
  assert(
    (await page.locator('.story-row[data-touring="true"]').count()) === 1,
    "Expected guided tour to mark the active story row"
  );
  await tourButton.click();
  await page.getByRole("button", { name: /开始导览故事巡游|Start guided story tour/ }).waitFor({
    state: "visible"
  });
  const speechEventCountBeforePostTourSelection = (await getSpeechEvents(page)).length;
  const nextStoryTitle =
    (await page.locator(".story-row .story-copy strong").nth(1).textContent()) || "";
  await clickStoryRow(page, 1);
  await page.waitForTimeout(400);
  const speechAfterTourStop = (await getSpeechEvents(page)).slice(
    speechEventCountBeforePostTourSelection
  );
  assert(
    speechAfterTourStop.some((event) => event.type === "speak"),
    "Expected narration to keep working for a single story after stopping the tour"
  );
  assert(
    speechAfterTourStop.some(
      (event) =>
        event.type === "speak" &&
        nextStoryTitle &&
        event.text.includes(nextStoryTitle)
    ),
    "Expected post-tour narration to speak the newly selected single story"
  );

  assert(errors.length === 0, `Desktop console/page errors: ${errors.join(" | ")}`);
  assert(
    requests.every((item) => !item.includes("upload.wikimedia.org")),
    `Desktop should not request Wikimedia at runtime: ${requests.join(" | ")}`
  );
  assert(
    failedRequests.every((item) => !item.includes("upload.wikimedia.org")),
    `Desktop Wikimedia requests failed: ${failedRequests.join(" | ")}`
  );
  await page.close();
}

async function testMobile(browser) {
  const { page, errors, requests, failedRequests } = await openPage(browser, {
    viewport: { width: 390, height: 844 },
    isMobile: true,
    deviceScaleFactor: 2
  });

  await expectCanvas(page);
  await page.screenshot({
    path: new URL("mobile-full.png", resultsDir).pathname,
    fullPage: true
  });

  const initialStoryCount = await page.locator(".story-row").count();
  assert(
    initialStoryCount >= 24,
    `Expected at least 24 mobile story rows, got ${initialStoryCount}`
  );
  assert(
    (await page.locator(".story-card").count()) === 0,
    "Expected mobile card view to stay inactive on first load"
  );

  await clickStoryRow(page);
  await page.waitForTimeout(250);
  await page.locator(".detail-card-mobile h2").first().waitFor({ state: "visible" });
  assert(
    (await page.locator(".detail-card-mobile h2").first().textContent()) ===
      "The Monkey King's Journey",
    "Expected mobile detail to show first story"
  );

  await clickLocator(page.locator(".detail-card-mobile").getByLabel("Close story details"));
  await page.waitForTimeout(150);
  assert(
    (await page.locator(".detail-card-mobile").count()) === 0,
    "Expected mobile detail panel to dismiss after close"
  );

  await page.getByLabel("Search stories").fill("sun");
  await page.waitForTimeout(150);
  const sunCount = await page.locator(".story-row").count();
  assert(sunCount >= 2, `Expected at least 2 stories for sun search, got ${sunCount}`);

  assert(errors.length === 0, `Mobile console/page errors: ${errors.join(" | ")}`);
  assert(
    requests.every((item) => !item.includes("upload.wikimedia.org")),
    `Mobile should not request Wikimedia at runtime: ${requests.join(" | ")}`
  );
  assert(
    failedRequests.every((item) => !item.includes("upload.wikimedia.org")),
    `Mobile Wikimedia requests failed: ${failedRequests.join(" | ")}`
  );
  await page.close();
}

async function main() {
  await mkdir(resultsDir, { recursive: true });
  await startServerIfNeeded();

  const browser = await chromium.launch({
    executablePath: chromePath,
    headless: true
  });

  try {
    await testDesktop(browser);
    await testMobile(browser);
  } finally {
    await browser.close();
    if (serverProcess) {
      serverProcess.kill("SIGTERM");
    }
  }

  console.log("E2E passed: desktop and mobile story-globe flows are healthy.");
}

main().catch((error) => {
  if (serverProcess) {
    serverProcess.kill("SIGTERM");
  }
  console.error(error);
  process.exit(1);
});
