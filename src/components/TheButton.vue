<template>
  <button text-sm px-4 py-1 rounded inline-block bg-primary text-white cursor-pointer hover:bg-op-75 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 border-none flex items-center py-2 v-bind="$attrs">
    <slot />
  </button>
</template>
