import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import TanStackRouter from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    TanStackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
  base: "/brutal-portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
