import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify,
  transformerDirectives,
} from 'unocss'
import themeColors from './assets/themeColors'

export default defineConfig({
  presets: [presetUno(), presetIcons(), presetAttributify()],
  transformers: [transformerDirectives()],
  safelist: [
    ...themeColors.map((color) => `bg-${color}-100`),
    ...themeColors.map((color) => `bg-${color}-200`),
    ...themeColors.map((color) => `bg-${color}-500`),
    ...themeColors.map((color) => `text-${color}-600`),
    ...themeColors.map((color) => `text-${color}-800`),
    ...themeColors.map((color) => `text-${color}-900`),
  ],
})
