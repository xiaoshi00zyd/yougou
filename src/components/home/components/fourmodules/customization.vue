<template>
    <div class="box">
      <!-- 轮播 -->
      <div>
          <swiper :options="swiperOption">
            <swiper-slide v-for="(slide, index) in list.spell" :key="index">
              <router-link :to="{name: slide.name}">
                <img :src='slide.img' alt='' class='pic'>
              </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
      </div>
      <!-- 服务 -->
      <div class="box1">
        <img :src="list.serve.img" alt="">
      </div>
      <!-- 领券 -->
      <div class="box2">
        <img :src="list.draw.img" alt="">
      </div>
      <!-- 可定制品牌 -->
      <div class="box3">
        <h1>{{list.bran.p}}</h1>
        <ul>
          <li v-for="(item,index) in list.brand" :key="index">
            <img :src="item.img" alt="">
          </li>
        </ul>
      </div>
      <!-- 一行 -->
      <div class="box4">
        <h3>{{list.shop.p}}</h3>
        <p>{{list.shop.span}}</p>
      </div>
      <!-- 商品 -->
      <div class="box5" v-for="(item,index) in list.shoppe" :key="index">
        <div class="box4">
          <h3>{{item.p}}</h3>
          <p>{{item.span}}</p>
        </div>
        <ul>
            <li v-for="(itemo, index) in item.list" :key="index">
              <img :src="itemo.img" alt="">
              <h3>{{itemo.p}}</h3>
              <p><span>{{itemo.spanone}}</span><span class="spantwo">{{itemo.spantwo}}</span></p>
              <h5><img :src="itemo.imgo" alt=""><span>{{itemo.spens}}</span></h5>
            </li>
        </ul>
      </div>
    </div>
</template>

<script>
import {getcustomization} from '@/api'
export default {
  props: {

  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: false,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      },
      list: []
    }
  },
  computed: {

  },
  async created () {
    this.list = await getcustomization()
  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .box{
    background: #f5f5f5;
    box-sizing: border-box;
    color: #262626;
    font-size: 28px;
    .swiper-pagination-bullet-active{
          background:#fe0000;
          opacity:0.6;
      }
    .swiper-pagination-bullet{
      width: 10px;
      height: 10px;
    }
    .pic{
      width: 100%;
      vertical-align: bottom;
      cursor: pointer;
    z-index: 100;
    }
    .box1 {
      margin-bottom: 10px;
      background: #fff;
      img {
        display: block;
        width: 100%;
      }
    }

    .box2 {
      margin-bottom: 10px;
      background: #fff;
      img {
        display: block;
        width: 100%;
      }
    }

    .box3 {
      margin-bottom: 10px;
      background: #fff;
      h1 {
        font-size: 28px;
        line-height: 1;
        padding: 30px 30px 3px;
      }
      ul {
        overflow-x: scroll;
        white-space: nowrap;
        li {
          display: inline-block;
          height: 140px;
          line-height: 140px;
          text-align: center;
          width: 160px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .box4 {
      width: 100%;
      display: flex;
      height: 88px;
      justify-content: space-between;
      padding: 0 30px;
      align-items: center;
      box-sizing: border-box;
      background: #fff;
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 10px;
      p {
        color: #888;
      }
    }

    .box5 {
      ul {
        background-color: #f5f5f5;
        display: flex;
        flex-wrap: wrap;
        padding: 5px 15px;
        li {
          background: #fff;
          border: 4px solid #f5f5f5;
          box-sizing: border-box;
          position: relative;
          width: 50%;
          img{
            width: 100%;
          }
          h3 {
             text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            height: 84px;
            font-size: 28px;
            line-height: 42px;
            overflow: hidden;
            padding: 30px 15px 0;
          }
          p {
            color: #eb3323;
            line-height: 1;
            padding: 20px 15px 25px;
            .spantwo {
              color: #bbb;
              margin-left: 20px;
              text-decoration: line-through;
            }
          }
          h5 {
            -webkit-box-align: center;
            align-items: center;
            display: -webkit-box;
            display: flex;
            font-size: 24px;
            padding: 0 15px 15px;
            img {
              margin-right: 10px;
              width: 32px;
            }
          }
        }
      }
    }
  }

</style>
