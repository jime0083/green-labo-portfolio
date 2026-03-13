import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/CompanyView.vue'
import WorksView from '../views/WorksView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/company',
    name: 'company',
    component: CompanyView
  },
  {
    path: '/works',
    name: 'works',
    component: WorksView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
