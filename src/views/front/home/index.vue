<template>
  <div class="home">
    <div class="top">
      <topbar></topbar>
    </div>
    <div class="searchbar">
      <searchbar></searchbar>
    </div>
    <div class="container">
      <!-- 顶部导航栏 -->

      <!-- 分类与个人信息 -->
      <div class="middle">
        <!-- 分类 -->
        <div class="sort">
          <div class="sName">
            <h2>分类</h2>
          </div>
          <div class="sortDetail">
            <div class="sortItem" v-for="item in sorts" :key="item.key">
              <div class="icon"></div>
              <div class="itemName" v-for="(it, index) in item" :key="index">
                <span class="i" v-if="index != 0">/</span>
                <span @click="serchByName(it)" class="name">{{ it }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 轮播图 -->
        <div class="carousel">
          <el-carousel trigger="click" style="height: 342px">
            <el-carousel-item v-for="item in advert" :key="item">
              <img :src="item" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 身份信息 -->
        <div class="userInfo">
          <div class="faceInfo">
            <div class="avatar">
              <img :src="user.avatar" alt="" />
            </div>
            <div class="hello">
              <p>你好!</p>
              <span class="username">{{ user.username }}</span>
            </div>
          </div>
          <div class="orderInfo">
            <div class="item">
              <div class="num">20</div>
              <div class="dec">购物车</div>
            </div>
            <div class="item">
              <div class="num">3</div>
              <div class="dec">待收货</div>
            </div>
            <div class="item">
              <div class="num">2</div>
              <div class="dec">待付款</div>
            </div>
            <div class="item">
              <div class="num">5</div>
              <div class="dec">待评价</div>
            </div>
          </div>
          <div class="likeInfo">
            <div class="item">
              <div class="icon">
                <img src="@/assets/collect.png" alt="" />
              </div>
              <div class="dec">宝贝收藏</div>
            </div>
            <div class="item">
              <div class="icon">
                <img src="@/assets/collectShop.png" alt="" />
              </div>
              <div class="dec">商家收藏</div>
            </div>
            <div class="item">
              <div class="icon">
                <img src="@/assets/shop.png" alt="" />
              </div>
              <div class="dec">买过的</div>
            </div>
            <div class="item">
              <div class="icon">
                <img src="@/assets/mark.png" alt="" />
              </div>
              <div class="dec">我的足迹</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 商品展示 -->
      <div class="bottom">
        <h1>猜你喜欢</h1>
        <div class="list">
            <div class="product" 
            v-for="item in products"
            :key="item.key"
            @click="gotoDetail(item)">
                <div class="image">
                    <img :src="item.img" alt="">
                </div>
                <div class="info">
                    <div class="dec">{{item.dec}}</div>
                    <div class="price">
                        <span>￥{{item.price}}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script >
import topbar from "@/components/TopBar.vue";
import searchbar from "@/components/searchBar.vue"

export default {
  name: "",
  components: {
    topbar,
    searchbar,
  },
  data() {
    return {
      sorts: [
        ["女装", "内衣", "奢品"],
        ["女鞋", "男鞋", "箱包"],
        ["美妆", "饰品", "洗护"],
        ["男装", "运动", "百货"],
        ["手机", "数码", "礼品"],
        ["家装", "电器", "车品"],
        ["食品", "生鲜", "母婴"],
        ["医药", "保健", "进口"],
      ],
      advert: [
        "https://img.alicdn.com/imgextra/i3/6000000004152/O1CN01NBqTd31gXfF629F6d_!!6000000004152-2-octopus.png",
        "https://img.alicdn.com/imgextra/i4/6000000000466/O1CN01JrDvz61FJTLKlOknL_!!6000000000466-2-octopus.png",
        "https://img.alicdn.com/imgextra/i4/6000000001997/O1CN01h6Pl301QcfimQACBD_!!6000000001997-0-octopus.jpg",
        "https://img.alicdn.com/imgextra/i1/6000000002861/O1CN01F7NW371X0NvBVP99i_!!6000000002861-0-octopus.jpg",
        "https://img.alicdn.com/imgextra/i1/6000000004570/O1CN01B0jaUp1jd6nWcaZzU_!!6000000004570-2-octopus.png",
      ],
      user: {
        avatar:
          "https://wwc.alicdn.com/avatar/getAvatar.do?userNick=tb487578808&_input_charset=UTF-8&width=80&height=80&type=sns",
        username: "天狗用户001",
      },
      products:[
        {
            img:'https://gw.alicdn.com/bao/uploaded/i1/179917267/O1CN016Xkm9223YKxfqgeOC_!!179917267.jpg_300x300q90.jpg_.webp',
            dec:'数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带',
            price:'5.8'
        },
        {
            img:'https://gw.alicdn.com/bao/uploaded/i1/179917267/O1CN016Xkm9223YKxfqgeOC_!!179917267.jpg_300x300q90.jpg_.webp',
            dec:'数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带',
            price:'5.8'
        },
        {
            img:'https://gw.alicdn.com/bao/uploaded/i1/179917267/O1CN016Xkm9223YKxfqgeOC_!!179917267.jpg_300x300q90.jpg_.webp',
            dec:'数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带',
            price:'5.8'
        },
        {
            img:'https://gw.alicdn.com/bao/uploaded/i1/179917267/O1CN016Xkm9223YKxfqgeOC_!!179917267.jpg_300x300q90.jpg_.webp',
            dec:'数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带',
            price:'5.8'
        },
        {
            img:'https://gw.alicdn.com/bao/uploaded/i1/179917267/O1CN016Xkm9223YKxfqgeOC_!!179917267.jpg_300x300q90.jpg_.webp',
            dec:'数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带',
            price:'5.8'
        },
        {
            img:'https://gw.alicdn.com/bao/uploaded/i1/179917267/O1CN016Xkm9223YKxfqgeOC_!!179917267.jpg_300x300q90.jpg_.webp',
            dec:'数据线收纳神器魔术贴扎带理线器电脑束线带桌面电线走线固定绑带',
            price:'5.8'
        },
      ],
      num: 1,
    };
  },
  methods: {
    serchByName(it) {
      console.log(it);
    },
    gotoDetail(item){
      console.log(item)
    },
    gotoMe(user){
      console.log(user)
    },
    gotoCart(user){
      console.log(user)
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  
}
body{
  background-color: rgb(234, 232, 235);

}
.home {
  background-color: rgb(234, 232, 235);
  
}
.home .container {
  font-size: 14px;
  background-color: #fff;
  margin: 5px 100px 5px 100px;
  /* height: 100vh; */
  border-radius: 18px;
}
.home .middle {
  display: flex;
}
/* 分类 */
.home .middle .sort {
  background-color: #f7f9fa;
  border-radius: 12px;
  margin: 24px 0 0px 24px;
  padding: 0 24px 0px 24px;
  height: 314px;
}
.home .middle .sort .sName h2 {
  font-size: 18px;
  color: #111;
  letter-spacing: 0;
  line-height: 24px;
  /* float: left; */
  text-align: left;
}
.home .middle .sort .sortItem {
  display: flex;
  margin-top: 10px;
}
.home .middle .sort .sortItem .i {
  margin: 0 14px 0 14px;
}
.home .middle .sort .sortItem span {
  margin: 24px 0px 24px 0px;
}
.home .middle .sort .sortItem .name:hover {
  color: cornflowerblue;
  cursor: pointer;
}
/* 轮播图 */
.home .middle .carousel {
  width: 564px;
  height: 314px;
  overflow: hidden;
  border-radius: 12px;
  margin: 24px;
  display: block;
  visibility: visible;
}
.home .middle .carousel img {
  width: 564px;
  height: 314px;
  display: block;
  border-radius: 12px;
}
.home .el-carousel__container {
  position: relative;
  height: 314px;
}
/* 身份信息 */
.home .middle .userInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 24px;
}
.home .middle .faceInfo {
  display: flex;
}
.home .middle .faceInfo img {
  border-radius: 50px;
  margin-right: 20px;
}
.home .middle .faceInfo .hello {
  text-align: left;
}
.home .middle .faceInfo .hello:hover {
  color: cornflowerblue;
}
.home .middle .userInfo .orderInfo {
  display: flex;
  justify-content: space-around;
}

.home .middle .userInfo .likeInfo{
    display: flex;
  justify-content: space-around;

}
.home .middle .userInfo .likeInfo .item{
    width: 70px;
}
.home .middle .userInfo .likeInfo .item img{
    width: 25px;

}
/* 商品展示 */
.home .bottom .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.home .bottom .list .product{
  display: flex;
  /* flex: 1; */
  width: 31%;
  text-align: left;
  background-color: #f7f9fa;
  padding: 10px;
  margin: 12px 0 12px 0;
  border-radius: 15px;
  cursor: pointer;
}
.home .bottom .product img{
    width: 100px;
    height: 100px;
}
.home .bottom .product .info{
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

}
.home .bottom .product .info .price span{
  font-size: 18px;
  color: cornflowerblue;

}
</style>
