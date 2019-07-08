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
        border: 7px solid #f6f6f6;
        padding-bottom: 20px;
        .myh2{
            display: inline-block;
            width: 100%;
            height: 30px;
            line-height: 40px;
            padding-left: 10px;
            box-sizing: border-box;
        }
        .myul{
            display: flex;
            flex-direction: row;
            margin-top: 10px;
            height: 30px;
            border-bottom: 1px solid #f6f6f6;
            li{
                width: 25%;
                text-align: center;
                font-size: 14px;
            }
        }
        .myli{
            text-align: center;
            span{
                display: block;
                background: #333333;
                color: #e6e6e6;
                border-radius: 15px;
                font-size: 16px;
                img{
                    width: 12px;
                }
            }
        }
    }
    .router-link-active{
        color: red;
        text-decoration:underline;
    }
</style>
