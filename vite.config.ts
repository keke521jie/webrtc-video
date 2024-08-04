import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteSassDts from "vite-plugin-sass-dts";
import { copy } from "vite-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSassDts(),
    copy([{ src: "src/components/styles/*.scss", dest: "dist/styles" }]),
  ],
  build: {
    lib: {
      entry: ["./src/components/index.ts"],
      name: "webrtc-video",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      experimentalLogSideEffects: false,
      treeshake: true,
      output: [
        {
          format: "cjs",
          dir: "dist/cjs",
          exports: "named",
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
        },
        {
          format: "es",
          dir: "dist/es/",
          exports: "named",
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
        },
      ],
    },
  },
});
