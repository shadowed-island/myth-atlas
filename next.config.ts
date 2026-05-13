import type { NextConfig } from "next";

const isDesktopBuild = process.env.BUILD_TARGET === "desktop";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: isDesktopBuild
    ? {
        unoptimized: true
      }
    : undefined,
  output: isDesktopBuild ? "export" : undefined,
  reactStrictMode: true
};

export default nextConfig;
