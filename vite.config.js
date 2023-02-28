import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@logo": path.resolve(__dirname, "src/img/logos"),
      "@memoji": path.resolve(__dirname, "src/img/memojis"),
      "@project": path.resolve(__dirname, "src/img/projects"),
    },
  },
});
