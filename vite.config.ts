// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      css: {
        // Enable import of .css files from node_modules
        includePaths: ['node_modules']
      }
    }
  }
})
