import { createRouter, createWebHistory } from 'vue-router'
import StartPage from "@/pages/StartPage.vue"
import Dashboard from "@/pages/Dashboard.vue"

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
    }
  ]
})

export default router
