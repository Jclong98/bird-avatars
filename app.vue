<script setup lang="ts">
import ThemeRadio from '~/components/ThemeRadio.vue'
import themeColors from '~/assets/themeColors'

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
  () => `bird-avatars.jacoblong.dev/api/${imageId.value}`
)
const themeColor = ref('blue')
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
    class="place-items-center px-4 grid min-h-screen"
    :class="`bg-${themeColor}-200`"
  >
    <main
      class="grid gap-4 shadow-lg relative bg-white rounded-xl w-full p-4 pb-12 m-4 mb-10"
      sm="w-prose"
      :class="`text-${themeColor}-900`"
    >
      <header class="text-center text-3xl font-bold my-4">
        <h1>Bird Avatar Generator</h1>
        <ThemeRadio
          class="pt-4 justify-center"
          sm="flex-col absolute top-0"
          v-model="themeColor"
          :items="themeColors"
        />
      </header>

      <img
        class="w-full max-w-80 mx-auto rounded-full aspect-ratio-1"
        :class="`bg-${themeColor}-100`"
        :src="imagePath"
        :alt="`bird-${imageId}`"
      />

      <div class="flex justify-center">
        <input
          class="text-center p-4 rounded-xl w-full"
          sm="w-90"
          :class="`bg-${themeColor}-100`"
          type="text"
          tabindex="0"
          @focus="($event.target as HTMLInputElement).select()"
          :value="fullImagePath"
        />
      </div>

      <div class="absolute inset-x-0 -bottom-8 flex justify-center">
        <button
          class="flex justify-center items-center transition duration-200 cursor-pointer overflow-auto rounded-full w-32 h-16 relative text-3xl text-white"
          hover="shadow-xl"
          active="scale-90"
          :class="`bg-${themeColor}-500`"
          @click="imageId = randomLetters(3)"
          title="randomize"
        >
          <i class="i-bi-dice-5-fill"></i>
        </button>
      </div>
    </main>

    <footer
      class="bottom-0 w-full"
      :class="`text-${themeColor}-800`"
      sm="fixed"
    >
      <a
        href="https://github.com/jclong98/bird-avatars"
        class="text-center w-full inline-block font-bold"
        :class="`text-${themeColor}-600`"
      >
        Source
      </a>
      <a
        href="https://jacoblong.dev"
        class="text-center w-full block mb-2"
        :class="`text-${themeColor}-600`"
      >
        Created by <span class="font-bold">Jacob Long</span>
        <img
          class="rounded-full h-8 w-8 inline-block ml-2"
          src="https://avatars.githubusercontent.com/u/36164786?s=48&v=4"
          alt="my github profile pic"
        />
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
