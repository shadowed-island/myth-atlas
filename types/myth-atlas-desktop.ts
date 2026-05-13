export type MythAtlasDesktopAppInfo = {
  mode: "development" | "production";
  name: string;
  platform: NodeJS.Platform;
  version: string;
};

export type MythAtlasDesktopApi = {
  getAppInfo: () => Promise<MythAtlasDesktopAppInfo>;
  isDesktop: boolean;
  openExternal: (url: string) => Promise<void>;
  platform: NodeJS.Platform;
};
