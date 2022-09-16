<template>
    <div class="collect">
        <div class="content">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane name="1">
                    <span slot="label"> 商品收藏 </span>

                    <el-tabs type="border-card">
                        <el-tab-pane label="全部宝贝">
                            <div class="all">
                                <el-row :gutter="20">
                                    <el-col :span="4" v-for="item in collectDetail" :key="item.key">
                                        <el-card :body-style="{ padding: '0px' }">
                                            <img :src="item.product.img.img1" class="image">
                                            <div class="name">
                                                <span>{{item.product.productName}}</span>
                                            </div>
                                            <div class="bottom">
                                                <span>￥{{item.product.productPrice}}</span>
                                            </div>
                                        </el-card>
                                    </el-col>
                                </el-row>

                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="失效宝贝">
                            <div class="all">
                                <el-row :gutter="20">
                                    <el-col :span="4" v-for="item in uselessDetail" :key="item.index">
                                        <el-card :body-style="{ padding: '0px' }">
                                            <img :src="item.product.img.img1" class="image">
                                            <div class="name">
                                                <span>{{item.product.productName}}</span>
                                            </div>
                                            <div class="bottom">
                                                <span>￥{{item.product.productPrice}}</span>
                                            </div>
                                        </el-card>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="宝贝搜索">
                            <div class="search">
                                <el-input style="" class="input" v-model="input" placeholder="输入内容搜索">
                                </el-input>
                                <el-button type="primary" @click="toSearch">搜索</el-button>
                            </div>
                            <div class="all">
                                <el-row :gutter="20">
                                    <el-col :span="4" v-for="item in searchDetail" :key="item.key">
                                        <el-card :body-style="{ padding: '0px' }">
                                            <img :src="item.product.img.img1" class="image">
                                            <div class="name">
                                                <span>{{item.product.productName}}</span>
                                            </div>
                                            <div class="bottom">
                                                <span>￥{{item.product.productPrice}}</span>
                                            </div>
                                        </el-card>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-tab-pane>

                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane name="2">
                    <span slot="label"> 店铺收藏 </span>
                    店铺收藏
                </el-tab-pane>
            </el-tabs>

            <div class="product">
                <div class="herder"></div>
                <div class="main">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: "10001",
            activeName: '1',
            input: '',
            collectDetail: [],
            uselessDetail: [],
            searchDetail: [],
        };
    },
    created() {
        // this.userId = this.$route.query.id;
        this.getMyCollect();
        this.getUseless();
    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },

        // 搜索收藏商品
        toSearch() {
            console.log(this.input);
            this.$axios({
                url: "/collect/getSearch/",
                method: "get",
                params: {
                    userId: this.userId,
                    keyword: this.input,
                },
            }).then((res) => {
                this.searchDetail = res.data.data;
            });

        },
        // 获取用户收藏数据
        getMyCollect() {
            this.$axios({
                url: "/collect/getMyCollect/" + this.userId,
                method: "get",
            }).then((res) => {
                // console.log(res.data.data);
                this.collectDetail = res.data.data;
            });
        },

        // 获取失效数据
        getUseless() {
            this.$axios({
                url: "/collect/getUseless/" + this.userId,
                method: "get",
            }).then((res) => {
                this.uselessDetail = res.data.data;
            });
        },
    }

}
</script>

<style scoped>
.collect .content span {
    margin: 0px 50px 0px 50px;
    font-weight: 600;
    font-size: 16px;
}

.collect .content .search {
    display: flex;
}

.collect .content .all {
    margin-top: 10px;
}

.collect .content .all .image {
    width: 99%;
    height: 180px
}

.collect .content .all .name span {

    float: left;
    color: #3c3c3c;
    font-size: 10px;
    height: 19px;
    margin: 0px;
    /* 1.溢出隐藏 */
    overflow: hidden;
    /* 2.用省略号来代替超出文本 */
    text-overflow: ellipsis;
    /* 3.设置盒子属性为-webkit-box  必须的 */
    display: -webkit-box;
    /* 4.-webkit-line-clamp 设置为2，表示超出2行的部分显示省略号，如果设置为3，那么就是超出3行部分显示省略号 */
    -webkit-line-clamp: 1;
    /* 5.字面意思：单词破坏：破坏英文单词的整体性，在英文单词还没有在一行完全展示时就换行  即一个单词可能会被分成两行展示 */
    word-break: break-all;
    /* 6.盒子实现多行显示的必要条件，文字是垂直展示，即文字是多行展示的情况下使用 */
    -webkit-box-orient: vertical;
}

.collect .content .all .name span:hover {
    color: #ff4442;
    cursor: pointer;
}

.collect .content .all .name .bottom {
    width: 100%;
    margin-top: 3px;
    margin: auto 0px;
}

.collect .content .all .bottom span {
    text-align: center;
    font-family: Verdana, Arial;
    padding-left: 2px;
    font-weight: 50;
    font-size: 15px;
    color: #FF5001;
}
</style>