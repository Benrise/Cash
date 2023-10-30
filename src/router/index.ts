import { createRouter, createWebHistory } from 'vue-router'
import StartPage from "@/pages/StartPage.vue"
import Dashboard from "@/pages/Dashboard.vue"
import Login from "@/pages/Login.vue"
import Register from "@/pages/Register.vue"

const ifAuthenticated = (to, from, next) => {
  try {
    if (localStorage.getItem('token')) {
      //send to backend and check valid token
      //then
      next()
    }
    else
      next('login')
  } catch (error) {
    next('login')
    console.error(error)
  }
 };

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartPage,
    },
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: ifAuthenticated,
      meta: {
        header: 'authorized'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      name: 'register',
      path: '/register',
      component: Register
    }
  ]
})

export default router
