<script setup lang="ts">
import { nanoid } from 'nanoid'

const imageId = ref(nanoid())
const imagePath = computed(() => `/api/bird/${imageId.value}`)
</script>
<template>
  <main class="main-card">
    <div class="image-container">
      <img :src="imagePath" :alt="`bird-${imageId}`" />
    </div>

    <form class="controls" @submit.prevent>
      <input type="text" v-model="imagePath" disabled />
      <button @click="imageId = nanoid()" title="randomize">
        <span class="icon">🎲</span>
      </button>
    </form>
  </main>
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
  background-color: hsl(240, 100%, 92%);
  display: grid;
  place-items: center;
}

.main-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  background-color: hsl(240, 100%, 97%);
  max-width: 375px;
  border-radius: 4px;
  box-shadow: 0 0.25em 0.5em -0.25em rgba(0, 0, 0, 0.5);
}

.image-container {
  height: 128px;
  width: 128px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #ccc;
  box-shadow: inset 0 0.25em 0.5em -0.25em rgba(0, 0, 0, 0.5);
}

.controls {
  margin-top: 1em;
  display: flex;
  gap: 0.5em;
}

.controls input[type='text'] {
  padding: 0.5em 1em;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
}

.controls button {
  border-radius: 4px;
  background-color: hsl(240, 100%, 97%);
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 1.5em;
  background-color: white;
}

.controls button:hover {
  background-color: hsl(240, 100%, 92%);
}
</style>
