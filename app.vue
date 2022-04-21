<script setup lang="ts">
const letters = 'abcdefghijklmnopqrstuvwxyz'
const randomLetter = () => {
  return letters[Math.floor(Math.random() * letters.length)]
}
const randomLetters = (length: number) => {
  return Array.from({ length }, () => randomLetter()).join('')
}

const imageId = ref(randomLetters(3))
const imagePath = computed(() => `/api/${imageId.value}`)
const fullImagePath = computed(
  () => `https://bird-avatars.netlify.app/api/${imageId.value}`
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

    <Title>Bird Avatar Generator</Title>

    <Link rel="icon" href="favicon.svg" type="image/svg+xml" />
  </Head>

  <div class="min-h-screen bg-stone-200 grid place-items-center px-4">
    <main
      class="relative bg-white text-stone-900 p-4 rounded-xl grid gap-4 w-full sm:w-prose relative pb-12 shadow-lg"
    >
      <header class="text-center text-3xl font-bold">
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
          @focus="$event.target.select()"
          :value="fullImagePath"
        />
      </div>

      <div class="absolute inset-x-0 -bottom-8 flex justify-center">
        <button
          class="text-2xl relative bg-green-500 w-32 h-16 rounded-full overflow-auto cursor-pointer shadow hover:shadow-xl transition duration-200"
          @click="imageId = randomLetters(3)"
          title="randomize"
        >
          🎲
        </button>
      </div>
    </main>

    <footer class="fixed bottom-1 inset-x-0 text-center text-stone-800">
      Created by
      <a
        class="font-bold text-stone-600"
        href="https://github.com/jclong98/bird-avatars"
        >Jacob Long</a
      >
    </footer>
  </div>
</template>

<style>
html,
body {
  height: 100%;
}
</style>
