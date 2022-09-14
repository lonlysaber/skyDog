<template>
    <div class="orderVue">
        <div class="content">
            <el-tabs v-model="activeName" @tab-click="handleClick" stretch="true">
                <el-tab-pane name="1">
                    <span slot="label"> 所有订单 </span>
                </el-tab-pane>
                <el-tab-pane name="2">
                    <span slot="label"> 待付款 </span>
                </el-tab-pane>
                <el-tab-pane name="3">
                    <span slot="label"> 待发货 </span>
                </el-tab-pane>
                <el-tab-pane name="4">
                    <span slot="label"> 待收货 </span>
                </el-tab-pane>
                <el-tab-pane name="5">
                    <span slot="label"> 待评价 </span>
                </el-tab-pane>
                <el-tab-pane name="6">
                    <span slot="label"><i class="el-icon-delete-solid"></i> 订单回收站 </span>
                </el-tab-pane>
            </el-tabs>
            <div class="orderTar">
                <div style="width:40%">
                    宝贝
                </div>
                <div>
                    单价
                </div>
                <div>
                    数量
                </div>
                <div>
                    商品操作
                </div>
                <div>
                    实付款
                </div>
                <div>
                    交易状态
                </div>
                <div>
                    交易操作
                </div>
            </div>
            <div class="product">
                <div class="herder"></div>
                <div class="main">
                    
                </div>
            </div>
        </div>

    </div>
</template>

<script >
export default {
    data() {
      return {
        activeName: '1',
        orderList:[]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style scoped>
.orderVue{
    width: 90%;
}
.orderVue .content{
    width: 100%;
}
.orderVue .content span{
    font-weight: 600;
    font-size: 16px;
}
.orderVue .content .orderTar{
    width: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
}
.orderVue .content .orderTar div{
    float: left;
    width: 10%;
    line-height: 30px;
    font-size: 12px;
}
</style>
