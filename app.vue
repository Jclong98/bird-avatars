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
    <Meta content="/bird-1.svg" property="og:image" />
    <Meta content="#FF7043" data-react-helmet="true" name="theme-color" />

    <Title>Bird Avatar Generator</Title>

    <Link rel="icon" href="favicon.svg" type="image/svg+xml" />
  </Head>

  <div class="centered">
    <header>
      <h1>Bird Avatar Generator</h1>
    </header>

    <main class="main-card">
      <div class="image-container">
        <img :src="imagePath" :alt="`bird-${imageId}`" />
      </div>

      <form class="controls" @submit.prevent>
        <input
          type="text"
          tabindex="0"
          @focus="$event.target.select()"
          :value="fullImagePath"
        />
        <button @click="imageId = randomLetters(3)" title="randomize">
          <span class="icon">🎲</span>
        </button>
      </form>
    </main>

    <footer>
      Created by
      <a href="https://github.com/jclong98/bird-avatars">Jacob Long</a>
    </footer>
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  font-family: cursive;
  background-color: hsl(214, 95%, 93%);
  color: hsl(214, 95%, 20%);
}

.centered {
  display: grid;
  place-content: center;
  min-height: 100vh;
  text-align: center;
}

.main-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 2em;
  margin: 1em;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0.25em 0.5em -0.25em rgba(0, 0, 0, 0.5);
  flex: 1;
}

.image-container {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #ccc;
  box-shadow: inset 0 0.25em 0.5em -0.25em rgba(0, 0, 0, 0.5);
}

@media (min-width: 768px) {
  .image-container {
    height: 300px;
    width: 300px;
    margin: 0 5em;
  }
}

img {
  width: 100%;
}

.controls {
  width: 100%;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.controls input[type='text'] {
  padding: 0.5em 1em;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  text-align: center;
}

.controls button {
  border-radius: 4px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 1.5em;
  background-color: hsl(217, 91%, 60%);
}

.controls button:hover {
  filter: brightness(1.1);
}

footer {
  margin-top: 1em;
  font-size: 0.8em;
}
</style>
