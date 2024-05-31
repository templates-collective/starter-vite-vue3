<route lang="json">
{
  "name": "Home",
  "meta": {
    "title": "Home Page",
    "locale": "page.home.title"
  }
}
</route>

<script lang="ts" setup>
const route = useRoute()

const { t } = useI18n()

const fetchResult = ref('')

async function fetchData() {
  const { data } = await useFetch('https://jsonplaceholder.typicode.com/todos/1')
  fetchResult.value = JSON.parse(data.value as string)
}
</script>

<template>
  <h1 text-center text-base>
    {{ route.meta.title }}
  </h1>
  <div flex justify-center items-center>
    <span mr-2>{{ t('page.home.get-network-data') }}</span>
    <Button is="vue:Button" lh-2 @click="fetchData">
      Fetch
    </Button>
  </div>
  <div v-if="fetchResult" text-center mt-4>
    {{ fetchResult }}
  </div>
</template>
