<template>
    <div class="inner">
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-submenu index="1" vv-bind="user">
            <template slot="title">{{user.username}}</template>
            <el-menu-item style="width:200px;height: 100px;" index="1-1">
                <div class="userinfo">
                    <div class="avatar">
                        <img :src="user.avatar" alt="">
                    </div>
                    <div class="router">
                        <p>个人中心</p>
                        <p>退出登录</p>
                    </div>
                </div>
            </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">我的宝贝</template>
          <el-menu-item index="2-1">已买到的宝贝</el-menu-item>
          <el-menu-item index="2-2">我的足迹</el-menu-item>
        </el-submenu>
        <el-submenu index="3" style="float:right">
            <template slot="title">收藏夹</template>
            <el-menu-item index="3-1">收藏的商品</el-menu-item>
            <el-menu-item index="3-2">收藏的商家</el-menu-item>
        </el-submenu>
        <el-menu-item index="4" style="float:right">
            订单管理
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script >
export default {
    name: "topbar",
    data() {
        return {
            user:{
                avatar:'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=tb487578808&_input_charset=UTF-8&width=80&height=80&type=sns',
                username:'天狗用户001'
            },
            activeIndex: "1",
            activeIndex2: "1",
        }
    },
    methods: {
        getUserinfo(){
            
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    },
}
</script>

<style>
.userinfo{
    display: flex;
    /* flex: */
    align-items: center;
}
.userinfo .avatar img{
    border-radius: 50%;
}
.userinfo .router{
    margin-left: 20px;
}

</style>
