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
  const { data } = await useFetch('https://jsonplaceholder.typicode.com/todos/1')
  fetchResult.value = JSON.parse(data.value as string)
}
</script>

<template>
  <h1 text-center text-base>
    {{ route.meta.title }}
  </h1>
  <div flex justify-center items-center>
    <span mr-2>{{ t('page.index.get-network-data') }}</span>
    <Button is="vue:Button" lh-2 @click="getFetchData">
      {{ t('button.fetch') }}
    </Button>
  </div>
  <div v-if="fetchResult" text-center mt-4>
    {{ fetchResult }}
  </div>
</template>
