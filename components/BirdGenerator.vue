<script setup lang="ts">
const { imageId, fullImagePath, imagePath, randomize } = useBirdImage()
const themeColor = useThemeColor()
</script>

<template>
  <Head>
    <Title>{{ imageId }} | Bird Avatar Generator</Title>
  </Head>

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
      />
    </header>

    <!-- main bird image display -->
    <div
      class="aspect-ratio-1 w-50 relative mx-auto overflow-hidden rounded-full bg-gray-100 shadow-inner sm:w-80"
    >
      <Transition name="bird">
        <img
          class="absolute inline-block w-full rounded-full"
          :class="`bg-${themeColor}-100`"
          :src="imagePath"
          :alt="`bird-${imageId}`"
          :key="imageId"
        />
      </Transition>
    </div>

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
        @click="randomize()"
        title="randomize"
      >
        <i class="i-bi-dice-5-fill"></i>
      </button>
    </div>
  </main>
</template>

<style scoped>
/* we will explain what these classes do next! */
.bird-enter-active,
.bird-leave-active {
  transition: all 0.5s ease;
}

.bird-enter-from {
  transform: translateY(100%);
}
.bird-leave-to {
  transform: translateY(-100%);
}
</style>
