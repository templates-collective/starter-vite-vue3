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
    <main md:w-2xl w="90%" box-border m-auto h-auto border-2 border-dashed p-4 rd-2>
      <RouterView />
    </main>
    <footer p-y-10 flex justify-center>
      <Button is="vue:Button" mr-4 @click="toggleLocale()">
        {{ t('button.toggle-locale') }}
      </Button>
      <Button is="vue:Button" @click="toggleDark()">
        <i i="carbon-sun dark:carbon-moon" />
      </Button>
    </footer>
  </main>
</template>
