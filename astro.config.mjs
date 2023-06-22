import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 1900,
    host: true,
  },
});
