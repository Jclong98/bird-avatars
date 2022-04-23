<script setup lang="ts">
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

  <div class="min-h-screen bg-stone-200 grid place-items-center px-4">
    <main
      class="relative bg-white text-stone-900 p-4 rounded-xl grid gap-4 w-full sm:w-prose relative pb-12 shadow-lg mb-10"
    >
      <header class="text-center text-3xl font-bold my-4">
        <h1>Bird Avatar Generator</h1>
      </header>

      <img
        class="w-full max-w-80 mx-auto rounded-full"
        :src="imagePath"
        :alt="`bird-${imageId}`"
      />

      <div class="flex justify-center">
        <input
          class="text-center p-4 rounded-xl w-full sm:w-90 bg-stone-100"
          type="text"
          tabindex="0"
          @focus="($event.target as HTMLInputElement).select()"
          :value="fullImagePath"
        />
      </div>

      <div class="absolute inset-x-0 -bottom-8 flex justify-center">
        <button
          class="text-2xl relative text-white bg-green-500 w-32 h-16 rounded-full overflow-auto cursor-pointer shadow hover:shadow-xl transition duration-200 flex justify-center items-center active:scale-90"
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

    <footer
      class="sm:fixed bottom-0 p-2 text-stone-800 w-full flex sm:justify-end justify-center"
    >
      <a class="text-stone-600" href="https://github.com/jclong98/bird-avatars">
        Created by

        <span class="font-bold">Jacob Long</span>

        <img
          class="inline rounded-full h-8 w-8 mx-2"
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
