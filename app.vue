<script setup lang="ts">
import ThemeRadio from '~/components/ThemeRadio.vue'
import themeColors from '~/assets/themeColors'
import { randomChoice } from '~/assets/utils/randomChoice'

const route = useRoute() // used for page loading -- from nuxt
const searchParams = useUrlSearchParams() // used for reactive search params in url bar -- from vueuse

const letters = 'abcdefghijklmnopqrstuvwxyz'
const randomLetter = () => {
  return letters[Math.floor(Math.random() * letters.length)]
}
const randomLetters = (length: number) => {
  return Array.from({ length }, () => randomLetter()).join('')
}

const imageId = computed({
  get() {
    // first check if vueuse's search params are set
    // if not, use the route's params from the server
    // if that isn't set, use a random string
    return searchParams.id ?? route.query.id ?? randomLetters(3)
  },
  set(id: string) {
    searchParams.id = id
  },
})

const imagePath = computed(() => `/api/${imageId.value}`)
const fullImagePath = computed(
  () => `bird-avatars.netlify.app/api/${imageId.value}`
)
const themeColor = ref(randomChoice(themeColors))
</script>

<template>
  <Head>
    <Meta content="Bird Avatar Generator" property="og:title" />
    <Meta
      content="Generate a bird avatar to use as a profile picture or whatever else you like 🙂"
      property="og:description"
    />
    <Meta content="/bird-2.png" property="og:image" />
    <Meta content="#FF7043" data-react-helmet="true" name="theme-color" />

    <Title>{{ imageId }} | Bird Avatar Generator</Title>

    <Link rel="icon" href="favicon.svg" type="image/svg+xml" />
  </Head>

  <div
    place-items="center"
    p="x-4"
    grid
    min-h-screen
    :class="`bg-${themeColor}-200`"
  >
    <main
      gap="4"
      shadow="lg"
      relative
      grid
      bg="white"
      rounded="xl"
      w="full sm:prose"
      p="4 b-12"
      m="4 b-10"
      :class="`text-${themeColor}-900`"
    >
      <header text="center 3xl" font="bold" m="y-4">
        <h1>Bird Avatar Generator</h1>
        <ThemeRadio
          sm="flex-col absolute top-0"
          p="t-4"
          justify="center"
          v-model="themeColor"
          :items="themeColors"
        />
      </header>

      <img
        w="full"
        max-w="80"
        m="x-auto"
        rounded="full"
        aspect-ratio="1"
        :class="`bg-${themeColor}-100`"
        :src="imagePath"
        :alt="`bird-${imageId}`"
      />

      <div flex justify="center">
        <input
          text="center"
          p="4"
          rounded="xl"
          w="full sm:90"
          :class="`bg-${themeColor}-100`"
          type="text"
          tabindex="0"
          @focus="($event.target as HTMLInputElement).select()"
          :value="fullImagePath"
        />
      </div>

      <div absolute inset-x="0" bottom="-8" flex justify="center">
        <button
          active="scale-90"
          flex
          justify-center
          items-center
          transition="duration-200"
          shadow="hover:xl"
          cursor="pointers"
          overflow="auto"
          rounded="full"
          w="32"
          h="16"
          relative
          text="2xl white"
          :class="`bg-${themeColor}-500`"
          @click="imageId = randomLetters(3)"
          title="randomize"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zM12 13.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z"
            ></path>
          </svg>
        </button>
      </div>
    </main>

    <footer bottom="0" w="full" sm="fixed" :class="`text-${themeColor}-800`">
      <a
        href="https://github.com/jclong98/bird-avatars"
        text="center"
        p="2"
        w="full"
        :class="`text-${themeColor}-600`"
      >
        <img
          rounded="full"
          h="8"
          w="8"
          mx="auto"
          src="https://avatars.githubusercontent.com/u/36164786?s=48&v=4"
          alt="my github profile pic"
        />
        <p>Created by <span font="bold">Jacob Long</span></p>
      </a>
    </footer>
  </div>
</template>

<style>
html,
body {
  height: 100%;
}
</style>
