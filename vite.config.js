import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    port: 5000,
  },
  plugins: [
    svelte({
      preprocess: [preprocess()],
    }),
    VitePWA()
  ],
});