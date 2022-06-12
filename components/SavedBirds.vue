<script setup lang="ts">
const themeColor = useThemeColor()
const savedBirds = ref(['111', '222', '333', '444', '555'])
</script>
<template>
  <aside class="w-full rounded-xl bg-white p-4 shadow-lg">
    <h2 class="mb-6 text-center text-xl font-semibold">Saved Birds</h2>

    <ul class="flex flex-wrap gap-3">
      <li v-for="id of savedBirds" :key="id" class="w-20">
        <figure class="flex flex-col items-center gap-1">
          <img
            class="aspect-ratio-1 mx-auto w-full rounded-full"
            :class="`bg-${themeColor}-100`"
            :src="`/api/${id}`"
            :alt="`bird-${id}`"
          />
          <figcaption
            class="w-full rounded py-1 text-center text-sm font-semibold"
            :class="`text-${themeColor}-600 bg-${themeColor}-100`"
          >
            {{ id }}
          </figcaption>
        </figure>
      </li>
    </ul>
  </aside>
</template>
