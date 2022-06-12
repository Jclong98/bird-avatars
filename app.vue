<script setup lang="ts">
const { imageId } = useBirdImage()
const themeColor = useThemeColor()
</script>

<template>
  <Head>
    <Meta content="Bird Avatar Generator" property="og:title" />
    <Meta
      content="Generate a bird avatar to use as a profile picture or whatever else you like 🙂"
      property="og:description"
    />
    <Meta content="/bird-2.png" property="og:image" />
    <Meta content="#FF7043" data-react-helmet="true" name="theme-color" />

    <Title>{{ imageId }} | Bird Avatar Generator</Title>

    <Link rel="icon" href="favicon.svg" type="image/svg+xml" />
  </Head>

  <div
    class="grid min-h-screen place-items-center px-4"
    :class="`bg-${themeColor}-200`"
  >
    <BirdGenerator />

    <footer
      class="bottom-0 w-full"
      :class="`text-${themeColor}-800`"
      sm="fixed"
    >
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
  </div>
</template>
