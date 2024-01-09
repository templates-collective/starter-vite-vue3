import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
]
