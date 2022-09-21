import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

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
router.beforeEach((to, from, next) => {
  /* if (to) {
  	// 第一步：页面跳转后记录一下当前的时间 currentTime
  	currentTime = Date.now()
  	// 第二步：计算 currentTime - startTime 的 差值 
    console.log('用户由 ', from.path, ' 页面 跳转到 ', to.path, ' 页面，在 ', from.path, ' 页面停留了 ', currentTime - startTime, '毫秒。转换成秒数约为：', parseInt((currentTime - startTime) / 1000))
    // 通过计算currentTime - startTime 的 差值 之后，再上报数据
    
    // 第三步：每次都要初始化一下 startTime
    startTime = Date.now()
	next();
  } */
  if(to){
	 let currentTime = Date.now() 
	 let date = parseInt(currentTime /(24 * 60 * 60 * 1000))
	 console.log('进入页面'+to.path+'的时间：'+currentTime)
	 let params = {
	 		  date:date,
	 		  actionTime: currentTime,
	 		  userId:'1',
	 		  sessionId:'ae-23-550000',
	 		  pageId:to.path,
	 		  openPageTime:currentTime,
	 		  cityId:'20'
	 }
	//  axios.post('http://localhost:9000/api/v1/track/saveEventTrack',qs.stringify(params))
	 next()
  }
 
});

export default router
