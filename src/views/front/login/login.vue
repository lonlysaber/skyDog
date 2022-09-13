<template>
  <div class="frontLogin">
    <div class="window">
      <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
        <el-tab-pane label="密码登录" name="first">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input  v-model="form.password"  show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit(form)">登录</el-button>
              <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="手机号登录" name="second">
          <el-form ref="phoneform" :model="phoneform" label-width="80px">
            <el-form-item label="手机号" prop="phone">
              <el-input v-model="phoneform.phone"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="checkKey">
              <el-input maxlength="4" v-model="phoneform.checkKey"></el-input>
              <p class="checkKey">{{checkKey}}</p>
              <el-button v-if="!checkEd" @click="randomKey">获取</el-button>
              <el-button disabled v-if="checkEd">{{this.time}}</el-button>
            </el-form-item>
            <el-form-item style="margin-left:0px">
              <el-button type="primary" @click="onCheck(phoneform)">验证</el-button>
              <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script >
import { Message } from "element-ui";

export default {
  name: "",
  data() {
    return {
      activeName: "first",
      form: {
        username: "",
        password: "",
      },
      phoneform: {
        phone:'',
        checkKey:''
      },
      user: {
        username: "user",
        password: "123",
        phone:'15170292977'
      },
      checkKey:'',
      time:60,
      checkEd:false,
    };
  },
  created() {
    this.randomKey();
    this.$cookies.remove('token')
  },
  methods: {
    onSubmit(form) {
      
      // 登录判断
      if (form.username == "" || form.password == "") {
        this.$message({
          message: "请输入账号和密码",
          type: "error",
        });
        return;
      }
      if (
        form.username != this.user.username ||
        form.password != this.user.password
      ) {
        this.$message({
          message: "账号或密码错误",
          type: "error",
        });
        return;
      }
      if (
        form.username == this.user.username &&
        form.password == this.user.password
      ) {
        this.$message({
          message: "登录成功",
          type: "success",
        });
        this.setCookie();
        this.$router.push("/");
      }
      // console.log(form);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    // 写cookie
    setCookie(){

      this.$cookies.set("token",'test');
      
      console.log(this.$cookies.keys()) ;
    },
    // 防抖
    throttle(cd,time = 1000){
        var t = null;
        return function(){
            if(t)return;
            t = setTimeout(()=>{
                cd.call(this)
                t = null;
            },time)
        }
    },
    randomKey(){
        // 非第一次进入
        if(this.checkKey!=''){
            this.checkEd = true;
            clearInterval(time)
            var time = setInterval(() => {
                if(this.time>0){
                    this.time--
                    // this.checkKey = this.time
                }
                else{
                    this.time = 60
                    this.checkEd = false;
                }
            }, 1000);

        }

        let one = (Math.random()*9).toFixed(0).toString();
        let two = (Math.random()*9).toFixed(0).toString();
        let thr = (Math.random()*9).toFixed(0).toString();
        let four = (Math.random()*9).toFixed(0).toString();

        let key = one+two+thr+four;
        this.checkKey = key;
        this.throttle(function(){
            console.log(key)
        }

        )
    },  
    onCheck(form){
      this.setCookie()
        if(form.phone==''||form.checkKey==""){
            this.$message({
            message: "请输入手机号和验证码",
            type: "error",
            });
            return;
        }
        if(form.checkKey!=this.checkKey){
            this.$message({
            message: "验证码错误",
            type: "error",
            });
            return;
        }
        if(form.phone==this.user.phone&&form.checkKey==this.checkKey){
            this.$message({
            message: "登录成功",
            type: "success",
            });
            this.setCookie();
            this.$router.push("/");
        }
    },
  },
  
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.frontLogin {
  height: 100vh;
  background: url(@/assets/frontLogin.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
}
.frontLogin .window {
  padding: 30px 10px;
  background-color: #fff;
  border:1px gray solid;
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.window .el-tabs {
  width: 500px;
  background-color: #fff;
}
.window .el-input--suffix .el-input__inner {
    border-radius: 0;
}
::v-deep .el-tabs__nav-scroll {
  width: 30% !important;
  margin: 0 auto !important;
}
.window .el-tab-pane:nth-child(2) .el-form .el-form-item:nth-child(2) .el-form-item__content{
    /* border:1px red solid; */
    display:flex;
}
.window .frontLogin .el-button.el-button--primary{
    float: left;
    border-radius: 0;
}
.window .checkKey{
    background-color: black;
    color: #fff;
    margin: 0 5px;
    width: 90px;
}
</style>
