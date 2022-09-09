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
            v-for="item in product.img"
            :key="item.key"
            align="middle"
          >
            <img :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 右侧商品信息 -->
      <div class="detail">
        <div class="head">
          <h3>{{ product.name }}</h3>
        </div>
        <div class="price">
          <h2>99惊喜节!!!</h2>
          <h2>￥{{ product.price }}</h2>
        </div>
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

export default {
  components: {
    topbar,
    searchbar,
  },
  name: "",
  data() {
    return {
      product: {
        name: "数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带",
        img: [
          "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/368811398/O1CN01ljNbqt1MCKSkDZJPA_!!368811398.jpg_430x430q90.jpg",
          "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/368811398/O1CN01ljNbqt1MCKSkDZJPA_!!368811398.jpg_430x430q90.jpg",
          "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/368811398/O1CN01ljNbqt1MCKSkDZJPA_!!368811398.jpg_430x430q90.jpg",
          "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/368811398/O1CN01ljNbqt1MCKSkDZJPA_!!368811398.jpg_430x430q90.jpg",
        ],
        price: 29,
        scales: ["1m", "2m", "3m","4m","5m"],
        features: [
          "红色",
          "黑色",
          "蓝色",
          "绿色",
          "灰色",
        ],
      },
      num: 1,
      checkEdScale:'',
      checkEdFeature:'',
    };
  },
  methods: {
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
        let scale = this.checkEdScale || this.product.scales[0]
        let feacture = this.checkEdFeature || this.product.features[0]

        console.log(scale,feacture)
    },
    addCart(){
        let scale = this.checkEdScale || this.product.scales[0]
        let feacture = this.checkEdFeature || this.product.features[0]
        
        console.log(scale,feacture)
    }


  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: rgb(234, 232, 235);
}
.productDetail .productInfo {
  display: flex;
  margin: 0 100px;
  background-color: #fff;
  border-radius: 18px;
}
.productDetail .carousel {
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  width: 314px;
  /* height: 314px; */
  overflow: hidden;
  margin: 24px;
  display: block;
  visibility: visible;
}
.productDetail .carousel img {
  /* width: 314px; */
  height: 100%;
  display: block;
}
.productDetail .el-carousel__container {
  text-align: center;
  position: relative;
  height: 314px;
}
.productDetail .detail {
  margin: 24px;
}
.productDetail .detail .price {
  display: flex;
  color: cornflowerblue;
  justify-content: center;
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
  margin: 10px 0;
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
  border: 1px solid cornflowerblue;
}
.productDetail .detail .subBtn .addCart button {
  background-color: cornflowerblue;
  border: cornflowerblue;
  color: white;
}
</style>
