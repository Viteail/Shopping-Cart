/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@styles": path.resolve(import.meta.dirname, "src/styles"),
      "@images": path.resolve(import.meta.dirname, "./src/assets"),
      "@components": path.resolve(import.meta.dirname, "./src/components/"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/testing/setup.ts",
  },
});
