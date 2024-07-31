import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteSassDts from "vite-plugin-sass-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSassDts()],
  build: {
    lib: {
      entry: ["./src/components/index.ts"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      experimentalLogSideEffects: false,
      treeshake: true,
      output: [
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
