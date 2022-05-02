import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: path.resolve(__dirname, "src"),
  publicPath: process.env.NODE_ENV === "production" ? "/key-minigame.github.io/" : "/",
  build: {
    outDir: "../dist",
  },
});
