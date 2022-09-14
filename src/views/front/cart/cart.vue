<template>
    <div class="cart">
        <div class="top">
            <topBar></topBar>
        </div>
        <div class="search">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#246EDC"
                text-color="#fff" active-text-color="#ffd04b" style="text-align:center; padding-left: 130px;">
                <el-menu-item index="0" style="font-size:large">我的购物车</el-menu-item>

                <el-input v-model="input" placeholder="输入内容搜索">
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
                <el-table ref="multipleTable" :data="products" tooltip-effect="dark" style="width: 100%" 
                    @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="dec" label="商品信息" width="450">
                        </el-table-column>  
                    <el-table-column prop="name" label="单价" width="120">
                    </el-table-column>
                    <el-table-column label="数量" width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>                       
                    <el-table-column prop="address" label="金额" >
                    </el-table-column>
                    <el-table-column prop="address" label="操作" show-overflow-tooltip>
                    </el-table-column>
                </el-table>
                <!-- <div style="margin-top: 20px">
                    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
                    <el-button @click="toggleSelection()">取消选择</el-button>
                </div> -->

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
                {
                    img: 'https://gw.alicdn.com/bao/uploaded/i1/179917267/O1CN016Xkm9223YKxfqgeOC_!!179917267.jpg_300x300q90.jpg_.webp',
                    dec: '数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带',
                    price: '5.8'
                }
            ],

        }

    },
    created() {
        this.username = this.$route.query.userName;
    },
    methods: {

        toOrderPage() {

        },
        toSearch() {

        },
        getCart() {

        },
    },
}
</script>

<style>
.cart .el-menu-demo {
    display: flex;
}

.cart .el-input {
    margin-left: 400px;
    width: 600px;
    align-items: center;
}

.cart .el-input__inner {
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
    width: 70%;
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
.cart .myproduct{
    height: auto;
    display: flex;
    margin-top: 2px;
    background-color: aliceblue;
}
</style>
