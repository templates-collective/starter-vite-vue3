<route lang="json">
{
  "name": "not-found-page",
  "meta": {
    "title": "404 Page",
    "locale": "page.not-found.title"
  }
}
</route>

<script setup lang="ts">
const { t } = useI18n()

const router = useRouter()

function goBack() {
  if (history.length > 1)
    router.back()
  else
    router.replace('/')
}
</script>

<template>
  <div w-full h-full flex="~ items-center justify-center col">
    <img w-80 src="@/assets/not-found.svg" alt="404 Image">
    <p text-3xl mt-15 mb-5 font-bold color-dark>
      {{ t('page.not-found.title') }}
    </p>
    <p mt-5 mb-15 color-gray-600>
      {{ t('page.not-found.content') }}
    </p>
    <TheButton link type="info" size="large" @click="goBack">
      <i i-carbon-return mr-2 />
      <span> {{ t('button.back') }}</span>
    </TheButton>
  </div>
</template>
