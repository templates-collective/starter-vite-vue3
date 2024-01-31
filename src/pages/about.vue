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
  <h2 text-center text-5>
    {{ route.meta.title }}
  </h2>
</template>
