import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

type ConstantFiles = {
  [key: string]: Array<RouteRecordRaw>
}

const constantFiles: ConstantFiles = import.meta.glob('./routes/*.ts', {
  import: 'default',
  eager: true
})

let constantModules: Array<RouteRecordRaw> = []

for (const key in constantFiles) {
  if (Object.prototype.hasOwnProperty.call(constantFiles, key)) {
    constantModules = constantModules.concat(...constantFiles[key])
  }
}

const routes: Array<RouteRecordRaw> = [...constantModules]
console.log(routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
