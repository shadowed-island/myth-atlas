import type { MythAtlasDesktopApi } from "./myth-atlas-desktop";

declare global {
  interface Window {
    mythAtlasDesktop?: MythAtlasDesktopApi;
  }
}

export {};
