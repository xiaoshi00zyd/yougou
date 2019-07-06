<template>
    <div class="brand" v-if='brandlist && brandlist.length > 0'>
        <img style="width:100%" v-lazy='src'>
        <swiper :options="swiperOption" style="height:150px;">
            <swiper-slide v-for="(slide, index) in brandlist" :key="index">
                <ul class="ul">
                    <li class="liitem" v-for="(item, ind) in slide" :key="ind">
                      <a class="olink">
                        <img :src="item" alt="">
                      </a>
                    </li>
                </ul>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  data () {
    return {
      src: 'http://img61.ddimg.cn/upload_img/00528/000000/biaoti-101-1523330132.jpg',
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
      brandlist: [
        [
          'http://img50.ddimg.cn/91760119401870_y.jpg',
          'http://img52.ddimg.cn/91760119401872_y.jpg',
          'http://img51.ddimg.cn/91760119509091_y.jpg',
          'http://img56.ddimg.cn/91760119509096_y.jpg',
          'http://img58.ddimg.cn/91760119509098_y.jpg',
          'http://img57.ddimg.cn/91760119401877_y.jpg',
          'http://img58.ddimg.cn/91760119401878_y.jpg',
          'http://img52.ddimg.cn/91760119509102_y.jpg',
          'http://img53.ddimg.cn/91760119509103_y.jpg',
          'http://img55.ddimg.cn/91760119509105_y.jpg'
        ],
        [
          'http://img57.ddimg.cn/157400049501917_y.jpg',
          'http://img58.ddimg.cn/198970062145778_y.png',
          'http://img60.ddimg.cn/upload_img/00757/kaixueji/handu-1550815310.png',
          'http://img63.ddimg.cn/upload_img/00774/kaixueji/361-tong-1535964007.png',
          'http://img50.ddimg.cn/183370059141590_y.png',
          'http://img55.ddimg.cn/198970062145775_y.png',
          'http://img63.ddimg.cn/upload_img/00538/1/jinridapai-1528452773.png',
          'http://img61.ddimg.cn/upload_img/00657/3/361-1534239834.png',
          'http://img62.ddimg.cn/upload_img/00528/0000/1-123-1521800197.png',
          'http://img63.ddimg.cn/upload_img/00271/jiangyan/LOGO-0906-1536052319.png'
        ],
        [
          'http://img63.ddimg.cn/upload_img/00774/kaixueji/minibala-1535352706.png',
          'http://img62.ddimg.cn/upload_img/00774/kaixueji/huili-1535964449.png',
          'http://img52.ddimg.cn/209270051643282_y.jpg',
          'http://img50.ddimg.cn/178320091430740_y.jpg',
          'http://img55.ddimg.cn/74510038064745_y.jpg',
          'http://img62.ddimg.cn/upload_img/00783/1/logo-1561427564.jpg',
          'http://img61.ddimg.cn/upload_img/00727/147/qipilang-1561430730.jpg',
          'http://img54.ddimg.cn/214660118777004_y.png',
          'http://img60.ddimg.cn/upload_img/00727/147/hailanzhijai-1561430702.jpg',
          'http://img50.ddimg.cn/178320091247580_y.png'
        ]
      ]
    }
  }
}
</script>

<style scoped>
    .brand ul{
      display: flex;
      flex-wrap: wrap;
    }
    .olink{
      width: 100%;
    }
    .brand ul li img{
      width: 100%;
    }
    .brand ul li{
        display:flex;
        width:20%;
    }
</style>
