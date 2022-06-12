<script setup lang="ts">
const themeColor = useThemeColor()
const savedBirds = ref(['111', '222', '333', '444', '555'])
</script>
<template>
  <aside class="w-full rounded-xl bg-white p-4 shadow-lg">
    <ul class="flex gap-2">
      <li v-for="id of savedBirds" :key="id" class="w-20">
        <img
          class="aspect-ratio-1 mx-auto w-full rounded-full"
          :class="`bg-${themeColor}-100`"
          :src="`/api/${id}`"
          :alt="`bird-${id}`"
        />
      </li>
    </ul>
  </aside>
</template>
