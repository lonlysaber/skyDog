<template>
  <div class="payOrder">
    <div class="top">
      <TopBar></TopBar>
    </div>
    <div class="payorder">
      <div class="steps">
        <div class="logo">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="step">
          <div class="one">
            <div class="item">1</div>
            <div class="stepItem">拍下商品</div>
          </div>
          <div class="line"></div>
          <div class="two">
            <div class="item">2</div>
            <div class="stepItem">付款到支付宝</div>
          </div>
          <div class="line"></div>
          <div class="thr">
            <div class="item">3</div>
            <div class="stepItem">确认收货</div>
          </div>
          <div class="line"></div>
          <div class="four">
            <div class="item">4</div>
            <div class="stepItem">评价</div>
          </div>
        </div>
      </div>
      <div class="adddiv">
        <div class="heard">
          <h4>选择收货地址</h4>
        </div>
        <div class="adds">
          <div
            class="address"
            v-for="item in adds"
            :key="item.key"
            @click="choice(item.addressId)"
          >
            <div class="zone">
              <span>{{ item.zone }}</span>
              <span>({{ item.name }})</span>
            </div>
            <div class="fulladd">
              <span>{{ item.fullAddress }}</span>
              &nbsp;
              <span>{{ item.phone }}</span>
            </div>
            <div class="choiced" v-if="checked == item.addressId">
              <span>修改</span>
              <img src="@/assets/choiced.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="checkOrder">
        <div class="heard">
          <h4>确认订单信息</h4>
        </div>
        <div class="formHeard">
          <ul>
            <li>店铺宝贝</li>
            <li>商品属性</li>
            <li>单价</li>
            <li>数量</li>
            <li>小计</li>
          </ul>
          <hr />
          <div class="products" v-for="product in products" :key="product.key">
            <div class="productInfo">
              <div class="dec">
                <div class="image">
                  <img :src="product.img" alt="" />
                </div>
                <div class="productDec">
                  <span>{{ product.productName }}</span>
                </div>
              </div>
              <div class="attribute">
                <div class="scale">{{ product.scale }}</div>
                <div class="feature">{{ product.feature }}</div>
              </div>
              <div class="price">
                <div class="span">
                  <span>{{ product.price }}</span>
                </div>
              </div>
              <div class="num">
                <el-input-number
                  v-model="product.num"
                  @change="handleChange"
                  :min="1"
                  :max="99"
                ></el-input-number>
              </div>
              <div class="sum">
                <span>{{ product.price * product.num }}</span>
              </div>
            </div>
          </div>
          <hr/>
          <div class="addCheck">
            <div class="sum">
              <span>实付款</span>
              <span class="chara">￥</span>
              <span class="digtal">{{sum}}</span>
            </div>
            <div class="add">
              <span>寄送至：</span>
              <span class="fulladd">{{adds[idx].fullAddress}}</span>
            </div>
            <div class="userInfo">
              <span>收货人：</span>
              <span class="info">
                {{adds[idx].name}}
                &nbsp;
                {{adds[idx].phone}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import TopBar from "@/components/TopBar.vue";
export default {
  name: "",
  data() {
    return {
      productId: "",
      scale: "",
      feature: "",
      adds: [
        {
          addressId: 10001,
          name: "zjz",
          zone: "江西南昌",
          fullAddress: "江西省南昌市青山湖区双港东大街808号北区",
          phone: "15170292966",
        },
        {
          addressId: 10002,
          name: "zjz",
          zone: "江西南昌",
          fullAddress: "江西省南昌市青山湖区双港东大街",
          phone: "15170292966",
        },
        {
          addressId: 10003,
          name: "zjz",
          zone: "江西南昌",
          fullAddress: "江西省南昌市青山湖区808号北区",
          phone: "15170292966",
        },
        {
          addressId: 10004,
          name: "zjz",
          zone: "江西南昌",
          fullAddress: "江西省南昌市",
          phone: "15170292966",
        },
      ],
      checked: 10001,
      idx:0,
      curshow: true,
      num: 1,
      products: [
        {
          img: "https://img12.360buyimg.com/n5/s450x450_jfs/t1/75126/14/21233/346381/62ea208bE630e5e19/578e0bcb5e4b7910.jpg!cc_450x450.avif",
          productName:
            "拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F",
          price: "60",
          scale: this.scale||'L',
          feature: this.feature||"红色",
          num: 1,
        },
        {
          img: "https://img12.360buyimg.com/n5/s450x450_jfs/t1/75126/14/21233/346381/62ea208bE630e5e19/578e0bcb5e4b7910.jpg!cc_450x450.avif",
          productName:
            "拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F",
          price: "60",
          scale: this.scale||"L",
          feature: this.feature||"红色",
          num: 1,
        },
      ],
      sum:100
    };
  },
  created() {
    this.productId = this.$route.query.productId || "10001";
    this.scale = this.$route.query.scale;
    this.feature = this.$route.query.feature;
    console.log(this.productId, this.scale, this.feature);
  },
  methods: {
    choice(id) {
      this.checked = id;
      this.idx = this.checked -10001;
      console.log(this.idx);
    },
    handleChange(value) {},
  },
  components: { TopBar },
};
</script>

<style scoped>
*{
  margin:0;
  padding: 0;
}
.payOrder .payorder {
  margin: 0 100px 0 100px;
  text-align: left;
}
/* 上部logo和步骤 */
.payOrder .steps {
  display: flex;
  justify-content: space-around;
}
.payOrder .steps .logo {
  width: 100px;
  flex: 50%;
}
h4{
  margin: 10px 0;
}
hr{
  margin: 10px 0;
}
.payOrder .steps .logo img {
  width: 100px;
}
.payOrder .steps .step {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 50%;
  text-align: center;
}

.payOrder .steps .step .item {
  border: 1px solid black;
  border-radius: 50%;
  line-height: 20px;
  width: 20px;
  margin: auto;
  background-color: cornflowerblue;
  color: white;
  border: 1px cornflowerblue solid;
}
.payOrder .steps .step .item:hover {
  cursor: pointer;
}
.payOrder .steps .step .line {
  height: 2px;
  width: 100px;
  background-color: rgb(40, 47, 134);
}
/* 地址栏 */
/* 触发BFC抵消float带来的内容塌陷 */
.payOrder .adddiv {
  overflow: auto;
}
.payOrder .adddiv .adds .address {
  width: 20%;
  float: left;
  border: 2px solid black;
  margin: 5px 5px 0 0;
  padding: 5px;
  height: 90px;
}
.payOrder .adddiv .adds .address:hover {
  cursor: pointer;
  border: 2px solid cornflowerblue;
}
.payOrder .adddiv .adds .address .choiced {
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.payOrder .adddiv .adds .address .choiced img {
  width: 20px;
}
.payOrder .adddiv .adds .address .choiced span:hover {
  color: red;
}
.payOrder .adddiv .adds .address .choiced span:active {
  color: gray;
}
/* 确认订单信息 */
.payOrder .checkOrder .formHeard ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}
.payOrder .checkOrder .formHeard ul li {
  float: left;
  width: 200px;
  text-align: center;
}
.payOrder .checkOrder .products{
  background-color: rgb(242, 247, 255);
  margin: 5px 0;
  padding: 5px 0;
}
.payOrder .checkOrder .products .productInfo{
  display: flex;
  justify-content: space-around;
} 
.payOrder .checkOrder .products .productInfo .dec{
  display: flex;
  width:200px;
}
.payOrder .checkOrder .products .productInfo .dec .image{
  width: 80px;
  height: 80px;
}
.payOrder .checkOrder .products .productInfo .dec img{
  width: 80px;
}
.payOrder .checkOrder .products .productInfo .dec .productDec{
  line-height: 20px;
  font-size: 14px;
  /* white-space: nowrap; */
  width: 120px;
  height: 80px;
  overflow: hidden;
  Text-overflow: ellipsis;
  display: -webkit-box;
  /* 设置伸缩盒子的子元素排列方式--从上到下垂直排列 */
  -webkit-box-orient: vertical;
  /* 显示的行 */
  -webkit-line-clamp: 4;
  margin-left:5px ;
}
.payOrder .checkOrder .products .productInfo .attribute{
  width: 200px;
  text-align: center;
}
.payOrder .checkOrder .products .productInfo .price{
  width: 200px;
  text-align: center;
}
.payOrder .checkOrder .products .productInfo .num{
  width: 200px;
  text-align: center;
}
.payOrder .checkOrder .products .productInfo .sum{
  width: 200px;
  text-align: center;
}
/*  */
</style>
