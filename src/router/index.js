import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import authRouter from '../modules/auth/router'
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '',
    ...authRouter,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
