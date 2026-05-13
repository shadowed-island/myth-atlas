import { contextBridge, ipcRenderer } from "electron";
import type { MythAtlasDesktopApi } from "../types/myth-atlas-desktop";

const desktopApi: MythAtlasDesktopApi = {
  getAppInfo: () => ipcRenderer.invoke("myth-atlas:get-app-info"),
  isDesktop: true,
  openExternal: (url: string) => ipcRenderer.invoke("myth-atlas:open-external", url),
  platform: process.platform
};

contextBridge.exposeInMainWorld("mythAtlasDesktop", desktopApi);
