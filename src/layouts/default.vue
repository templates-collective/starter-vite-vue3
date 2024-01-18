<script setup lang="ts">
const { t } = useI18n()

const { toggleLocale } = useLanguage()
</script>

<template>
  <main w-full h-full dark:color-warm-gray>
    <header p-y-10 text-center>
      <img alt="Opuntia logo" src="@/assets/logo.svg" w-20>
      <h1 text-6>
        {{ t('app.name') }}
      </h1>
      <p>{{ t('app.description') }}</p>
    </header>
    <main w-4xl m-auto h-auto>
      <RouterView />
    </main>
    <footer p-y-10 text-center>
      <TheButton @click="toggleLocale()">
        {{ t('button.toggle-locale') }}
      </TheButton>
    </footer>
  </main>
</template>
