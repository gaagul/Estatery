import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sassPlugin from 'vite-plugin-sass';
import eslintPlugin from 'vite-plugin-eslint';
import resolve from './resolve';

// https://vitejs.dev/config/
export default defineConfig({
  define: { "process.env": {} },
  resolve,
  server: { open: true },
  root: "app/javascript/src",
  clearScreen: false,
  plugins: [react(),
  sassPlugin({
      // Custom SCSS options
      includePaths: ['./src'],
    }),
  eslintPlugin({
    // ESLint options
    cache: false,
    include: ['src/**/*.jsx', 'src/**/*.js'],
  }),
  ],
})