import type { MythAtlasDesktopApi } from "@/types/myth-atlas-desktop";

export function getDesktopApi() {
  if (typeof window === "undefined") {
    return null;
  }

  return (window as Window & { mythAtlasDesktop?: MythAtlasDesktopApi }).mythAtlasDesktop ?? null;
}

export function isDesktopApp() {
  return Boolean(getDesktopApi()?.isDesktop);
}

export async function openDesktopExternalUrl(url: string) {
  const desktopApi = getDesktopApi();

  if (!desktopApi?.isDesktop) {
    return false;
  }

  await desktopApi.openExternal(url);
  return true;
}
