<template>
  <div class="inner">
    <!-- 顶部导航栏 -->
    <div class="top">
        <topbar></topbar>
    </div>
    <!-- 分类与个人信息 -->
    <div class="middle"></div>
    <!-- 商品展示 -->
    <div class="bottom"></div>
    <p>home page</p>
  </div>
</template>

<script >
import topbar from '@/components/TopBar.vue'

export default {
    name: "",
    components:{
        topbar
    },
    data() {
        return {

        };
    }
};
</script>

<style>
</style>
