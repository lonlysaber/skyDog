import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {  
    path: '/',
    name: 'home',
    component: ()=>import("@/views/front/home/home.vue")
  },
  {
    path: '/frontlogin',
    name: 'frontLogin',
    component: ()=>import("@/views/front/login/login.vue")
  },
  {
    path: '/me',
    name: 'me',
    component: () => import("@/views/front/me/me.vue")
  },
  {
    path: '/productdetail',
    name: 'productDetail',
    component: () => import('@/views/front/product/productDetail.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/front/search/search.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
