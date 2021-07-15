import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
// {
//   path: '/',
//   name: 'home',
//   component: () => import('./views/Home.vue')
// }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

