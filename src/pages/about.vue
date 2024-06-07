<route lang="json">
{
  "name": "About",
  "meta": {
    "title": "About Page",
    "locale": "page.about.title"
  }
}
</route>

<script lang="ts" setup>
const route = useRoute()

const { t } = useI18n()

const { showLogo } = storeToRefs(useSettingStore())

const { updateSetting } = useSettingStore()

function toggleLogo() {
  updateSetting({
    logo: !showLogo.value,
  })
}
</script>

<template>
  <h1 text-center text-lg font-bold mb-5>
    {{ route.meta.title }}
  </h1>
  <div flex justify-center items-center my-5>
    <TheButton lh-4 @click="toggleLogo">
      {{ showLogo ? t('page.about.hide-logo') : t('page.about.show-logo') }}
    </TheButton>
  </div>
</template>
