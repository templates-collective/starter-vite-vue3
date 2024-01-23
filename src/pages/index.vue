<route lang="json">
{
  "name": "index-page",
  "meta": {
    "title": "Home Page"
  }
}
</route>

<script lang="ts" setup>
const route = useRoute()

const { t } = useI18n()

const fetchResult = ref('')

async function getFetchData() {
  const { data } = await useAppFetch('todos/1')
  fetchResult.value = JSON.parse(data.value as string)
}
</script>

<template>
  <h2 text-center>
    {{ route.meta.title }}
  </h2>
  <div p-y-4 flex justify-center items-center>
    <span mr-2>{{ t('page.index.get-network-data') }}</span>
    <Button is="vue:Button" lh="1.6" @click="getFetchData">
      {{ t('button.fetch') }}
    </Button>
  </div>
  <div text-center mb-4>
    {{ fetchResult }}
  </div>
</template>
