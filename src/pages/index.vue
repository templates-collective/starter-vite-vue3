<route lang="json">
{
  "name": "Home",
  "meta": {
    "title": "Home Page",
    "locale": "page.home.title"
  }
}
</route>

<script lang="ts" setup>
import type { TodoList } from '@/apis/todo'

const route = useRoute()

const { t } = useI18n()

const todoList = ref<TodoList>([])

function fetchData() {
  getTodoListApi().then((res) => {
    todoList.value = res.data
  })
}
</script>

<template>
  <h1 text-center text-lg font-bold mb-5>
    {{ route.meta.title }}
  </h1>
  <div flex justify-center items-center my-5>
    <TheButton lh-2 @click="fetchData">
      {{ t('page.home.get-todo-list') }}
    </TheButton>
  </div>
  <ul v-for="item in todoList" :key="item.id" my-5 h-xl overflow-y-auto>
    <li>
      {{ item.title }}
    </li>
  </ul>
  <p v-if="todoList.length === 0" my-5 text-center op-75>
    {{ t('empty') }}
  </p>
</template>
