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
        loop: false,
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
    }
</style>
