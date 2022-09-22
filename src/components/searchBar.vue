<template>
  <div class="searchBar">
    <!-- logo -->
    <div class="logo">
      <img src="@/assets/logo.png" @click="gotoHome" alt="" />
    </div>
    <div class="search">
      <el-select v-model="select" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input
        v-model="input"
        placeholder="输入内容搜索"
        
      ></el-input>
      <el-button type="primary" @click="toSearch"
      v-track="{
          triggerType: 'click',
          currentUrl: $route.path,
          searchKeyword: input,
          actionType: 'search-click',
        }">搜索</el-button>
    </div>
  </div>
</template>

<script >
export default {
  name: "searchBar",
  props: ["sel", "ipt"],
  data() {
    return {
      options: [
        {
          value: "商品",
          label: "商品",
        },
        {
          value: "商家",
          label: "商家",
        },
      ],
      select: this.sel || "商品",
      input: this.ipt,
    };
  },

  methods: {
    gotoHome() {
      this.$router.push("/");
    },
    toSearch() {
      console.log(this.select, this.input, this.$route.path);
      let that = this;
      // 子组件传值给父组件
      // 搜索栏 --> 搜索页面
      this.$emit("changeInput", this.input);
      this.$router.push({
        path: "/search",
        query: {
          select: this.select,
          input: this.input,
        },
      });
    },
  },
};
</script>

<style>
.searchBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0 10px 0;
}
.searchBar .logo img {
  width: 100px;
  margin-right: 20px;
}
.searchBar .logo img:hover {
  cursor: pointer;
}
.searchBar .search {
  display: flex;
  /* flex:1; */
  align-items: center;

  border: 1px cornflowerblue solid;
  border-radius: 30px;
  width: 700px;
  height: 42px;
  background-color: #fff;
}
.searchBar .search .el-input--suffix .el-input__inner {
  border: 1px solid #ffffff;
  border-radius: 30px 0 0 30px;
}
.searchBar .search .el-select:hover .el-input__inner {
  border: 1px solid #ffffff;
}
.searchBar .search .el-select:acitve .el-input__inner {
  border: 1px solid #ffffff;
}

.searchBar .search .el-button--primary {
  border-radius: 0 30px 30px 0;
}
.searchBar .search .el-input__inner {
  border: 1px solid #fff;
}
</style>
