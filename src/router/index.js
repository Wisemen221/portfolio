import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Project_details from '../views/Project_details.vue'
import Featured_details from '../views/Featured_details.vue'
import Search_results from '../views/Search_results.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Contact from '../views/Contact'
import Not_found from '../views/Not_found.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects/:id',
    name: 'Project_details',
    component: Project_details,
    props: true
  },
  {
    path: '/featured_project/:id',
    name: 'Featured_details',
    component: Featured_details,
    props: true
  },
  {
    path: '/search_results',
    name: 'Search_results',
    component: Search_results
  },
  {
    path: '/about/',
    name: 'About',
    component: About,
    props: true
  },
  {
    path: '/skills/',
    name: 'Skills',
    component: Skills,
    props: true
  },
  {
    path: '/contact/',
    name: 'Contact',
    component: Contact,
    props: true
  },
  //404 page
  {
    path: '/:catchAll(.*)',
    name: 'Not_found',
    component: Not_found
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
