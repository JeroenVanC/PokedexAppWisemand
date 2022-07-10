import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'
import FavoView from '../views/FavoView.vue'
import TeamView from '../views/TeamView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/details/:name/:id',
    name: 'details',
    component:DetailsView,
    props: true
  },
  {
    path: '/favorieten',
    name: 'favorieten',
    component: FavoView
  },
  {
    path: '/mijnTeam',
    name: 'mijnTeam',
    component: TeamView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
