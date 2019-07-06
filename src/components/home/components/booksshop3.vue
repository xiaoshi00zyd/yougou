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
        titleImg: 'http://img61.ddimg.cn/upload_img/00757/shuang11/biaoti-1540452487.jpg',
        subtitles: [
          '服装品牌榜单',
          '服装上新',
          '服装馆'
        ],
        banner: 'http://img51.ddimg.cn/107480069662051_y.jpg',
        books: [
          {
            title: '阿迪达斯童鞋',
            yh: '1件3折',
            img: 'http://img61.ddimg.cn/upload_img/00601/111/adidadi73-1561807031.jpg'
          },
          {
            title: '耐克童鞋',
            yh: '1件3折',
            img: 'http://img62.ddimg.cn/upload_img/00601/111/naike73-1561805089.jpg'
          },
          {
            title: '爆品清仓',
            yh: '99元3双',
            img: 'http://img60.ddimg.cn/upload_img/00601/111/baopin73-1561805089.jpg'
          },
          {
            title: '迪士尼童鞋',
            yh: '99元3双',
            img: 'http://img61.ddimg.cn/upload_img/00601/111/dishini73-1561805146.jpg'
          },
          {
            title: '百丽童鞋',
            yh: '1件3折',
            img: 'http://img62.ddimg.cn/upload_img/00601/111/baili73-1561805089.jpg'
          },
          {
            title: '暇步士童鞋',
            yh: '1件3折',
            img: 'http://img60.ddimg.cn/upload_img/00601/111/xiabushi73-1561805089.jpg'
          },
          {
            title: 'Tata童鞋',
            yh: '1件3折',
            img: 'http://img63.ddimg.cn/upload_img/00601/111/tata73-1561805089.jpg'
          },
          {
            title: 'T-moro童鞋',
            yh: '1件3折',
            img: 'http://img61.ddimg.cn/upload_img/00601/111/tmoro73-1561805089.jpg'
          },
          {
            title: '超级秒杀',
            yh: '低至49元',
            img: 'http://img62.ddimg.cn/upload_img/00601/111/kuangwei73-1561805089.jpg'
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
