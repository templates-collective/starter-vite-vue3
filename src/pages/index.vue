<script setup lang="ts">
const { t } = useI18n()
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
    <main>
      <p text-center>
        <todo-button>
          <span>Get Started</span>
        </todo-button>
      </p>
    </main>
  </main>
</template>
