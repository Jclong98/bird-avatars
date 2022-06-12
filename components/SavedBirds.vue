<script setup lang="ts">
const themeColor = useThemeColor()
const savedBirds = ref([
  '111',
  '222',
  '333',
  '444',
  '555',
  '666',
  '777',
  '888',
  '999',
  'aaa',
])
</script>

<template>
  <aside class="max-w-prose rounded-xl bg-white p-4 shadow-lg">
    <h2
      class="mb-6 text-center text-xl font-semibold"
      :class="`text-${themeColor}-900`"
    >
      Saved Birds
    </h2>

    <ul class="grid grid-cols-5 gap-4">
      <li v-for="id of savedBirds" :key="id" class="w-20">
        <a :href="`/?id=${id}`">
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
        </a>
      </li>
    </ul>
  </aside>
</template>
