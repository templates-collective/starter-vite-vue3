<script setup lang="ts">
const { t } = useI18n()

const { toggleLocale } = useLocale()

const route = useRoute()

const router = useRouter()

const { headerLogo } = storeToRefs(useLayoutStore())

function goPage(path: string) {
  router.push(path)
}

function openGithub() {
  window.open(GITHUB_URL)
}
</script>

<template>
  <main w-full h-full>
    <header mb-10 py-10 text-center>
      <template v-if="headerLogo">
        <img v-if="isDark" alt="Logo Image with Dark mode" src="/logo-dark.svg" w-50 m-auto>
        <img v-else src="/logo.svg" alt="Logo Image" w-50 m-auto>
      </template>
      <p text-6 font-bold my-5>
        <span>{{ t('app.title') }}</span>
        <sup><i>{{ APP_VERSION }}</i></sup>
      </p>
      <p op-75 my-10 text-base>
        {{ t('app.description') }}
      </p>
      <p flex gap-2 justify-center>
        <TheButton v-if="route.path === '/about'" @click="goPage('/')">
          {{ t('button.index-page') }}
        </TheButton>
        <TheButton v-else @click="goPage('/about')">
          {{ t('button.about-page') }}
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
    <main m-auto border-2 border-dashed border-color-stone-500 rd-1.5 p-5 min-h-32 max-w-xs sm:max-w-2xl>
      <RouterView />
    </main>
    <footer mt-10 py-10 text-center op-75>
      <a :href="LICENSE_URL" target="_blank">MIT License</a> © {{ new Date().getFullYear() }} <a
        href="https://github.com/kieranwong9865" target="_blank"
      >Kieran Wong</a>
    </footer>
  </main>
</template>
