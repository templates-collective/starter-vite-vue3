<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <i i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div>
      <Button is="vue:Button" @click="router.back()">
        {{ t('button.back') }}
      </Button>
    </div>
  </main>
</template>
