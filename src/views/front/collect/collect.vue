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
                                    <el-col :span="4" v-for="item in products" :key="index">
                                        <el-card :body-style="{ padding: '0px' }">
                                            <img :src="item.img" class="image">
                                            <div class="name">
                                                <span>{{item.dec}}</span>
                                            </div>
                                            <div class="bottom">
                                                <span>￥99.5</span>
                                            </div>
                                        </el-card>
                                    </el-col>
                                </el-row>

                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="失效宝贝">
                            <div class="all">
                                <el-row :gutter="20">
                                    <el-col :span="4" v-for="item in products" :key="index">
                                        <el-card :body-style="{ padding: '0px' }">
                                            <img :src="item.img" class="image">
                                            <div class="name">
                                                <span>{{item.dec}}</span>
                                            </div>
                                            <div class="bottom">
                                                <span>￥99.5</span>
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
                            <div class="stuff"></div>
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
            activeName: '1',
            products: [
                {
                    productId: '1',
                    img: 'https://gw.alicdn.com/bao/uploaded/i1/179917267/O1CN016Xkm9223YKxfqgeOC_!!179917267.jpg_300x300q90.jpg_.webp',
                    dec: '数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带',
                    price: '5.8'
                },
                {
                    productId: '2',
                    img: 'https://gw.alicdn.com/bao/uploaded/i1/179917267/O1CN016Xkm9223YKxfqgeOC_!!179917267.jpg_300x300q90.jpg_.webp',
                    dec: '数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带',
                    price: '5.8'
                },
                {
                    productId: '3',
                    img: 'https://gw.alicdn.com/bao/uploaded/i1/179917267/O1CN016Xkm9223YKxfqgeOC_!!179917267.jpg_300x300q90.jpg_.webp',
                    dec: '数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带',
                    price: '5.8'
                },
                {
                    productId: '4',
                    img: 'https://gw.alicdn.com/bao/uploaded/i1/179917267/O1CN016Xkm9223YKxfqgeOC_!!179917267.jpg_300x300q90.jpg_.webp',
                    dec: '数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带',
                    price: '5.8'
                },
                {
                    productId: '5',
                    img: 'https://gw.alicdn.com/bao/uploaded/i1/179917267/O1CN016Xkm9223YKxfqgeOC_!!179917267.jpg_300x300q90.jpg_.webp',
                    dec: '数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带',
                    price: '5.8'
                },
                {
                    productId: '6',
                    img: 'https://gw.alicdn.com/bao/uploaded/i1/179917267/O1CN016Xkm9223YKxfqgeOC_!!179917267.jpg_300x300q90.jpg_.webp',
                    dec: '数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带',
                    price: '5.8'
                },
            ],
        };

    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
        handleClick(tab, event) {
            console.log(tab, event);
        }
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
}

.collect .content .all .name span {

    float: left;
    color: #3c3c3c;
    font-size: 10px;
    height: 20px;
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