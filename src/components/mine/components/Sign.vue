<template>
  <div class="my">

      <!-- <p > -->
          <div class="abcd">
              <span  class="fast" v-show="show">新会员限时惊喜 首次登录送百元礼包</span>
            <a href="javascript:;"  class="wjpassword" v-show="find">忘记密码?</a>
          </div>
    <div class="interface">
        <div class="hd" :style ="note">
            <span>第三方平台登录</span>
        </div>
        <div class="cooperation">
            <ul>
                <li><a href=""><img src="../imgs/QQ.png" alt=""></a></li>
                <li><a href=""><img src="../imgs/zhifubao.png" alt=""></a></li>
                <li><a href=""><img src="../imgs/xinlang.png" alt=""></a></li>
            </ul>
            <div style="position: relative; padding-top: 20px;" class="baijia">
                <span style="color:#747474;">首次登录表示您同意</span>
                <a style="text-decoration:underline;color:#FF4563;" href="http://m.yougou.com/help/detail/registeragreement.sc">优购会员注册协议</a>
            </div>
        </div>
    </div>
    <div class="ensure">
        <i class="iconfont icon-duigou"></i>
        <span>正品保障</span>
        <i class="iconfont icon-duigou"></i>
        <span>10天退货</span>
       <i class="iconfont icon-duigou"></i>
        <span>10天补差价</span>
    </div>
  </div>
</template>

<script>

export default {
  props: ['show', 'find'],
  data () {
    return {
      note: {
        backgroundImage: 'url(' + require('../imgs/point.png') + ')',
        // backgroundSize: '25px auto',
        marginTop: '90px',
        backgroundPosition: 'left center',
        backgroundRepeat: 'repeat-x'
      },
      val: '',
      val1: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped >

    .wjpassword{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-top: 5px;
        box-sizing: border-box;
        text-decoration: none;
        color: #666;
        font-size: 13px;
    }
    .fast{
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 5px;
        box-sizing: border-box;
        font-size: 12px;
        color: #ff4664;
    }
    .hd{
        display: flex;
        justify-content: center;
        margin: 0 30px;
    }
    .hd span{
        background: #fff;
        display: inline-block;
        padding: 0 6px;
        font-size: 10px;
        text-align: center;
        color: #a0a0a0;
    }
    .cooperation ul{
        list-style: none;
        display:flex;
        justify-content: space-evenly;
        padding-top: 20px;
        box-sizing: border-box;
    }
    .cooperation ul li img{
        width: 38px;
        height: 38px;
    }
    .baijia{
        display: flex;
        justify-content: center;
        font-size: 12px;
    }
    .ensure{
        color:#666;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
    }
    .ensure i{
        font-size: 10px;
        padding-left: 40px;
    }
    .abcd{
        width: 100%;
        height: 50px;
    }
</style>
