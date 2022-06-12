<script setup lang="ts">
import ThemeRadio from '~/components/ThemeRadio.vue'
import themeColors from '~/assets/themeColors'

const route = useRoute()
const searchParams = useUrlSearchParams()

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
    class="grid min-h-screen place-items-center px-4"
    :class="`bg-${themeColor}-200`"
  >
    <main
      class="relative m-4 mb-10 grid w-full gap-4 rounded-xl bg-white p-4 pb-12 shadow-lg"
      sm="w-prose"
      :class="`text-${themeColor}-900`"
    >
      <header class="my-4 text-center text-3xl font-bold">
        <h1>Bird Avatar Generator</h1>
        <ThemeRadio
          class="justify-center pt-4"
          sm="flex-col absolute top-0"
          v-model="themeColor"
          :items="themeColors"
        />
      </header>

      <!-- main bird image display -->
      <img
        class="max-w-80 aspect-ratio-1 mx-auto w-full rounded-full"
        :class="`bg-${themeColor}-100`"
        :src="imagePath"
        :alt="`bird-${imageId}`"
      />

      <!-- input and bird location display -->
      <div class="flex justify-center">
        <input
          class="w-full rounded-xl p-4 text-center"
          sm="w-90"
          :class="`bg-${themeColor}-100`"
          type="text"
          tabindex="0"
          @focus="($event.target as HTMLInputElement).select()"
          :value="fullImagePath"
        />
      </div>

      <!-- randomize button -->
      <div class="absolute inset-x-0 -bottom-8 flex justify-center">
        <button
          class="relative flex h-16 w-32 cursor-pointer items-center justify-center overflow-auto rounded-full text-3xl text-white transition duration-200"
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
        class="inline-block w-full text-center font-bold"
        :class="`text-${themeColor}-600`"
      >
        Source
      </a>

      <a
        href="https://jacoblong.dev"
        class="mb-2 block w-full text-center"
        :class="`text-${themeColor}-600`"
      >
        Created by <span class="font-bold">Jacob Long</span>
        <img
          class="ml-2 inline-block h-8 w-8 rounded-full"
          src="https://avatars.githubusercontent.com/u/36164786?s=48&v=4"
          alt="my github profile pic"
        />
      </a>
    </footer>
  </div>
</template>
