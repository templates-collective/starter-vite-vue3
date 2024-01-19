<route>
  {
    name: "index-page",
    meta: {
      title: "Home Page",
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
