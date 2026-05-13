import { app, BrowserWindow, ipcMain, shell } from "electron";
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { startStaticServer } from "./static-server";

type AppInfo = {
  mode: "development" | "production";
  name: string;
  platform: NodeJS.Platform;
  version: string;
};

let mainWindow: BrowserWindow | null = null;
let staticServerHandle: Awaited<ReturnType<typeof startStaticServer>> | null = null;

const isForcedProduction = process.env.MYTH_ATLAS_FORCE_PROD === "1";
const isProduction = app.isPackaged || isForcedProduction;
const devUrl = process.env.MYTH_ATLAS_DEV_URL ?? "http://127.0.0.1:3000";

function getRendererRootDir() {
  if (process.env.MYTH_ATLAS_DESKTOP_DIST_DIR) {
    return resolve(process.cwd(), process.env.MYTH_ATLAS_DESKTOP_DIST_DIR);
  }

  if (app.isPackaged) {
    return resolve(process.resourcesPath, "out");
  }

  return resolve(app.getAppPath(), "out");
}

async function getRendererUrl() {
  if (!isProduction) {
    return devUrl;
  }

  staticServerHandle ??= await startStaticServer(getRendererRootDir());
  return staticServerHandle.url;
}

function isExternalHttpUrl(candidate: string) {
  try {
    const parsed = new URL(candidate);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

async function openExternalUrl(url: string) {
  if (!isExternalHttpUrl(url)) {
    return;
  }

  const capturePath = process.env.MYTH_ATLAS_E2E_CAPTURE_EXTERNAL;
  if (capturePath) {
    await writeFile(capturePath, `${url}\n`, { encoding: "utf8", flag: "a" });
    return;
  }

  await shell.openExternal(url);
}

function registerDesktopIpc() {
  ipcMain.handle("myth-atlas:get-app-info", () => {
    const appInfo: AppInfo = {
      mode: isProduction ? "production" : "development",
      name: app.getName(),
      platform: process.platform,
      version: app.getVersion()
    };

    return appInfo;
  });

  ipcMain.handle("myth-atlas:open-external", async (_event, url: string) => {
    await openExternalUrl(url);
  });
}

async function createMainWindow() {
  const preloadPath = resolve(app.getAppPath(), ".electron-build/electron/preload.js");
  const rendererUrl = await getRendererUrl();
  const appOrigin = new URL(rendererUrl).origin;

  const window = new BrowserWindow({
    backgroundColor: "#060816",
    height: 960,
    minHeight: 720,
    minWidth: 1120,
    show: false,
    title: "Myth Atlas",
    width: 1500,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: preloadPath,
      sandbox: true
    }
  });

  window.webContents.setWindowOpenHandler(({ url }) => {
    void openExternalUrl(url);
    return { action: "deny" };
  });

  window.webContents.on("will-navigate", (event, url) => {
    if (new URL(url).origin === appOrigin) {
      return;
    }

    event.preventDefault();
    void openExternalUrl(url);
  });

  window.once("ready-to-show", () => {
    window.show();
  });

  await window.loadURL(rendererUrl);
  mainWindow = window;

  window.on("closed", () => {
    if (mainWindow === window) {
      mainWindow = null;
    }
  });
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("before-quit", () => {
  if (staticServerHandle) {
    void staticServerHandle.close();
    staticServerHandle = null;
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    void createMainWindow();
  }
});

app.whenReady().then(async () => {
  registerDesktopIpc();
  await createMainWindow();
});
