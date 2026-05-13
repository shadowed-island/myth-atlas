import { createReadStream } from "node:fs";
import { access, stat } from "node:fs/promises";
import { createServer } from "node:http";
import type { AddressInfo } from "node:net";
import { extname, join, normalize, resolve } from "node:path";

type StaticServerHandle = {
  close: () => Promise<void>;
  url: string;
};

const contentTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

async function resolveAssetPath(rootDir: string, requestPath: string) {
  const decodedPath = decodeURIComponent(requestPath.split("?")[0] || "/");
  const sanitizedPath = decodedPath === "/" ? "/index.html" : decodedPath;
  const normalizedPath = normalize(sanitizedPath).replace(/^(\.\.[/\\])+/, "");
  const absolutePath = resolve(join(rootDir, normalizedPath));
  const resolvedRoot = resolve(rootDir);

  if (!absolutePath.startsWith(resolvedRoot)) {
    return null;
  }

  try {
    const assetStat = await stat(absolutePath);
    if (assetStat.isDirectory()) {
      return resolve(join(absolutePath, "index.html"));
    }

    return absolutePath;
  } catch {
    if (!extname(normalizedPath)) {
      return resolve(join(rootDir, "index.html"));
    }

    return null;
  }
}

export async function startStaticServer(rootDir: string): Promise<StaticServerHandle> {
  await access(rootDir);

  const server = createServer(async (request, response) => {
    try {
      const assetPath = await resolveAssetPath(rootDir, request.url ?? "/");
      if (!assetPath) {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Not found");
        return;
      }

      const extension = extname(assetPath).toLowerCase();
      response.writeHead(200, {
        "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
        "Content-Type": contentTypes[extension] ?? "application/octet-stream"
      });
      createReadStream(assetPath).pipe(response);
    } catch (error) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end(error instanceof Error ? error.message : "Unexpected error");
    }
  });

  await new Promise<void>((resolvePromise, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => resolvePromise());
  });

  const address = server.address() as AddressInfo;

  return {
    close: () =>
      new Promise((resolvePromise, reject) => {
        server.close((error) => {
          if (error) {
            reject(error);
            return;
          }

          resolvePromise();
        });
      }),
    url: `http://127.0.0.1:${address.port}`
  };
}
