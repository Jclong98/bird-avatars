import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '~': r('./'),
      '@': r('./'),
    },
  },
})
