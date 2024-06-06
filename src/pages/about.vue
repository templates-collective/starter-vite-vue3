<route lang="json">
{
  "name": "About",
  "meta": {
    "title": "About Page",
    "locale": "page.about.title"
  }
}
</route>

<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <h1 text-center text-lg font-bold mb-5>
    {{ route.meta.title }}
  </h1>
</template>
