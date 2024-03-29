import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import cssnano from "cssnano";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  sourcemap: true,
  publicDir: "public",
  build: {
    outDir: "dist",
  },
  plugins: [
    cssnano(),
    ViteMinifyPlugin({
      minifyCSS: true,
      minifyHTML: true,
      minifyJS: true,
    }),
  ],
});
