<route lang="json">
  {
    "name": "about-page",
    "meta": {
      "title": "About Page"
    }
  }
</route>

<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div text-center>
    {{ route.meta.title }}
  </div>
</template>
