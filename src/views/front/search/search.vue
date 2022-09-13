<template>
    <div class="inner">
        <TopBar/>
        <SearchBar :sel="select" :ipt="input"/>
        <!-- 筛选 -->
        <div class="sift">
            <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane name="综合排序">
                    <span slot="label"> 综合排序</span>
                </el-tab-pane>
                <el-tab-pane name="销量">
                    <span slot="label" > 销量</span>
                </el-tab-pane>
                <el-tab-pane name="评分">
                    <span slot="label">评分</span>
                </el-tab-pane>
                <el-tab-pane name="价格">
                    <span slot="label"> 价格</span>
                </el-tab-pane>  
            </el-tabs>
            <div class="price">
                <el-input placeholder="￥" v-model="lowPrice" clearable>
                </el-input>
                ——
                <el-input placeholder="￥" v-model="highPrice" clearable>
                </el-input>
                <el-button type="primary" round @click="getProductByPrice">确定</el-button>
            </div>
        </div>
        <!-- 商品内容 -->
        <div class="main">
            <div class="product" v-for="p in products" :key="p.productId"
            @click="gotoDetail(p)">
                <img src="../../../assets/product.jpg">
                <div class="content">
                    <div class="row1">
                        <div class="price">
                            <span>￥</span>
                            <span>{{p.price}}</span>
                        </div>
                        <div class="pay">
                            {{200+"+"}}付款
                        </div>
                    </div>
                    <div class="row2">
                        <div class="dec">
                            {{p.productDec}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
</template>

<script >
import SearchBar from '@/components/searchBar.vue';
import TopBar from '@/components/TopBar.vue';
export default {
    name: "",
    data() {
        return {
            lowPrice:"",
            highPrice:"",
            activeName:"综合排序",
            products:[
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                },
                {
                    imgUrl:"../../../assets/product.jpg",
                    productDec:"iPhone 14全网通2022新品5G手机正品国行苹果14手机官方正品iphone",
                    price:4999,
                }
            ],
            select:'商品',
            input:''
        };
    },
    created(){
        // console.log(this.$route.query.select)
        // console.log(this.$route.query.input)
        this.select = this.$route.query.select
        this.input = this.$route.query.input

    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event,this.activeName);
      },
      getProductByPrice(){
        console.log(this.lowPrice,this.highPrice);
      },
      gotoDetail(item){
      if(this.$cookies.isKey('token')){
        this.$router.push('/productdetail')
      }else{
        this.$message({
            message: "请先登录",
            type: "error",
            });
            
        this.$router.push('/frontlogin')
      }
      // console.log(item)
    },
    },
    components: { SearchBar, TopBar }
}
</script>

<style>
.sift{
    width: 80%;
    margin: auto;
    padding-left: 60px;
}
.sift .el-input__inner {
    width: 100px;
}
.sift .price{
    width: 400px;
    position: relative;
    left: 300px;
    height: -100px;
    margin-top: -55px;
}
.sift .el-input{
    width: 100px;
}
.sift .el-button.is-round{
    margin-left: 10px;
}
.main{
    width: 80%;
    margin: auto;
    margin-top: 20px;
    overflow:auto;
}
.main .product{
    width: 180px;
    height: 280px;
    margin-left: 30px;
    float: left;

    border: 2px #fdfdfd solid;
}
.main .product:hover{
 
    border: 2px #409eff solid;
}
.main .product img{
    width: 100%;
    
}
.main .product .content{
    padding-top: 6px;
}
.main .product .content .row1 .price{
    color: brown;
    font-size: 16px;
    float: left;
    height: 22px;
    line-height: 22px;
}
.main .product .content .row1{
    width: 100%;
    height: 22px;
}
.main .product .content .row1 .pay{
    float: right;
    font-size: 12px;
    color: #888888;
    line-height: 22px;
}
.main .product .content .row2{
    width: 100%;
    height: 36px;
}
.main .product .content .row2 .dec{
    float: left;
    font-size: 14px;
    height: 36px;
    margin-top: 6px;
    /* 1.溢出隐藏 */
    overflow: hidden;
    /* 2.用省略号来代替超出文本 */
    text-overflow: ellipsis;
    /* 3.设置盒子属性为-webkit-box  必须的 */
    display: -webkit-box;
    /* 4.-webkit-line-clamp 设置为2，表示超出2行的部分显示省略号，如果设置为3，那么就是超出3行部分显示省略号 */
    -webkit-line-clamp: 2;
    /* 5.字面意思：单词破坏：破坏英文单词的整体性，在英文单词还没有在一行完全展示时就换行  即一个单词可能会被分成两行展示 */
    word-break: break-all;
    /* 6.盒子实现多行显示的必要条件，文字是垂直展示，即文字是多行展示的情况下使用 */
    -webkit-box-orient: vertical;

}
</style>
