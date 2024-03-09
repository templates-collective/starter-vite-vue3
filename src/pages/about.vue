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
  <h2 text-center text-5>
    {{ route.meta.title }}
  </h2>
</template>
