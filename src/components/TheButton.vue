<template>
  <button text-sm px-4 py-1 rounded inline-block bg-green-600 text-white cursor-pointer hover:bg-green-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 border-none flex items-center py-2 v-bind="$attrs">
    <slot />
  </button>
</template>
