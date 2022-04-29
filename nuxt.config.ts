import { defineNuxtConfig } from 'nuxt3'

import themeColors from './assets/themeColors'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@unocss/nuxt', '@vueuse/nuxt'],
  unocss: {
    // presets
    preflight: true,
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    // shortcuts: [],
    // rules: [],
    safelist: [
      ...themeColors.map((color) => `bg-${color}-100`),
      ...themeColors.map((color) => `bg-${color}-200`),
      ...themeColors.map((color) => `bg-${color}-500`),
      ...themeColors.map((color) => `text-${color}-600`),
      ...themeColors.map((color) => `text-${color}-800`),
      ...themeColors.map((color) => `text-${color}-900`),
    ],
  },
})
