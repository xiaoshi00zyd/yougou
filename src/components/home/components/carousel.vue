<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src='slide' alt='' class='pic'>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {getHomeBanner} from '@/api'
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      },
      swiperSlides: []
    }
  },
  mounted () {

  },
  async created () {
    this.swiperSlides = await getHomeBanner()
  }
}
</script>
<style>
    /* .swiper-pagination{
        display:flex;
        justify-content:flex-end;
        padding-right:10px;
        box-sizing:border-box;
    } */
    /* .swiper-pagination-bullet{
        border-radius:1px;
        width:2px;
        height:15px;
        background:#666;
        border:1px solid #666;
        opacity:0.2;
        transform:rotateZ(40deg);
    } */

    .swiper-pagination-bullet-active{
        background:#fe0000;
        opacity:0.6;
    }
    .pic{
      width: 100%;
      vertical-align: bottom;
    }
</style>
