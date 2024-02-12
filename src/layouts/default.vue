<script setup lang="ts">
const { t } = useI18n()

const { toggleLocale } = useLanguage()

const route = useRoute()

const router = useRouter()

function goPage(path: string) {
  router.push(path)
}
</script>

<template>
  <main w-full h-full dark:color-warm-gray>
    <header mb-10 py-10 text-center>
      <img alt="Opuntia logo" src="@/images/logo.svg" w-18 m-auto mb-4>
      <p text-6 font-bold mb-4>
        {{ t('app.name') }}
      </p>
      <p mb-4 text-base>
        {{ t('app.description') }}
      </p>
      <p flex gap-2 justify-center>
        <Button is="vue:Button" v-if="route.path === '/about'" @click="goPage('/')">
          {{ t('button.home') }}
        </Button>
        <Button is="vue:Button" v-else @click="goPage('/about')">
          {{ t('button.about') }}
        </Button>
        <Button is="vue:Button" @click="toggleLocale()">
          {{ t('button.toggle-locale') }}
        </Button>
        <Button is="vue:Button" @click="toggleDark()">
          <i i="carbon-sun dark:carbon-moon" />
        </Button>
      </p>
    </header>
    <main prose m-auto>
      <RouterView />
    </main>
    <footer mt-10 py-10 text-center>
      <a href="https://github.com/opuntia-dev/opuntia/blob/main/LICENSE" target="_blank">MIT License</a> © 2023-PRESENT <a href="https://github.com/kaivanwong" target="_blank">Kaivan Wong</a>
    </footer>
  </main>
</template>
