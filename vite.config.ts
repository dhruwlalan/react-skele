import { defineConfig } from "vitest/config";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: ["src"],
      exclude: ["src/stories", "src/__tests__"],
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/Skeleton.tsx"),
      formats: ["es", "umd"],
      name: 'ReactSkele',
      fileName: (format) => `main.${format}.js`,
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
