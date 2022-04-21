import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@unocss/nuxt'],
  unocss: {
    // presets
    preflight: true,
    uno: true, // enabled `@unocss/preset-uno`
    // icons: true, // enabled `@unocss/preset-icons`
    // attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    // shortcuts: [],
    // rules: [],
  },
})
