import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tr from '../locales/translation'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:locale?',
      component: RouterView,
      beforeEnter:Tr.routerMiddleWare,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'General',
          name: 'general',
          component: () => import('../views/ProductView.vue')
        },
        {
          path: 'Functionality',
          name: 'functionality',
          component: () => import('../views/Functionality.vue')
        },
        {
          path: 'About',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
  ]
})

export default router
