// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [

      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue')
      },
      {
        path: 'students',
        name: 'students',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/TheStudents.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
