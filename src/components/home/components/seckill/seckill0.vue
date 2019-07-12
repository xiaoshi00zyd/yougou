<template>
    <div>
        <div class="search1">
            <img class="img1" src="../../../../public/imgs/back.png" alt="" @click="$router.back(-1)">
            <div>
                <h2 class="title">大牌秒杀专场</h2>
            </div>
            <img class="img2" src="../../../../public/imgs/option.png" alt="" @click="change">
        </div>
        <div class="test"></div>
        <hide v-show="isShow" class="show"></hide>
        <img :src="data.banner" class="img3">
        <div class="box_2">距离结束仅剩：3天</div>
        <div class="box_3">百丽-品牌秒杀</div>
        <ul class="oul">
            <li v-for="(item,index) in data.content" :key="index">
                <img :src="item.src">
                <p>{{item.txt}}</p>
                <span>热销指数{{item.hotNum}}</span>
                <h3>￥{{item.newprice}}</h3>
                <h4>￥{{item.oldprice}}</h4>
                <div class="box_4">马上抢</div>
            </li>
        </ul>
    </div>
</template>

<script>
import hide from '../../../../public/hide.vue'
import {getClassHomeSeckill} from '@/api'
export default {
  data () {
    return {
      bigList: [],
      data: {},
      isShow: false
    }
  },
  components: {
    hide
  },
  methods: {
    goback () {
      this.$router.push('/home')
    },
    change () {
      this.isShow = !this.isShow
    }
  },
  async created () {
    this.bigList = await getClassHomeSeckill()
    this.data = this.bigList[0].seckill0
  }
}
</script>

<style scoped lang='less'>
    .search1 {
    position: absolute;
    z-index: 9999;
    background: #f8f8f8;
    height: 88px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    /* 两边对齐 */
    justify-content: space-between;
    /* 上下居中 */
    align-items: center;
    clear: both;
}
.search1 .img1 {
    width: 32px;
    height: 40px;
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
.search1 div a {
  display: inline-block;
  width: 82px;
  height: 60px;
  padding-top: 28px;
  line-height: 40px;
  font-size: 24px;
  color: black;
}
.search1 .img2 {
    width: 40px;
    height: 30px;
}
.test{
    height: 90px;
}
.img3{
    width: 100%;
}
.box_2{
    width: 100%;
    height: 50px;
    margin-top: -10px;
    background: #323232;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 28px;
}
.box_3{
    width: 100%;
    height: 100px;
    font-size: 40px;
    border-bottom: 2px solid #ebebeb;
    text-align: center;
    line-height: 100px;
}
.oul{
    li{
        border-bottom: 2px solid #ebebeb;
        padding-bottom: 30px;
        img{
            width: 35%;
            margin-left: 40px;
        }
        p{
            display: block;
            width: 400px;
            font-size: 32px;
            float: right;
            margin-top: 40px;
        }
        span{
            display: block;
            width: 200px;
            height: 40px;
            background: #ffcad3;
            float: right;
            color: #ff7c92;
            text-align: center;
            line-height: 40px;
            border: 2px solid #ff7c92;
            border-radius: 20px;
            margin-top: -80px;
            margin-right: 200px;
        }
        h3{
            font-size: 34px;
            margin-left: 350px;
            margin-top: -20px;
        }
        h4{
            font-size: 24px;
            color: #d5d5d5;
            text-decoration: line-through;
            margin-left: 470px;
            margin-top: -35px;
        }
        div{
            width: 130px;
            height: 40px;
            background: #ff4664;
            text-align: center;
            line-height: 40px;
            color: #fff;
            font-size: 28px;
            margin-left: 580px;
            margin-top: 20px;
        }
    }

}
</style>
