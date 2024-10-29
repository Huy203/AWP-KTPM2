import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// dotenv.config() // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
  },
});
