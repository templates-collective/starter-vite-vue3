<script setup lang="ts">
const router = useRouter()

const { t } = useI18n()
</script>

<template>
  <main py-20 text="center teal-700 dark:gray-200">
    <p text-4xl mb-4>
      <i i-carbon-warning inline-block />
    </p>
    <RouterView />
    <p flex justify-center mt-10>
      <Button is="vue:Button" @click="router.back()">
        {{ t('button.back') }}
      </Button>
    </p>
  </main>
</template>
