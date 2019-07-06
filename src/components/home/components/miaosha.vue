<template>
  <div class="ms">
    <img v-lazy="src"/>
    <div class="timer">
        <i class="hour">{{timer.h}}</i>
        <span>时</span>
        <i class="minute">{{timer.m}}</i>
        <span>分</span>
        <i class="second">{{timer.s}}</i>
        <span>秒</span>
    </div>
    <!-- 产品 -->
    <div class="mspro">
      <ul class="product" ref="myul">
          <li ref="myli" v-for="(product,index) in productList" :key="index">
              <img v-lazy="product.img"/>
              <p class="content">{{product.content}}</p>
              <p class="nprice">￥{{product.newprice}}</p>
              <p class="oprice">￥{{product.oldprice}}</p>
          </li>
      </ul>
    </div>

  </div>
</template>

<script>
import getTimer from '@/utils/timer.js'
import { setInterval } from 'timers'
export default {
  created () {
    this.timer = getTimer('2019-7-5 16:00')
    setInterval(() => {
      this.timer = getTimer('2019-7-5 16:00')
    }, 1000)
  },
  async mounted () {
    this.$nextTick(() => {
      var liWidth = this.$refs.myli[0].offsetWidth
      var width = liWidth * this.productList.length
      this.$refs.myul.style.width = width + 'px'
    })
  },
  data () {
    return {
      src: 'http://img62.ddimg.cn/upload_img/00707/mobile/mao_title.jpg',
      productList: [
        {
          img: 'http://img3m9.ddimg.cn/96/31/1504689909-1_h_1.jpg',
          content: '1元秒杀，限量抢购，抢完即止！',
          newprice: 1,
          oldprice: 159.00
        },
        {
          img: 'http://img3m2.ddimg.cn/56/9/25242482-1_h_5.jpg',
          content: '狂人日记',
          newprice: 9.9,
          oldprice: 39.80
        },
        {
          img: 'http://img3m9.ddimg.cn/5/16/1430217959-1_h_1.jpg',
          content: '【超值优惠】白色雪纺刺绣连衣裙',
          newprice: 79,
          oldprice: 998.00
        },
        {
          img: 'http://img3m4.ddimg.cn/49/21/1408990324-1_h_1.jpg',
          content: '柔爱轻薄透气婴儿拉拉裤12片体验装',
          newprice: 9.9,
          oldprice: 52.00
        },
        {
          img: 'http://img3m5.ddimg.cn/4/28/1419459925-1_h_1.jpg',
          content: '洽洽 怪味蚕豆180g*2袋',
          newprice: 9.9,
          oldprice: 26.9
        },
        {
          img: 'http://img3m4.ddimg.cn/56/18/1504045874-1_h_1.jpg',
          content: '【买了都说好】推荐:★★★★★ ',
          newprice: 87,
          oldprice: 788.00
        },
        {
          img: 'http://img3m2.ddimg.cn/45/35/25268112-1_h_6.jpg',
          content: '藏在地图里的成语：图书（4册）',
          newprice: 86.2,
          oldprice: 196.00
        }
      ],
      msg: '',
      timer: null
    }
  }
}
</script>

<style scoped lang="less">
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    .ms {
        .mspro {
          width: 100%;
          overflow-x: auto;
          margin-top:10px;
        }
        img {
            width: 100%;
        }
        .timer {
            text-align: center;
            i {
                width: 19px;
                height: 25px;
                display: inline-block;
                background: #323232;
                color: white;
                font-size: 12px;
                border-radius: 5px;
                line-height: 25px;
                text-align: center;
                &:nth-last-of-type(1) {
                    background: #F3344A
                }
            }

            span {
                font-size: 14px;
            }
        }
        .product {
          font-size: 0;
          // width: 820px;
          li {
            width: 106px;
            height: 179px;
            padding: 5px;
            display: inline-block;
            vertical-align: top;
            img {

            }
            .content {
              font-size: 12px;
              height: 28px;
            }
            .nprice {
              font-size: 14px;
              color: #F3344A
            }
            .oprice {
              font-size: 12px;
              color: #D0D0D0;
              text-decoration: line-through
            }
          }
        }
    }

</style>
