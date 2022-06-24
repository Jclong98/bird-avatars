<script setup lang="ts">
const themeColor = useThemeColor()
const { history } = useBirds()

const historyStorage = useStorage<string[]>('bird-history', [])

onMounted(() => {
  history.value = historyStorage.value
})
</script>

<template>
  <div class="sm:w-prose rounded-xl bg-white p-4 shadow-lg">
    <h2 class="mb-4 text-center text-2xl font-semibold">Recent Birds</h2>
    <div class="grid w-full grid-cols-5 items-center gap-4 overflow-hidden">
      <TransitionGroup>
        <a
          v-for="id in history"
          :key="id"
          :href="`/?id=${id}`"
          class="flex flex-col gap-2"
        >
          <img
            class="aspect-ratio-1 mx-auto w-20 rounded-full"
            :src="`/api/${id}`"
            :alt="id"
          />
          <h3
            class="rounded-full text-center font-semibold"
            :class="`bg-${themeColor}-200 text-${themeColor}-800`"
          >
            {{ id }}
          </h3>
        </a>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.v-move, /* apply transition to moving elements */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.v-leave-active {
  position: absolute;
}
</style>
