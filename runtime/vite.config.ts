import { defineConfig } from 'vite'
import path from 'path'
import ssr from 'vite-plugin-ssr/plugin'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue(), ssr()],

  resolve: {
    alias: [
      {
        find: '@greenmashimaro/utils',
        replacement: path.resolve(__dirname, '../packages/utils/src'),
      }
    ]
  }
})
