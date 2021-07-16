import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/show/0/0'
  }
  ,{
  path: '/show/:dataIndex/:varIndex',
  name: 'show',
  component: () => import('./components/Contain.vue')
}
]
const router = new VueRouter({
  mode: 'history',
  routes,

})

export default router

