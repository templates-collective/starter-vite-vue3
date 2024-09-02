<template>
  <button text-sm px-4 py-1 rd-1.5 inline-block bg-primary text-hex-f0f0f0 dark:text-hex-020617 cursor-pointer hover:op-75 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 border-none flex items-center py-2 v-bind="$attrs">
    <slot />
  </button>
</template>
