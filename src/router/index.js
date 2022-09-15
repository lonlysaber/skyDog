import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/front/home/home.vue")
  },
  {
    path: '/frontlogin',
    name: 'frontLogin',
    component: () => import("@/views/front/login/login.vue")
  },
  {
    path: '/me',
    name: 'me',
    component: () => import("@/views/front/me/me.vue"),
    children:
      [{
        path:'',
        redirect:'order'
      },
      {
        path: "collect",
        name: "collect",
        component: () => import("@/views/front/collect/collect.vue")
      },
      {
        path: "order",
        name: "order",
        component: () => import("@/views/front/order/order.vue")
        
      },]
  },
  {
    path:"/cart",
    name:"cart",
    component:()=> import("@/views/front/cart/cart.vue")
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
  {
    path: '/payorder',
    name: 'payOrder',
    component: () => import('@/views/front/order/payOrder.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
