import { LAYOUT } from '../constant'

const homeRoutes: RouteItemArray = [
  {
    path: '/',
    component: LAYOUT,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue')
      }
    ]
  }
]

export default homeRoutes
