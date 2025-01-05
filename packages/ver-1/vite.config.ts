import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "../shared/src/components"),
      "@design-system": path.resolve(__dirname, "../shared/src/design-system/index.ts"),
    },
  },
  plugins: [react()],
})
