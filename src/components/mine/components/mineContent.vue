<template>
  <div class="con">
    <div class="top">
      <div class="top left" ref="aaa" @click="changeColor">
        <span class="call">手机号快捷登录</span>
      </div>
      <div class="top right" ref="bbb" @click="changeColor1">
        <span class="password">账号密码登录</span>
      </div>
    </div>
    <!-- 手机验证码登录 -->
    <div class="center" v-show="phoneshow">
      <div class="cenTop">
          <input class="inp1" type="text" placeholder="手机号"    @focus="show(true)" @blur="find(false)">
          <a href="javascript:;" class="iconfont icon-qingkong mark" v-show="phoneisShow" ></a>
          <a href="javascript:;" class="Verification">获取验证码</a>
          <input class="inp2" type="text" placeholder="请输入验证码"   @focus="show(false,true)" @blur="find(false,false)">
          <a href="javascript:;" class="iconfont icon-qingkong verifimark" v-show="checking" ></a>
    </div>

    <!-- 账号密码登录 -->
    <div class="AccountSign" v-show="accountshow">
        <input class="inp1" type="text" v-model="phonecontent" placeholder="手机号/邮箱" @focus="show(true)" @blur="find(false)">
        <a href="javascript:void;" class="iconfont icon-qingkong  phoneaccount" v-show="phoneisShow" ></a>
        <input class="inp1" v-if="eye" type="password" placeholder="密码" v-model="content" @focus="show(false,true)" @blur="find(false,false)">
        <a href="javascript:;" class="iconfont icon-qingkong verifimark account" v-show="checking" ></a>
        <a href="javascript:;" v-if="eye" class="iconfont icon-biyan verifimark glasses"   @click="showPassword(false,true)"></a>
        <a href="javascript:;" v-if="passshow" class="iconfont icon-zhengyan verifimark glasses" @click="showPassword(true,false)"></a>
        <input class="inp1" type="text" v-if="passshow" placeholder="密码" v-model="content" @focus="show(false,true)" @blur="find(false,false)">
    </div>
    <Sign :show="phoneshow" :find="accountshow"></Sign>
  </div>
</template>

<script>
import Sign from './Sign'
export default {
  data () {
    return {
      phoneisShow: false,
      checking: false,
      phoneshow: true,
      accountshow: false,
      eye: true,
      content: '',
      passshow: '',
      aaa: true,
      phonecontent: ''
    }
  },
  methods: {
    changeColor () {
      this.$refs.aaa.style.borderBottom = '1px solid #ff4664'
      this.$refs.bbb.style.borderBottom = 'none'
      this.$refs.aaa.style.color = '#ff4664'
      this.$refs.bbb.style.color = 'black'
      this.phoneshow = true
      this.accountshow = false
    },
    changeColor1 () {
      this.$refs.aaa.style.borderBottom = 'none'
      this.$refs.bbb.style.borderBottom = '1px solid #ff4664'
      this.$refs.aaa.style.color = 'black'
      this.$refs.bbb.style.color = '#ff4664'
      this.phoneshow = false
      this.accountshow = true
    },
    show (arg1, vul) {
      this.phoneisShow = arg1
      this.checking = vul
    },
    find (arg1, vul) {
      this.phoneisShow = arg1
      this.checking = vul
    },
    showPassword (c1, c2) {
      this.eye = c1
      this.passshow = c2
      this.aaa = c1
      // console.log(c1, c2)
    },
    clear () {
      console.log(1)
      this.content = ''
      this.phonecontent = ''
    }

  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  },
  components: {
    Sign
  }
}
</script>

<style scoped>
.con {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.con a{
  text-decoration: none;
}

.con .top {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 14px;
  border-bottom: 1px solid #d9d9d9;
}
.top .left {
  width: 50%;
  text-align: center;
  height: 36px;
  line-height: 36px;
  border-bottom: 1px solid #ff4664;
  color: #ff4664;
}
.top .right {
  width: 50%;
  text-align: center;
  height: 36px;
  line-height: 36px;
}
.center {
  width:100%;
  /* height:347px; */
  position: relative;
}
input::-webkit-input-placeholder{
  color:#d9d9d9;
}
.inp1 {
  width: 100%;
  height: 45px;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  /* position: relative; */
}
.center .cenTop2 {
  height: 100%;
}
.center .inp2 {
  width: 100%;
  border: none;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #d9d9d9;
}
.cenTop .Verification {
  width: 93px;
  height: 30px;
  font-size: 13px;
  position: absolute;
  top: 5px;
  left: 75%;
  color: #333;
  line-height: 30px;
  text-align: center;
  border-left: 1px solid #d9d9d9;
}
.mark{
  font-size: 16px;
  text-decoration: none;
  color:gray;
  position: absolute;
  top:12px;
  left: 69%;
}
.verifimark{
  font-size: 16px;
  text-decoration: none;
  color:gray;
  position: absolute;
  top:60px;
  right: 0;
}
.AccountSign{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  position: relative;
}
.phoneaccount{
  font-size: 16px;
  text-decoration: none;
  color:gray;
  position: absolute;
  top:12px;right: 0
}
.account{
  left: 82%;
}
.glasses{
  font-size: 30px;
  line-height: 23px;
}
.aglasses{
  font-size: 50px;
  position: absolute;
  top: 300px;
}
.zhengyanglasses{
  font-size: 50px;
  position: absolute;
  top: 300px;
}
</style>
