import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyDesigner from '../components/MyDesigner.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/refer',
    name: 'refer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.  src\views\AboutView.vue  /components/DesignerTest.vue
    component: () => import(/* webpackChunkName: "about" */ '../components/DesignerTest.vue')
  },
  {
    path: '/myDesign',
    name: 'myDesign',
    component: MyDesigner
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
