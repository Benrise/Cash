import { createRouter, createWebHistory } from 'vue-router'
import StartPage from "@/pages/StartPage.vue"
import Dashboard from "@/pages/Dashboard.vue"
import Login from "@/pages/Login.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: StartPage,
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
