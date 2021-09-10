import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/modules/auth/views/FormLoginView.vue')
  } 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
