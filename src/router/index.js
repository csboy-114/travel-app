import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component: Home
  },
  {
    path:'/destination',
    name:'Destination',
    component:() => import(/* webpackChunkName: "destination" */ '../views/Destination.vue')
  },
  {
    path:'/personal',
    name:'Personal',
    component:()=>import(/* webpackChunkName: "personal" */ '../views/Personal.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
