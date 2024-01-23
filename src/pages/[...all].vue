<route lang="json">
{
  "name": "not-found-page",
  "meta": {
    "layout": "not-found"
  }
}
</route>

<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div text-center>
    {{ t('not-found') }}
  </div>
</template>
