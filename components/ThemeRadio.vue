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
      w="8"
      h="8"
      rounded="full"
      cursor="pointer"
      active="scale-90"
      transition="duration-200"
      shadow
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
