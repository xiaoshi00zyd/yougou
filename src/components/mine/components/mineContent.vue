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
        <!-- -->
        <div>
          <input class="inp1" type="text" placeholder="手机号" v-model="phone"   @focus="show(true)" @blur="find(false)"
         >
          <i class="iconfont icon-qingkong mark" ref="phonenum" v-show="phoneisShow" @mousedown="clearphone($event)"></i>
          <i  class="Verification">获取验证码</i>
        </div>
        <div>
          <input class="inp2" type="text" placeholder="请输入验证码" v-model="proving"  @focus="show(false,true)" @blur="find(false,false)">
          <i class="iconfont icon-qingkong verifimark" v-show="checking" @mousedown="clearproving($event)"></i>
        </div>
      </div>
    </div>

    <!-- 账号密码登录 -->
    <div class="AccountSign" v-show="accountshow">
        <input class="inp1" type="text" v-model="phonecontent" placeholder="手机号/邮箱" @focus="show(true)" @blur="find(false)">
        <a href="javascript:void;" class="iconfont icon-qingkong  phoneaccount" v-show="phoneisShow" @touchstart="qingkong"></a>
        <input class="inp1" v-if="eye" type="password" placeholder="密码" v-model="content" @focus="show(false,true)" @blur="find(false,false)">
        <a href="javascript:;" class="iconfont icon-qingkong verifimark account" @touchstart="pasqingkong" v-show="checking" ></a>
        <a href="javascript:;" v-if="eye" class="iconfont icon-biyan verifimark glasses"   @click="showPassword($event,false,true)"></a>
        <a href="javascript:;" v-if="passshow" class="iconfont icon-zhengyan verifimark glasses" @click="showPassword($event,true,false)"></a>
        <input class="inp1" type="text" v-if="passshow" placeholder="密码" v-model="content" @focus="show(false,true)" @blur="find(false,false)">
    </div>
    <!-- 按钮 -->
      <button class="sign" v-show="phoneshow" :class="{SubmitBtn:changecolor}">登录</button>
      <button class="sign" v-show="accountshow" :class="{SubmitBtn:psdcolor}">登录</button>
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
      phonecontent: '',
      phone: '',
      proving: '',
      changecolor: false,
      psdcolor: false
    }
  },
  updated () {
    // 对文本框的值进行判断如果为空 则颜色不变  如果两个其中一个为空 就不为FALSE
    if (this.phone !== '' && this.proving !== '') {
      this.changecolor = true
    } else if (this.phone === '' || this.proving === '') {
      this.changecolor = false
    }
    if (this.phonecontent !== '' && this.content !== '') {
      this.psdcolor = true
    } else if (this.phonecontent === '' || this.content === '') {
      this.psdcolor = false
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
      // await setInterval(() => {
      //   this.phoneisShow = arg1
      //   this.checking = vul
      // }, 250)
      this.phoneisShow = arg1
      this.checking = vul
    },
    showPassword (event, c1, c2) {
      this.eye = c1
      this.passshow = c2
      this.aaa = c1
      event.target.previousElementSibling.focus()
    },
    clearphone (event) {
      console.log('奥德赛发发')
      this.phone = ''
      this.phoneisShow = true
      event.target.previousElementSibling.focus()
    },
    qingkong (event) {
      this.phonecontent = ''
      event.target.previousElementSibling.focus()
    },
    pasqingkong (event) {
      this.content = ''
      event.target.previousElementSibling.focus()
    },
    clearproving (event) {
      this.proving = ''
      event.target.previousElementSibling.focus()
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
  padding: 20px;
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
  font-size: 28px;
  border-bottom: 2px solid #d9d9d9;
  cursor: pointer;
}
.top .left {
  width: 50%;
  text-align: center;
  height: 72px;
  line-height: 72px;
  border-bottom: 2px solid #ff4664;
  color: #ff4664;
}
.top .right {
  width: 50%;
  text-align: center;
  height: 72px;
  line-height: 72px;
}
.center {
  width:100%;
  /* height:347px; */
  position: relative;
}
input::-webkit-input-placeholder{
  color:#d9d9d9;
}
.inp1::before {
  content: "\e64c";
  display: block;
  font-family:'FontAwesome';
  font-size: 32px;
}
.inp1 {
  width: 100%;
  height: 90px;
  border: none;
  border-bottom: 2px solid #d9d9d9;
  /* position: relative; */
}
.center .cenTop2 {
  height: 100%;
}
.center .inp2 {
  width: 100%;
  border: none;
  height: 90px;
  line-height: 90px;
  border-bottom: 2px solid #d9d9d9;
}
.cenTop .Verification {
  width: 186px;
  height: 60px;
  font-size: 26px;
  position: absolute;
  top: 10px;
  /* left: 150%; */
  right: 2%;
  color: #333;
  line-height: 60px;
  text-align: center;
  border-left: 2px solid #d9d9d9;
}
.mark{
  font-size: 32px;
  text-decoration: none;
  color:gray;
  position: absolute;
  top:24px;
  left: 138%;
}
.verifimark{
  font-size: 32px;
  text-decoration: none;
  color:gray;
  position: absolute;
  top:120px;
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
  font-size: 32px;
  text-decoration: none;
  color:gray;
  position: absolute;
  top:24px;right: 0
}
.account{
  left: 82%;
}
.glasses{
  font-size: 60px;
  line-height: 46px;
}
.aglasses{
  font-size: 100px;
  position: absolute;
  top: 600px;
}
.zhengyanglasses{
  font-size: 100px;
  position: absolute;
  top: 600px;
}
.sign{
            width: 100%;
            margin-top: 60px;
            padding: 0;
            background: #999;
            color: #fff;
            height: 88px;
            line-height: 60px;
            font-size: 32px;
            border: 0;
    }
    .SubmitBtn {
    background: #ff4664;
    }
</style>
