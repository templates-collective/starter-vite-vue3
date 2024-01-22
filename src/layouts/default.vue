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
    <header py-10 text-center>
      <img alt="Opuntia logo" src="@/assets/logo.svg" w-20>
      <h1 text-6>
        {{ t('app.name') }}
      </h1>
      <p>{{ t('app.description') }}</p>
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
    <main relative md:w-2xl w="90%" box-border m-auto h-auto border-2 border-dashed border-color-neutral p-4 rd-2>
      <RouterView />
    </main>
    <footer py-10 text-center>
      CopyRight © 2022
    </footer>
  </main>
</template>
