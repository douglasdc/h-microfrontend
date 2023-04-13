import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      // external: ["vue"],
      // plugins: [
      //   externalGlobals({
      //     vue: "Vue"
      //   })
      // ]
    },
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: '$MFLIB'
    }
  },
  define: {
    'process.env': process.env
  }
})
