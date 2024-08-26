<route lang="json">
{
  "name": "Index",
  "meta": {
    "title": "Index Page",
    "locale": "page.index.title",
    "layout": "page"
  }
}
</route>

<script lang="ts" setup>
import type { TodoList } from '@/apis/todo'

const route = useRoute()

const { t } = useI18n()

const todoList = ref<TodoList>([])

const emptyText = ref(t('empty'))

const loading = ref(false)

function fetchData() {
  if (loading.value)
    return
  loading.value = true
  getTodoListApi().then((res) => {
    todoList.value = res.data
  }).catch((err) => {
    emptyText.value = err.message
  }).finally(() => {
    loading.value = false
  })
}
</script>

<template>
  <h1 text-center text-lg font-bold mb-5>
    {{ route.meta.title }}
  </h1>
  <div flex justify-center items-center my-5>
    <TheButton lh-4 @click="fetchData">
      <img v-show="loading" mr-2 src="@/assets/loading.svg">
      {{ t('page.index.get-todo-list') }}
    </TheButton>
  </div>
  <ul v-if="todoList && todoList.length > 0" my-5 h-50 overflow-y-auto>
    <li v-for="item in todoList" :key="item.id" text-base lh-normal>
      <input type="checkbox" accent-primary>
      {{ item.title }}
    </li>
  </ul>
  <p v-if="todoList.length === 0" my-5 text-center op-75>
    {{ emptyText }}
  </p>
</template>
