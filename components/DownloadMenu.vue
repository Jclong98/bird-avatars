<script setup lang="ts">
const props = defineProps<{ id: string }>()

const open = ref(false)

const downLoadAsPng = async () => {
  // bird comes in as blob with type svg
  const bird = await $fetch('/api/' + props.id)

  // data urls can be loaded an drawn into canvases
  const dataUrl = URL.createObjectURL(bird as Blob)

  // create an image that will be loaded into a canvas
  let image = new Image()
  image.onload = () => {
    // create a canvas to draw the image on
    let canvas = document.createElement('canvas')

    canvas.width = 512
    canvas.height = 512

    let context = canvas.getContext('2d')
    context.drawImage(image, 0, 0, 512, 512)

    // get a new data url that contains the png
    let png = canvas.toDataURL('image/png')

    // make a link element that will be clicked to download the png
    let a = document.createElement('a')
    a.href = png
    a.download = `${props.id}.png`
    a.click()
  }

  // trigger the onload event
  image.src = dataUrl
}
</script>

<template>
  <div class="relative">
    <button
      title="Downloads"
      class="grid place-items-center rounded-full p-2"
      @click="open = !open"
    >
      <i class="i-bi-download inline-block text-2xl"></i>
    </button>

    <Transition name="menu">
      <div
        v-if="open"
        class="absolute right-0 top-[100%] grid overflow-hidden rounded bg-white py-1 shadow"
        style="z-index: 10"
      >
        <a
          class="flex items-center gap-4 py-1 px-2 hover:bg-gray-200"
          :download="`${props.id}.svg`"
          :href="`/api/${props.id}`"
        >
          <i class="i-bi-bezier inline-block"></i> {{ id }}.svg
        </a>
        <button
          @click="downLoadAsPng()"
          class="flex items-center gap-4 py-1 px-2 hover:bg-gray-200"
        >
          <i class="i-bi-image inline-block"></i> {{ id }}.png
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}
</style>
