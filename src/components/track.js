import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
let params=''
let preTime = Date.now()
// 自定义埋点指令
Vue.directive('track', {
  //钩子函数，只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
  /*
   * el:指令所绑定的元素，可以用来直接操作 DOM
   * binding：一个对象，包含以下 property:
   *   name：指令名，不包括 v- 前缀。
   *   value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
   *   expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
   *   arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
   *   modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
   * vnode：Vue 编译生成的虚拟节点
   */
  
  update: (el, binding, vnode) => {
	
    if (binding.value) {
      //这里参数是根据自己业务可以自己定义
      params = {
        // 日期
        date:Date.now(),
        // 用户id
		    userId:binding.value.userId || null,
        // 页面地址path
		    currentUrl:binding.value.currentUrl || null,
		    // 当前点击时间
		    actionTime:Date.now(),
        // 上一次点击时间
        // preTime:preTime,
        // 页面停留时间
        duration:null,
        // 搜索关键词
        searchKeyword:binding.value.searchKeyword || null,
        // 商品id
        productId:binding.value.productId || null,
        // 商品分类
        categoryName:binding.value.categoryName || null,
        // 订单编号
        orderId:binding.value.orderId || null,
        // 订单状态
        orderStatus:binding.value.orderStatus || null,
        // 收藏id
        collectId:binding.value.collectId || null,
        // 评论id
        evaluateId:binding.value.evaluateId || null,
      }
  }
 },
 bind:(el,binding,vnode)=>{
	 if (binding.value.triggerType === 'click'){
	      //如果是click类型，监听click事件
	     el.addEventListener('click', (event) => {
	 		//调用后台接口保存数据
	 		console.log(params)
	 		// axios.post('http://localhost:9000/api/v1/track/saveEventTrack',qs.stringify(params))
	     }, false)
	 }
 }
})
