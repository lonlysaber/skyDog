<template>
  <div class="searchBar">
    <!-- logo -->
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="search">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input v-model="input" placeholder="输入内容搜索"></el-input>
      <el-button type="primary">搜索</el-button>
    </div>
  </div>
</template>

<script >
export default {
  name: "searchBar",
  data() {
    return {
        options:[{
          value: '选项1',
          label: '商品'
        }, {
          value: '选项2',
          label: '商家'
        }],
        value:'商品',
        input:''
    };
  },
};
</script>

<style>
    .searchBar{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin: 10px 0 10px 0;
    }
    .searchBar .logo img{
        width: 100px;
        margin-right: 20px;
    }
    .searchBar .search{
        display: flex;
        align-items: center;
        border: 1px cornflowerblue solid;
        border-radius: 30px;
        width: 700px;
        height: 40px;
        background-color: #FFF;
    }
    .el-input--suffix .el-input__inner{
        border:1px solid #ffffff;
        border-radius: 30px 0 0 30px;
        
    }
    
    .el-button--primary{
        border-radius: 0 30px 30px 0;
    }
</style>
