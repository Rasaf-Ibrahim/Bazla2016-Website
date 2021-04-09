import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import info from '../views/info.vue'
import detail from '../views/detail.vue'
import edit from '../views/edit.vue'
import add from '../views/add.vue'
import login from '../views/login.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/info',
    name: 'info',
    component: info
  },
  {
    path: '/:id',
    name: 'detail',
    component: detail
  },
  {
    path: '/add',
    name: 'add',
    component: add
  },
  {
    path: '/edit',
    name: 'edit',
    component: edit
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
