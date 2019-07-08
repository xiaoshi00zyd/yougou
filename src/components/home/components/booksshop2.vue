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
      <!-- <img class="banner" v-lazy="pdlist.banner"/> -->
      <ul class="book">
          <li>
            <img v-lazy="pdlist.firstImg" alt="">
          </li>
          <li v-for="(book, index) in pdlist.books" :key="index" class="myli">
              <p>{{book.title}}</p>
              <p :style="{color:'#e62469'}">{{book.yh}}</p>
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
        titleImg: 'http://img63.ddimg.cn/upload_img/00528/000/00000000-1543886897.jpg',
        subtitles: [
          '每日00:00上新'
        ],
        firstImg: 'http://img63.ddimg.cn/upload_img/00528/000/0000000-1561722752.jpg',
        banner: 'http://img63.ddimg.cn/upload_img/00796/1/1242x332_dl_0628-1561712522.jpg',
        books: [
          {
            title: '匡威童鞋',
            yh: '秒杀低至139元',
            img: 'http://img62.ddimg.cn/upload_img/00628/dangdang/500-500-1561704405.jpg'
          },
          {
            title: '美乐蜡笔',
            yh: '5折秒杀',
            img: 'http://img59.ddimg.cn/79140053559849_y.jpg'
          },
          {
            title: '自营文具',
            yh: '5折封顶',
            img: 'http://img61.ddimg.cn/upload_img/00609/mao/61881963-1_o_meitu_1-1562051579.jpg'
          },
          {
            title: '第一户外',
            yh: '皮肤衣低至59元',
            img: 'http://img58.ddimg.cn/91760119390328_y.jpg'
          },
          {
            title: '金稻美容仪',
            yh: '全场低至69元',
            img: 'http://img57.ddimg.cn/193840054029607_y.jpg'
          },
          {
            title: '教辅特惠',
            yh: '2.9折起',
            img: 'http://img62.ddimg.cn/upload_img/00754/suishiqi/wuxianzhongxiaoxue-1538287801.jpg'
          },
          {
            title: '童书特惠',
            yh: '1.9折起',
            img: 'http://img60.ddimg.cn/upload_img/00678/zsts/wphwx180611-1528703106.jpg'
          },
          {
            title: '文艺特惠',
            yh: '2.9折起',
            img: 'http://img63.ddimg.cn/upload_img/00754/suishiqi/wenyisheke-1543217150.jpg'
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
      margin-top:10px;
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
