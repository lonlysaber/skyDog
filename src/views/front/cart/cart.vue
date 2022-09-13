<template>
    <div class="cart">
        <div class="top">
            <topBar></topBar>
        </div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#FFbfb" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item></el-menu-item>
            <el-menu-item></el-menu-item>
            <el-menu-item index="0"></el-menu-item>
            <el-menu-item index="0" style="font-size:large">我的购物车</el-menu-item>
            <!-- <el-input v-model="input" placeholder="输入内容搜索"></el-input>
            <el-button type="primary" @click="toSearch">搜索</el-button> -->
        </el-menu>
    </div>
</template>

<script >
import topBar from '@/components/TopBar.vue';
import searchBar from '@/components/searchBar.vue';
export default {
    name: "",
    components: { topBar, searchBar },
    data() {
        return {
            username: "",
            input:""
        }

    },
    created() {
        this.username = this.$route.query.userName;
    },
    methods: {

        toOrderPage() {

        },
        toSearch(){

        }
    },
}
</script>

<style>
.cart  .search{

    }
</style>
