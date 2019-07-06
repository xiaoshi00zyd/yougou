<template>
  <div class="bp">
      <img class="mytitle" v-lazy="pdlist.titleImg"/>
      <ul class="des">
          <li v-for="(des, index) in pdlist.subtitles" :key="index">
              <span>{{des}}</span>
              <i>&gt;</i>
          </li>
      </ul>
      <!-- 广告图 -->
      <img class="banner" v-lazy="pdlist.banner"/>
      <ul class="book">
          <!-- <li>
            <img v-lazy="pdlist.firstImg" alt="">
          </li> -->
          <li v-for="(book, index) in pdlist.books" :key="index" class="myli">
              <p>{{book.title}}</p>
              <p :style="{color:'#ef2933'}">{{book.yh}}</p>
              <img v-lazy="book.img" alt="">
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pdlist: {
        titleImg: 'http://img61.ddimg.cn/upload_img/00705/yhj/tslc-bt.jpg',
        subtitles: [
          '当当书城',
          '电子书',
          '网络文学'
        ],
        banner: 'http://img63.ddimg.cn/upload_img/00796/1/1242x332_dl_0628-1561712522.jpg',
        books: [
          {
            title: '文字艺术',
            yh: '5折封顶',
            img: 'http://img62.ddimg.cn/upload_img/00702/B/500-500-rshh-1559819355.jpg'
          },
          {
            title: '电子书',
            yh: '每满30减15',
            img: 'http://img62.ddimg.cn/ddreader/dangebook/nzbnn500x500.jpg'
          },
          {
            title: '精选童书',
            yh: '5折封顶',
            img: 'http://img63.ddimg.cn/upload_img/00705/Y/500-500-ts-1552466242.jpg'
          },
          {
            title: '亲子生活',
            yh: '5折封顶',
            img: 'http://img60.ddimg.cn/upload_img/00702/B/500-500-sh-1532346036.jpg'
          },
          {
            title: '人文社科',
            yh: '5折封顶',
            img: 'http://img60.ddimg.cn/upload_img/00705/1/500-500-3.13-sk-5-1520767898.jpg'
          },
          {
            title: '中小学教辅',
            yh: '每满100减50',
            img: 'http://img60.ddimg.cn/upload_img/00705/YHJ/500-500-jf-2-1552467505.jpg'
          },
          {
            title: '科技图书',
            yh: '5折封顶',
            img: 'http://img60.ddimg.cn/upload_img/00705/B/500-500-kj-1556615583.jpg'
          },
          {
            title: '经济管理',
            yh: '5折封顶',
            img: 'http://img61.ddimg.cn/upload_img/00705/Y/500x500-jg-10.9.jpg'
          },
          {
            title: '热门外语',
            yh: '每满100减30',
            img: 'http://img62.ddimg.cn/upload_img/00705/S/500-500-wy-1556617945.jpg'
          }
        ]
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
  .bp {
    .banner {
      margin-top: 10px;
      width: 100%;
    }
    .mytitle {
      width: 100%;
    }
    .des {
      display: flex;
      justify-content: center;
      li {
        margin-right: 8px;
        span {
          font-size: 12px;
          color: #323232
        }
        i {
          width: 16px;
          height: 16px;
          display: inline-block;
          border-radius: 50%;
          background: black;
          color: white;
          font-size: 12px;
          line-height: 14px;
          text-align: center;
        }
      }
    }
    .book {
      display: flex;
      flex-wrap: wrap;
      li {
        text-align: center;
        width: 33%;
        padding-top:8px;
        box-sizing:border-box;
        // border: 1px solid #666;
        &:nth-child(1),&:nth-child(2),&:nth-child(4),&:nth-child(5){
            border-right:1px solid #eff4fa;
            border-bottom:1px solid #eff4fa;
        }
        &:nth-child(3),&:nth-child(6){
            border-bottom:1px solid #eff4fa;
        }
        &:nth-child(7),&:nth-child(8){
            border-right:1px solid #eff4fa;
        }
        img {
          width: 100%
        }
        p {
          font-size: 12px;
          &:first-child {
            color:#323232
          }
        }
      }
    }
  }
</style>
