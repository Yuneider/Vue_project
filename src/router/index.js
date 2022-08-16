import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import('../views/CharactersView.vue')
  },
  {
    path: '/chapters',
    name: 'chapters',
    component: () => import('../views/ChaptersView.vue')
  },
  {
    path: '/locations',
    name: 'locations',
    component: () => import('../views/LocationsView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
