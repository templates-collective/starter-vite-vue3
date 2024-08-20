<template>
  <button text-sm px-4 py-1 rd-1.5 inline-block bg-primary dark:text-neutral-900 text-neutral-200 cursor-pointer hover:op-75 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 border-none flex items-center py-2 v-bind="$attrs">
    <slot />
  </button>
</template>
