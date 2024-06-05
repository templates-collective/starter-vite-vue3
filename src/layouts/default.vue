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
        <TheButton v-if="route.path === '/about'" @click="goPage('/')">
          {{ t('button.home') }}
        </TheButton>
        <TheButton v-else @click="goPage('/about')">
          {{ t('button.about') }}
        </TheButton>
        <TheButton @click="toggleLocale()">
          {{ t('button.toggle-locale') }}
        </TheButton>
        <TheButton @click="toggleDark()">
          <i i="carbon-sun dark:carbon-moon" />
        </TheButton>
        <TheButton @click="openGithub()">
          <i i="carbon-logo-github" />
        </TheButton>
      </p>
    </header>
    <main m-auto border-2 border-dashed border-color-stone-500 rd-2 p-5 min-h-32 max-w-xs sm:max-w-2xl>
      <RouterView />
    </main>
    <footer mt-10 py-10 text-center>
      <a href="https://github.com/opuntia-dev/opuntia/blob/main/LICENSE" target="_blank">MIT License</a> © {{ new Date().getFullYear() }} <a href="https://github.com/kevinwong865" target="_blank">Kevin Wong</a>
    </footer>
  </main>
</template>
