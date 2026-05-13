import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextCoreWebVitals,
  ...nextTypescript,
  globalIgnores([
    ".electron-build/**",
    ".next/**",
    "dist/desktop/**",
    "e2e-results/**",
    "next-env.d.ts",
    "node_modules/**",
    "out/**",
    "tsconfig.tsbuildinfo"
  ])
]);
