import { RouteRecordRaw } from 'vue-router'

const loginRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]

export default loginRoutes
