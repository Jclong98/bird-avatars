<script setup lang="ts">
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
    <Meta content="#3b82f6" data-react-helmet="true" name="theme-color" />

    <Link rel="icon" href="favicon.svg" type="image/svg+xml" />
  </Head>

  <div
    class="grid min-h-screen place-items-center gap-4 px-4 transition duration-200"
    :class="`bg-${themeColor}-200`"
  >
    <BirdGenerator />

    <Footer />
  </div>
</template>
