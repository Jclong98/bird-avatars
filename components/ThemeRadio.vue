<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  items: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const currentColor = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <div class="flex gap-2">
    <label
      tabindex="0"
      v-for="color in items"
      :key="color"
      @click="currentColor = color"
      @keydown.enter="currentColor = color"
      class="h-8 w-8 cursor-pointer rounded-full shadow transition duration-200"
      active="scale-90"
      :class="[color === currentColor ? `bg-${color}-500` : `bg-${color}-200`]"
      :title="color + ' theme'"
    >
      <input
        :value="color"
        type="radio"
        v-model="currentColor"
        class="hidden"
      />
    </label>
  </div>
</template>
