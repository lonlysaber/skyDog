<template>
    <div class="me">
        <div class="top">
            <topBar></topBar>
        </div>
        <el-container>
            <!-- 头部导航栏 -->
            <el-header>
     
                <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                    background-color="#FF4401" text-color="#fff" active-text-color="#ffd04b"
                    style="text-align:center; padding-left: 130px;">
                    <el-menu-item index="0" style="font-size:large">我的天狗</el-menu-item>
                    <el-menu-item></el-menu-item>
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">账号管理</el-menu-item>
                    <el-menu-item index="3" disabled>消息中心</el-menu-item>
                    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>

                </el-menu>
            </el-header>


            <el-container style="padding-left: 100px;">
                <!-- 侧边 -->
                <el-aside width="250px">

                    <el-col :span="24">
                        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
                            @close="handleClose" background-color="" text-color="#000000" active-text-color="#ffd04b">
                            <div class="menu">
                                <el-menu-item index="1" @click="toOrderPage()">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">我的订单</span>
                                </el-menu-item>
                                <el-menu-item index="2" @click="toCartPage(user)">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">我的购物车</span>
                                </el-menu-item>
                                <el-menu-item index="3" @click="toCollectPage()">
                                    <i class="el-icon-document"></i>
                                    <span slot="title">我的收藏</span>
                                </el-menu-item>
                                <el-menu-item index="4" @click="toBaughtPage()">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">我的购买</span>
                                </el-menu-item>
                                <el-menu-item index="5" @click="toHistoryPage()">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">我的足迹</span>
                                </el-menu-item>
                                <el-menu-item index="6" @click="toEvaluatePage()">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">我评价的</span>
                                </el-menu-item>
                            </div>
                        </el-menu>
                    </el-col>
                </el-aside>

                <!-- 内容 -->
                <el-main>
                    <div class="mt-ml-c1">
                        <div class="mt-ml-shim">
                            <div class="top-info">
                                <div class="info-top" style="position: relative;">
                                    <div class="info">
                                        <div class="avatar">
                                            <a href="" target="_blank">
                                                <!-- <span class="s-edit-mask">编辑资料</span> -->
                                                <img :src="user.avatar" />
                                            </a>
                                        </div>
                                        <div class="name">
                                            <a data-spm="d4912005" target="_blank" href="">
                                                <em>EXPECT</em>{{username}}</a>
                                        </div>
                                    </div>

                                    <div class="address">
                                        <ul>
                                            <li>
                                                <a href="" target="_blank">我的收货地址</a>

                                            </li>
                                            <li>
                                                <a href="" target="_blank">我的支付宝</a>

                                            </li>


                                        </ul>
                                    </div>
                                </div>
                                <div class="info-bottom">
                                    <ul>
                                        <li>
                                            <a data-spm="d4919660" target="_blank" href="">
                                                <span>待付款
                                                    <em></em>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-spm="d4919661" target="_blank" href="">
                                                <span>待发货
                                                    <em></em>
                                                </span></a>
                                        </li>
                                        <li>
                                            <a data-spm="d4919662" target="_blank" href="">
                                                <span>待收货
                                                    <em></em>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-spm="d4919663" target="_blank" href=".">
                                                <span>待评价
                                                    <em></em>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-spm="d4919664" target="_blank" href="">
                                                <span>退款
                                                    <em></em>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <!-- 主体内容 -->
                            <div class="middle">
                                <router-view></router-view>
                            </div>
                            <!-- 商品推荐/ -->
                            <div class="buttom">

                            </div>

                        </div>
                        <!--  右侧广告  -->
                        <div class="ads">

                        </div>
                    </div>

                </el-main>
            </el-container>
        </el-container>



    </div>
</template>

<script scoped>
import topBar from '@/components/TopBar.vue';
export default {
    name: "",
    components: { topBar },
    data() {
        return {
            username: "",
            activeIndex2: '1',
            user: {
                avatar:
                    "https://wwc.alicdn.com/avatar/getAvatar.do?userNick=tb487578808&_input_charset=UTF-8&width=80&height=80&type=sns",
                username: "天狗用户001",
            },
        };
    },
    created() {
        this.username = this.$route.query.userName;
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        toOrderPage() {

        },
        toCartPage(user) {
            this.$router.push({
                path: "/cart",
                query: {
                    userName: user.username,
                }
            })
        },
        toCollectPage() {

        },
        toEvaluate() {

        },
    },

}
</script>

<style>
.me .el-header {
    /* background-color: #B3C0D1; */
    color: #333;
    text-align: center;
    line-height: 60px;
}

.me .menu {
    text-align: left;
    margin-left: 50px;
}

.me .el-aside {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 10px;
    margin-top: 20px;
    height: 700px;
}

.m .el-main {
    /* background-color:; */
    color: #333;
    text-align: center;
    line-height: auto;
    margin-top: 20px;
    padding: 10px;
}

.me .mt-ml-c1 .mt-ml-shim {
    margin-bottom: -26px;
    margin-left: 10px;
    width: 726px;
    *position: relative;
}

.me .top-info {
    height: auto;
    display: block;
    /* background-color: lightblue; */
    border: 1px solid #e4eaee;
    margin-bottom: 20 px;
    /* font-size: 12px; */
    color: #4b4b4b;
    position: relative;
    font-family: tahoma, arial, 'Hiragino Sans GB', 'Microsoft YaHei', \5b8b\4f53, sans-serif;
}


.me .info-top {
    height: 60px;
    background-color: #D3DCE6;

}

.me .info {
    float: left;
    width: 35%;
    padding-top: 3px;
}

.me .avatar {
    float: left;
    display: block;
    width: 52px;
    height: 52px;
    margin-right: 13px;
    margin-left: 12px;
    position: relative;
    border: 2px solid #FFF;
    border-radius: 50%;
    overflow: hidden;
}

.me .name {
    margin-top: 6px;
    display: block;
    color: #000;
}

.me .address {
    float: left;
    width: 65%;
    height: 60px;
    text-align: center;
    /* padding-top: px; */
}

.me .address ul {
    float: left;
    width: 61%;
    margin-right: -1px;
    margin-top: 9px;
    padding-top: 7px;


}

.me .address li {
    width: 40%;
    display: inline;
    float: right;
}

.me .info-bottom {
    overflow: hidden;
}

.me .info-bottom ul {
    height: 52px;
    list-style: none;
    padding-left: 5px;
}

.me .info-bottom li {
    width: 20%;
    float: left;
}

.me .info-bottom a {
    zoom: 1;
    padding: 17px 0;
    display: block;
    color: #4b4b4b;
    text-align: center;
}
</style>

