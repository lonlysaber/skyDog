<template>
    <div class="cart">
        <div class="top">
            <topBar></topBar>
        </div>
        <div class="search">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#246EDC"
                text-color="#fff" active-text-color="#ffd04b" style="text-align:center; padding-left: 130px;">
                <el-menu-item index="0" style="font-size:large">我的购物车</el-menu-item>

                <el-input class="input" v-model="input" placeholder="输入内容搜索">
                </el-input>

                <el-button type="primary" @click="toSearch">搜索</el-button>
            </el-menu>
        </div>

        <div class="product">

            <!-- <el-empty description="购物车为空"></el-empty> -->

            <div class="title">
                <span class="title-left">购物车(全部{{cartNum}})</span>

                <div class="check">
                    <span class="title-right">已选商品 ￥&nbsp;<span class="dollar"></span> 元</span>
                    <el-button type="primary" @click="toCheck">结算</el-button>
                </div>
            </div>


            <div class="myproduct">

                <el-table ref="multipleTable" :data="products" tooltip-effect="dark"
                    style="width: 100%;text-align: center;" @selection-change="handleSelectionChange">

                    <el-table-column type="selection" width="45">
                    </el-table-column>
                    <el-table-column prop="dec" label="商品信息" width="500">
                        <div class="stuff">
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                alt="图片加载失败">

                            <div class="title">数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带
                                {{products.dec}}
                            </div>

                        </div>

                        <div class="scale">
                            <!-- {{scale}} -->
                        </div>
                    </el-table-column>
                    <el-table-column prop="" label="单价" width="120">

                    </el-table-column>

                    <el-table-column prop="" label="数量">
                        <template slot-scope="scope">
                            <el-input-number v-model="scope.row.num" @change="handleChange" :min="1" :max="99"
                                size="mini">
                            </el-input-number>
                        </template>
                    </el-table-column>
                    <el-table-column prop="address" label="金额">
                    </el-table-column>
                    <el-table-column prop="address" label="操作" show-overflow-tooltip>
                        <p @click="toCollectPage()">移入收藏</p>
                        <p @click="delleteProduct()">删除商品</p>
                    </el-table-column>

                </el-table>

            </div>

        </div>

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
            input: "",
            activeIndex: '1',
            cartNum: '',
            num: 1,
            multipleSelection: [],
            products: [
                {
                    img: 'https://gw.alicdn.com/bao/uploaded/i1/179917267/O1CN016Xkm9223YKxfqgeOC_!!179917267.jpg_300x300q90.jpg_.webp',
                    dec: '数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带',
                    price: '5.8'
                },
                {
                    img: 'https://gw.alicdn.com/bao/uploaded/i1/179917267/O1CN016Xkm9223YKxfqgeOC_!!179917267.jpg_300x300q90.jpg_.webp',
                    dec: '数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带',
                    price: '5.8'
                },
            ],

        };

    },
    created() {
        this.username = this.$route.query.userName;
    },
    methods: {

        toCheck() {

        },

        toOrderPage() {

        },
        toSearch() {

        },
        getCart() {
            axios({
                url: "/cart/getMyCart/" + this.userId,
                method: "get",
            }).then((res) => {
                console.log(res);
                // console.log(res.data.result.result);
                // console.log(res.data.result.result.process);
                // this.collectDetail = res.data.result.result;
                // this.process = res.data.result.result.process;
            });
        },

        handleChange(value) {
            console.log(value);
        },

        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },

    }
}
</script>

<style>
.cart .el-menu-demo {
    display: flex;
}

.cart .search .el-input {
    margin-left: 350px;
    width: 600px;
    align-items: center;
}

.cart .search .el-input .el-input__inner {
    margin-top: 10px;
    align-items: center;
    border: 1px cornflowerblue solid;
    border-radius: 30px;
    width: 600px;
    height: 42px;
    background-color: #FFF;

}

.cart .search .el-button {
    margin: 10px 0px 0px 30px;
    border-radius: 25px;
    width: 100px;
    height: 42px;
}

.cart .product {
    width: 80%;
    height: auto;
    /* display:flboxex; */
    margin: 0px auto;
    margin-top: 80px;
    border-radius: 25px;
    background-color: aliceblue;


}

.cart .title {
    overflow: hidden;
    font-size: 12px;
    position: relative;
    height: 72px;
    width: 96%;
    padding: 0 18px;
    border-bottom: 2px solid #e6e6e6;
    margin-right: 0px;

}

.cart .title-left {
    float: left;
    overflow: hidden;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    height: 72px;
    line-height: 72px;

}

.cart .title-right {
    color: #000;
    font-size: 15px;
    font-weight: 600;
    height: 72px;
    line-height: 72px;

}

.cart .dollar {
    font-family: Verdana, Arial;
    padding-left: 2px;
    font-weight: 500;
    font-size: 22px;
    color: #FF5000;
}

.cart .check {
    float: right;
}

.cart .title .el-button {
    margin: 18px 0px 0px 30px;
    border-radius: 25px;
    width: 100px;
    height: 42px;
}

.cart .myproduct {
    height: auto;
    display: flex;
    margin-top: 2px;
    background-color: aliceblue;
}

.cart .stuff {
    display: flex;
    height: 150px;
}

.cart .stuff img {
    margin-top: 30px;
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 5px;
}

.cart .stuff .title {
    margin-top: 35px;
    word-break: normal;
    width: 250px;
    border-color: white;
    word-break: break-all;
}

.cart .el-table .cell {
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    padding-left: 10px;
    padding-right: 10px;
}

.cart .count {
    display: flex;

}
</style>
