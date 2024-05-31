<script setup lang="ts">
const { t } = useI18n()

const { toggleLocale } = useLocale()

const route = useRoute()

const router = useRouter()

function goPage(path: string) {
  router.push(path)
}

function openGithub() {
  window.open('https://github.com/opuntia-dev/opuntia')
}
</script>

<template>
  <main w-full h-full dark:color-warm-gray>
    <header mb-10 py-10 text-center>
      <img alt="Opuntia logo" src="@/assets/logo.svg" w-18 m-auto mb-4>
      <p text-6 font-bold mb-4>
        {{ t('app.title') }}
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
        <Button is="vue:Button" @click="openGithub()">
          <i i="carbon-logo-github" />
        </Button>
      </p>
    </header>
    <main prose m-auto>
      <RouterView />
    </main>
    <footer mt-10 py-10 text-center>
      <a href="https://github.com/opuntia-dev/opuntia/blob/main/LICENSE" target="_blank">MIT License</a> © {{ new Date().getFullYear() }} <a href="https://github.com/kevinwong865" target="_blank">Kevin Wong</a>
    </footer>
  </main>
</template>
