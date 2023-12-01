import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@/views/recommend'
import Singer from '@/views/singer'
import TopList from '@/views/top-list'
import Search from '@/views/search'
const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/',
    component: Recommend
  },
  {
    path: '/',
    component: Singer
  },
  {
    path: '/',
    component: TopList
  },
  {
    path: '/',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
