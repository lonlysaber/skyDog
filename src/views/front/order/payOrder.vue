<template>
  <div class="payOrder">
    <div class="top">
      <TopBar></TopBar>
    </div>
    <div class="payorder">
      <div class="steps">
        <div class="logo">
          <img src="@/assets/logo.png" @click="gotoHome" alt="" />
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
            :style="
              checked == item.addressId
                ? 'border:2px solid cornflowerblue;'
                : 'border:2px solid black'
            "
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
              <span @click="dialogVisible = true">修改</span>
              <img src="@/assets/choiced.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <el-dialog
        title="地址修改"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose"
      >
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign"
        >
          <el-form-item label="地址">
            <el-input v-model="adds[idx].zone"></el-input>
          </el-form-item>
          <el-form-item label="收货人">
            <el-input v-model="adds[idx].name"></el-input>
          </el-form-item>
          <el-form-item label="详细地址">
            <el-input v-model="adds[idx].fullAddress"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="adds[idx].phone"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="modifyAdd">确 定</el-button>
        </span>
      </el-dialog>

      <div class="checkOrder">
        <div class="heard">
          <h4>确认订单信息</h4>
        </div>
        <div class="formHeard">
          <ul>
            <li class="first"><b>店铺宝贝</b></li>
            <li><b>商品属性</b></li>
            <li><b>单价</b></li>
            <li><b>数量</b></li>
            <li><b>小计</b></li>
          </ul>
        </div>
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
        <hr />
        <div class="finalCheck">
          <div class="totalInfo">
            <div class="sum">
              <span>实付款：</span>
              <span class="chara">￥</span>
              <span class="digtal">{{ sum }}</span>
            </div>
            <div class="add">
              <span>寄送至：</span>
              <span class="fulladd">{{ adds[idx].fullAddress }}</span>
            </div>
            <div class="userInfo">
              <span>收货人：</span>
              <span class="info">
                {{ adds[idx].name }}
                &nbsp;
                {{ adds[idx].phone }}
              </span>
            </div>
          </div>
          <div class="check">
            <button @click="cancel">取消</button>
            <button @click="submit">提交订单</button>
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
      idx: 0,
      curshow: true,
      num: 1,
      products: [
        {
          img: "https://img12.360buyimg.com/n5/s450x450_jfs/t1/75126/14/21233/346381/62ea208bE630e5e19/578e0bcb5e4b7910.jpg!cc_450x450.avif",
          productName:
            "拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F",
          price: "60",
          scale: this.scale || "L",
          feature: this.feature || "红色",
          num: 1,
        },
        {
          img: "https://img12.360buyimg.com/n5/s450x450_jfs/t1/75126/14/21233/346381/62ea208bE630e5e19/578e0bcb5e4b7910.jpg!cc_450x450.avif",
          productName:
            "拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F",
          price: "60",
          scale: this.scale || "L",
          feature: this.feature || "红色",
          num: 1,
        },
      ],
      sum: 100,
      dialogVisible: false,
    };
  },
  created() {
    this.productId = this.$route.query.productId || "10001";
    this.scale = this.$route.query.scale;
    this.feature = this.$route.query.feature;
    this.handleChange();
    console.log(this.productId, this.scale, this.feature);
  },
  methods: {
    choice(id) {
      this.checked = id;
      this.idx = this.checked - 10001;
      // console.log(this.idx);
    },
    handleChange(value) {
      let sum = 0;
      this.products.forEach((product) => {
        sum += product.num * product.price;
        // console.log(product)
      });
      this.sum = sum;
    },
    gotoHome() {
      this.$router.push("/");
    },
    cancel() {
      this.$router.go(-1);
    },
    submit() {},
    handleClose() {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    modifyAdd() {
      this.dialogVisible = false;
    },
  },
  components: { TopBar },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-size: 12px;
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
h4 {
  font-size: 16px;
  margin: 10px 0;
}
hr {
  font-size: 16px;
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
  height: 70px;
}
.payOrder .adddiv .adds .address:hover {
  cursor: pointer;
  border: 2px solid cornflowerblue;
}
.payOrder .adddiv .adds .address .fulladd {
  height: 34px;
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
  font-size: 16px;
}
.payOrder .checkOrder .formHeard ul li {
  float: left;
  width: 200px;
  text-align: center;
}
.payOrder .checkOrder .formHeard ul .first {
  width: 400px;
}
.payOrder .checkOrder .products {
  background-color: rgb(242, 247, 255);
  margin: 5px 0;
  padding: 5px 0;
}
.payOrder .checkOrder .products .productInfo {
  display: flex;
  justify-content: space-around;
}
.payOrder .checkOrder .products .productInfo .dec {
  display: flex;
  width: 400px;
}
.payOrder .checkOrder .products .productInfo .dec .image {
  width: 80px;
  height: 80px;
}
.payOrder .checkOrder .products .productInfo .dec img {
  width: 80px;
}
.payOrder .checkOrder .products .productInfo .dec .productDec {
  line-height: 20px;
  font-size: 12px;
  /* white-space: nowrap; */
  width: 320px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* 设置伸缩盒子的子元素排列方式--从上到下垂直排列 */
  -webkit-box-orient: vertical;
  /* 显示的行 */
  -webkit-line-clamp: 2;
  margin-left: 5px;
}
.payOrder .checkOrder .products .productInfo .attribute {
  width: 200px;
  text-align: center;
}
.payOrder .checkOrder .products .productInfo .price {
  width: 200px;
  text-align: center;
}
.payOrder .checkOrder .products .productInfo .num {
  width: 200px;
  text-align: center;
}
.payOrder .checkOrder .products .productInfo .sum {
  width: 200px;
  text-align: center;
}
/* 确认信息 */
.payOrder .checkOrder .finalCheck {
  float: right;
  margin: 20px 0;
  /* width:400px; */
  text-align: right;
}
.payOrder .checkOrder .finalCheck .totalInfo {
  padding: 5px;
  border: 2px cornflowerblue solid;
  margin-bottom: 20px;
}
.payOrder .checkOrder .finalCheck .sum .chara,
.payOrder .checkOrder .finalCheck .sum .digtal {
  font-size: 25px;
}
.payOrder .checkOrder .finalCheck .sum .digtal {
  color: cornflowerblue;
}
.payOrder .checkOrder .finalCheck .check button {
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
}
.payOrder .checkOrder .finalCheck .check button:nth-child(2) {
  margin-left: 10px;
}
.payOrder .dialog-footer .el-button {
  width: 70px;
  height: 35px;
}
</style>
