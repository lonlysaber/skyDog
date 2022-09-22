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
let startTime = Date.now()
let currentTime
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
  if(to,from){
	 currentTime = Date.now() 
	 let date = currentTime
	 console.log('用户由 ', from.name, ' 页面 跳转到 ', to.name, ' 页面，在 ', from.name, ' 页面停留了 ', currentTime - startTime, '毫秒。转换成秒数约为：', parseInt((currentTime - startTime) / 1000))
	 let params = {
	 		  // 日期
         date:Date.now(),
         // 用户id
         userId:null,
         // 页面地址path
         currentUrl:to.name || null,
         // 当前点击时间
         actionTime:Date.now(),
         // 上一次点击时间
         // preTime:preTime,
         // 页面停留时间
         duration:currentTime - startTime,
         // 搜索关键词
         searchKeyword:null,
         // 商品id
         productId:null,
         // 商品分类
         categoryName:null,
         // 订单编号
         orderId:null,
         // 订单状态
         orderStatus:null,
         // 收藏id
         collectId:null,
         // 评论id
         evaluateId:null,
	 }
   console.log(params)
   startTime = Date.now()

	//  axios.post('http://localhost:9000/api/v1/track/saveEventTrack',qs.stringify(params))
	 next()
  }
 
});

export default router
