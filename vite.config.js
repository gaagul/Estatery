import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint';
import resolve from './resolve';

// https://vitejs.dev/config/
export default defineConfig({
  define: { "process.env": {} },
  resolve,
  server: { open: true },
  root: "app/javascript/src",
  clearScreen: false,
  plugins: [react()],
})