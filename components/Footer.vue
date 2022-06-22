<script setup lang="ts">
const themeColor = useThemeColor()
</script>

<template>
  <footer class="bottom-0 w-full sm:fixed" :class="`text-${themeColor}-800`">
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
</template>
