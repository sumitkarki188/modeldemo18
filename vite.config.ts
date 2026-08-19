import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },

  vite: {
    // additional Vite configuration
  },

  nitro: {
    preset: "node-server",
  },
});
