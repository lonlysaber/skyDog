<template>
    <div class="inner">
        <div class="content">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane>
                    <span slot="label"> 所有订单</span>
                    所有订单
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label"> 待付款</span>
                    待付款
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label"> 待发货</span>
                    待发货
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label"> 待收货</span>
                    待收货
                </el-tab-pane>
            </el-tabs>
        </div>

    </div>
</template>

<script >
export default {
    data() {
      return {
        activeName: 'second'
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

</style>
