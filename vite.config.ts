import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Set to relative path
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Override the default naming convention here
        entryFileNames: `assets/index.js`
      }
    }
  }
})
