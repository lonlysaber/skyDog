<template>
  <div class="productDetail">
    <div class="top">
      <div class="topbar">
        <topbar></topbar>
      </div>
      <div class="searchbar">
        <searchbar></searchbar>
      </div>
    </div>
    <div class="productInfo">
      <!-- 左侧图片轮播图 -->
      <div class="carousel">
        <el-carousel trigger="click" :autoplay="false">
          <el-carousel-item
            v-for="(item) in (product.img)"
            :key="item.key"
            align="middle"
          >
            <img :src="item" onerror="javascript:this.src='src/assets/logo.png';this.onerror=null" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 右侧商品信息 -->
      <div class="detail">
        <div class="head">
          <h3>{{ product.productName }}</h3>
        </div>
        <hr />
        <div class="price">
          <div class="name">
            <span>价格</span>
          </div>
          <div class="pri">
            <h2>￥{{ product.productPrice }}</h2>
          </div>
        </div>
        <hr/>
        <div class="scales">
          <div class="name">
            <span>规格</span>
          </div>
          <div class="scale">
            <div class="span" v-for="item in product.scales" :key="item.key">
              <span @click="clickScale(item, $event)">{{ item }}</span>
              <span v-if="checkEdScale==item" style="color:red">●</span>
            </div>
          </div>
        </div>
        <hr />
        <div class="features">
          <div class="name">
            <span>特征</span>
          </div>
          <div class="feature">
            <div class="span" v-for="item in product.features" :key="item.key">
              <span   @click="clickFeature(item, $event)">{{ item }}</span>
              <span  v-if="checkEdFeature==item" style="color:red">●</span>
            </div>
          </div>
        </div>
        <hr />
        <div class="stepnum">
          <div class="name">
            <span>数量</span>
          </div>
          <div class="num">
            <el-input-number
              v-model="num"
              @change="handleChange"
              :min="1"
              :max="99"
            >
            </el-input-number>
          </div>
        </div>
        <hr />
        <div class="subBtn">
          <div class="buy">
            <button @click="buy">立即购买</button>
          </div>
          <div class="addCart">
            <button @click="addCart">加入购物车</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import topbar from "@/components/TopBar.vue";
import searchbar from "@/components/searchBar.vue";
import axios from 'axios';

export default {
  components: {
    topbar,
    searchbar,
  },
  name: "",
  data() {
    return {
      productId:'',
      product: {
        productId:'10003',
        productName:'PINKPINEAPPLE粉红菠萝女装短外套女春秋新款2022年学生开衫夹克上衣女士风衣外套短款 PPA芥末黄 165/88A（L）',
        productPrice:'279',
        img:{
          img1:'https://img10.360buyimg.com/n5/s450x450_jfs/t1/101838/18/31132/98953/62d65f90E37aaf946/143951520738aee4.jpg!cc_450x450.avif',
          img2:'https://img10.360buyimg.com/n5/s450x450_jfs/t1/101838/18/31132/98953/62d65f90E37aaf946/143951520738aee4.jpg!cc_450x450.avif',
          img3:'https://img10.360buyimg.com/n5/s450x450_jfs/t1/101838/18/31132/98953/62d65f90E37aaf946/143951520738aee4.jpg!cc_450x450.avif',
          img4:'https://img10.360buyimg.com/n5/s450x450_jfs/t1/101838/18/31132/98953/62d65f90E37aaf946/143951520738aee4.jpg!cc_450x450.avif',
          img5:'https://img10.360buyimg.com/n5/s450x450_jfs/t1/101838/18/31132/98953/62d65f90E37aaf946/143951520738aee4.jpg!cc_450x450.avif',

        }
      },
      scales: ["1m", "2m", "3m","4m","5m"],
      features: [
          "红色",
          "黑色",
          "蓝色",
          "绿色",
          "灰色",
        ],
      num: 1,
      checkEdScale:'',
      checkEdFeature:'',
    };
  },
  created(){
    this.productId =  this.$route.query.productId|| '10003';
    this.getProductById()
  },
  methods: {
    deleteImg(key){
      console.log(key)
      eval(`delete this.product.img.${key}`)
      // console.log(this.product,this.product.img)
    },
    getProductById(){
      axios({
        method:'get',
        url:'/product/queryById/'+this.productId
      }).then(res=>{
        // console.log(res)
        this.product = res.data.data
        delete this.product.img.imgId
        delete this.product.img.productId
        delete this.product.img.productName

      })
    },
    handleChange(value) {
      console.log(value);
    },
    clickScale(scale, e) {
        // console.log(scale,e);
        // e.target.style.color='red'
        if(this.checkEdScale == scale){
            this.checkEdScale = ''
        }else{
            this.checkEdScale = scale
        }
    },
    clickFeature(feature,e){
        // console.log(feature,e);
        // e.target.style.color='red'
        if(this.checkEdFeature == feature){
            this.checkEdFeature = ''
        }else{
            this.checkEdFeature = feature;
        }
    },
    buy(){
        let scale = this.checkEdScale || this.scales[0]
        let feature = this.checkEdFeature || this.features[0]
        this.product.num = this.num||1;
        let products = []
        products.push(this.product)
        console.log(products)

        this.$router.push({
          path:'/payorder',
          query:{
            productIds:products,
            scale:scale,
            feature:feature,
            num:this.num,
          }
        })
        // console.log(scale,feature)
    },
    addCart(){
        let scale = this.checkEdScale || this.scales[0]
        let feacture = this.checkEdFeature || this.features[0]
        // console.log(scale,feacture)
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.productDetail {
  background-color: rgb(234, 232, 235);
  height: 100vh;
}
.productDetail .productInfo {
  display: flex;
  margin: 0 100px;
  background-color: #fff;
  border-radius: 18px;
}
.productDetail .carousel {
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  width: 330px;
  /* height: 314px; */
  overflow: hidden;
  margin: 24px;
  display: block;
  visibility: visible;
}
.productDetail .carousel img {
  /* width: 314px; */
  width:100%;
  height: 100%;
  display: block;
}
.productDetail .el-carousel__container {
  text-align: center;
  position: relative;
  height: 314px;
}
.productDetail ul.el-carousel__indicators.el-carousel__indicators--horizontal{
  width: 100%;
}

.productDetail .detail {
  margin: 24px;
}
.productDetail .detail hr{
  margin:15px 0;
}
.productDetail .detail .head{
  line-height: 20px;
  /* font-size: 12px; */
  /* white-space: nowrap; */
  overflow: hidden;
  /* text-overflow: ellipsis; */
  display: -webkit-box;
  /* 设置伸缩盒子的子元素排列方式--从上到下垂直排列 */
  -webkit-box-orient: vertical;
  /* 显示的行 */
  -webkit-line-clamp: 3;
  margin-left: 5px;
}
.productDetail .detail .price {
  display: flex;
  /* color: cornflowerblue; */
  
  text-align: left;
}
.productDetail .detail .price .name{
  flex:30%;
}
.productDetail .detail .price .pri{
  flex:70%;
}
.productDetail .detail .scales {
  display: flex;
  margin: 10px 0;
}
.productDetail .detail .scales .name {
  text-align: left;
  flex: 30%;
}
.productDetail .detail .scales .scale {
  display: flex;
  flex: 70%;
  justify-content: space-between;
  max-width: 400px;
  flex-wrap: wrap;
  align-content: flex-start;
}
.productDetail .detail .scales .scale .span {
  flex: 20%;
  text-align: left;
}
.productDetail .detail .scales .scale span:hover {
  cursor: pointer;
}
.productDetail .detail .features {
  display: flex;
  margin: 10px 0;
}
.productDetail .detail .features .name {
  text-align: left;
  flex: 30%;
}
.productDetail .detail .features .feature {
  display: flex;
  flex: 70%;
  max-width: 400px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
}
.productDetail .detail .features .feature .span {
  flex: 20%;
  text-align: left;
}
.productDetail .detail .features .feature span:hover {
  cursor: pointer;
}
.productDetail .detail .stepnum {
  display: flex;
  /* margin: 10px 0; */
  text-align: left;
}
.productDetail .detail .stepnum .name {
  flex: 30%;
}
.productDetail .detail .stepnum .num {
  flex: 70%;
}
.productDetail .detail .subBtn {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
}
.productDetail .detail .subBtn button {
  width: 200px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}
.productDetail .detail .subBtn .buy button {
  background-color: aliceblue;
  border: 1px solid cornflowerblue ;
}
.productDetail .detail .subBtn .buy button:active {
  border:1px  gray ;
}
.productDetail .detail .subBtn .addCart button {
  background-color: cornflowerblue;
  border:1px white solid;
  color: white;
}
.productDetail .detail .subBtn .addCart button:active {
  border: 1px black;
}
</style>
