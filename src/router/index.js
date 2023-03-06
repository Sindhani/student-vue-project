// Composables
import {createRouter, createWebHistory,} from 'vue-router'
import {useAppStore} from "@/store/app";
const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  }, {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '@/views/Register.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('@/layouts/default/Default.vue'),
    children: [

      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          auth: true
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue')
      },
      {
        path: '/students',
        name: 'students',
        meta: {
          auth: true
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/TheStudents.vue')
      },
      {
        path: '/exams',
        name: 'exams',
        meta: {
          auth: true
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/TheExams.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.beforeEach((to) => {
  const store = useAppStore()
  if(!to.meta.auth) return true
  if (to.meta.auth && store.getUser) {
      return true
  } else {
    return '/'
  }
})


export default router
