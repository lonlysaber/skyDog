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
          <div class="two">
            <div class="item">2</div>
            <div class="stepItem">付款到支付宝</div>
          </div>
          <div class="thr">
            <div class="item">3</div>
            <div class="stepItem">确认收货</div>
          </div>
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
          <div class="address" v-for="item in adds" :key="item.key">
            <div class="zone">
              <span>{{ item.zone }}</span>
              <span>({{ item.name }})</span>
            </div>
            <div class="fulladd">
              <span>{{ item.fullAddress }}</span>
              &nbsp;
              <span>{{ item.phone }}</span>
            </div>
            <div class="modify" v-if="curshow">
              <span>修改</span>
            </div>
          </div>
        </div>
      </div>
      <div class="checkOrder">
        <div class="heard">
            <h4>确认订单信息</h4>
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
          name: "zjz",
          zone: "江西南昌",
          fullAddress: "江西省南昌市青山湖区双港东大街808号北区",
          phone: "15170292966",
        },
        {
          name: "zjz",
          zone: "江西南昌",
          fullAddress: "江西省南昌市青山湖区双港东大街808号北区",
          phone: "15170292966",
        },
        {
          name: "zjz",
          zone: "江西南昌",
          fullAddress: "江西省南昌市青山湖区双港东大街808号北区",
          phone: "15170292966",
        },
        {
          name: "zjz",
          zone: "江西南昌",
          fullAddress: "江西省南昌市青山湖区双港东大街808号北区",
          phone: "15170292966",
        },
      ],
      curshow: false,
    };
  },
  created() {
    this.productId = this.$route.query.productId || "10001";
    this.scale = this.$route.query.scale;
    this.feature = this.$route.query.feature;
    console.log(this.productId, this.scale, this.feature);
  },
  components: { TopBar },
};
</script>

<style scoped>
.payOrder .payorder{
    margin:0 100px 0 100px;
    text-align: left;
}
.payOrder .steps {
  display: flex;
  justify-content: space-around;
}
.payOrder .steps .logo {
  width: 100px;
  flex: 50%;
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
.payOrder .adddiv .adds .address{
    width: 20%;
    float:left;
    border:2px solid black;
    margin:5px 5px 0 0;
    padding:5px;
}
.payOrder .adddiv .adds .address:hover{
    cursor:pointer;
    border:2px solid cornflowerblue;
}
</style>
