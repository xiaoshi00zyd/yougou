<template>
    <div class="big">
        <h2 class="myh2">
            为你推荐
        </h2>
        <ul class="myul" ref="myul">
            <li @click="baChange($event)" id="0" class="oli router-link-active">新品</li>
            <li @click="baChange($event)" id="1" class="oli">钜惠</li>
            <li @click="baChange($event)" id="2" class="oli">人气</li>
            <li class="myli" @click="listChange"><span><img src="../imgs/exchange.png">换一换</span></li>
        </ul>
        <recommendList :showNum='this.showNum' :showList='this.showList'></recommendList>
    </div>
</template>

<script>
import recommendList from './recommendList'
import $ from 'jquery'
export default {
  data () {
    return {
      isColor: true,
      showNum: '0',
      showList: false
    }
  },
  methods: {
    baChange (event) {
      this.showNum = event.target.id
      this.showList = false
      $(event.target).addClass('router-link-active').siblings().removeClass('router-link-active')
    },
    listChange () {
      this.showList = !this.showList
    }
  },
  components: {
    recommendList
  }
}
</script>

<style scoped lang='less'>
    .big{
        border: 14px solid #f6f6f6;
        padding-bottom: 40px;
        .myh2{
            display: inline-block;
            width: 100%;
            height: 60px;
            line-height: 80px;
            padding-left: 20px;
            box-sizing: border-box;
            font-size: 32px;
        }
        .myul{
            display: flex;
            flex-direction: row;
            margin-top: 20px;
            height: 60px;
            border-bottom: 2px solid #f6f6f6;
            li{
                width: 25%;
                text-align: center;
                font-size: 28px;
            }
        }
        .myli{
            text-align: center;
            span{
                display: block;
                background: #333333;
                color: #e6e6e6;
                border-radius: 30px;
                font-size: 28px;
                img{
                    width: 24px;
                }
            }
        }
    }
    .router-link-active{
        color: red;
        text-decoration:underline;
    }
</style>
