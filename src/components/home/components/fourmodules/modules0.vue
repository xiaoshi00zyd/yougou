<template>
  <div class="sign">
    <!-- 顶部 -->
    <div class="search1">
        <img class="img1" src="../../../shop/imgs/leftarrow.png" alt="" @click="changeone">
          <div>
            <h2 class="title">领积分</h2>
          </div>
        <img class="img2" @click="fen" src="../../../shop/imgs/options.png" alt="">
    </div>
    <div class="box"></div>
    <Hide v-show="fenone"></Hide>
    <!-- 黄色部分 -->
    <div class="yellow">
      <!-- 我的积分 -->
      <div class="myScore">
        <a href="">我的积分<br>
        <em id="myScoreCount">-</em>
        </a>
      </div>
      <div class="signRule">签到规则</div>
      <div class="signCount">
        <a href=""><span>签到</span>连续0天</a>
      </div>
      <ul class="signDay clearfix">
        <li><em></em><span><b>+5</b></span><i>7.10</i></li>
        <li><em></em><span><b>+10</b></span><i>7.11</i></li>
        <li><em></em><span><b>+15</b></span><i>7.12</i></li>
        <li><em></em><span><b>+20</b></span><i>7.13</i></li>
        <li><em></em><span><b>+25</b></span><i>7.14</i></li>
      </ul>
    </div>
  </div>

</template>

<script>
import Hide from '../../../../public/hide'
export default {
  props: {

  },
  data () {
    return {
      fenone: false
    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {
    fen () {
      this.fenone = !this.fenone
    },
    changeone () {
      this.$router.go(-1)
    }
  },
  components: {
    Hide
  }
}
</script>

<style scoped lang="less">
.search1 {
    position: absolute;
    z-index: 9999;
    background: white;
    height: 88px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    /* 两边对齐 */
    justify-content: space-between;
    /* 上下居中 */
    align-items: center;
}
.search1 .img1 {
    width: 52px;
    height: 52px;
}
.search1 div {
    flex: 1;
    /* background: #E8ECF0; */
    height: 64px;
    /* border-radius: 16px; */
    display: flex;
    align-items: center;
    margin: 0 16px;
}
.search1 div .title {
  font-size: 36px;
  text-align: center;
  width: 100%;
  margin-left: 40px;
}
.search1 .img2 {
    width: 60px;
    height: 60px;
}
.box {
  height: 88px;
  width: 100%;
}
.yellow {
  box-sizing: border-box;
  padding:22px 0 11px;
  background:#FFCF44 url('https://m.yougou.com/images/memberCenter/signbg.png');
  background-size:cover;
  position: relative;
  clear:both;
  .myScore {
    width: 120px;
    height: 88px;
    font-size: 30px;
    text-align: center;
    margin-left: 40px;
    a {
      color: #fff;
      em {
        color: #F77B79;
        font-weight: bold;
      }
    }
  }
  .signRule {
    float: right;
    font-size: 30px;
    color: #fff;
    position: relative;
    right: 40px;
    top: -85px;
  }
  .signCount{
    width:160px;
    height:160px;
    border-radius:164px;
    text-align: center;
    margin:0 38%;
    top: -60px;
    position: relative;
    margin-bottom: 40px;
    border:20px solid rgba(255,255,255,.5);
    position: relative;
    overflow: hidden;
    a{
      display:block;
      height:100%;
      color:#fff;
      font-size: 22px;
      background:#F77B79;
      span{
        display:block;
        padding:24px 0 12px;
        font-size: 32px;
        font-weight:bold;
        width:70%;
        margin:0 auto;
        border-bottom:1px solid #fa9767;
        margin-bottom: 10px;
      }
    }
  }
  .signDay{
    width:100%;
    position: relative;
    display:block;
    height: 100px;
    margin-top: -60px;
  }
  .signDay li{
    width:20%;
    position: relative;
    overflow: hidden;
    color:#9d9d9d;
    float: left;
    box-sizing:border-box;
  }
  .signDay li span{
    display:block;
    color:#5C5F68;
    width:50px;
    height:50px;
    line-height:0px;
    text-align:center;
    border-radius:50px;
    border:1px solid #eee;
    position: relative;
    z-index:10;
    margin:0 auto;
    font-size: 20px;
    box-sizing:border-box;
  }
  .signDay li span b{
    display:block;
    width:100%;
    height:100%;
    border:1px solid #fedd81;
    border-radius:50px;
    box-sizing:border-box;
    background:#fff;
    padding-top:20px;
  }
  .signDay li em{
    content:'';
    width:100%;
    height:4px;
    background:#fff;
    position: absolute;
    top:24px;
    z-index:9;
  }
  .signDay li i{
    display: block;
    text-align: center;
    font-style: normal;
    padding-top: 10px;
    color:#5C5F68;
  }
}
</style>
