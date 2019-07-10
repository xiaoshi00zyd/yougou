import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    booksState: [
      {
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
      },
      {
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
      },
      {
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
    ],
    cateList: [
      {
        id: 0,
        title: '图书'
      },
      {
        id: 1,
        title: '童书'
      },
      {
        id: 2,
        title: '电子书'
      },
      {
        id: 3,
        title: '听书'
      },
      {
        id: 4,
        title: '网络文学'
      },
      {
        id: 5,
        title: '创意文具'
      },
      {
        id: 6,
        title: '拍卖/旧书'
      },
      {
        id: 7,
        title: '女装'
      },
      {
        id: 8,
        title: '男装'
      },
      {
        id: 9,
        title: '男女鞋'
      },
      {
        id: 10,
        title: '童装童鞋'
      },
      {
        id: 11,
        title: '内衣配饰'
      },
      {
        id: 12,
        title: '母婴玩具'
      },
      {
        id: 13,
        title: '食品生鲜'
      },
      {
        id: 14,
        title: '美妆个护'
      },
      {
        id: 15,
        title: '手机数码'
      },
      {
        id: 16,
        title: '电脑办公'
      },
      {
        id: 17,
        title: '家用电器'
      },
      {
        id: 18,
        title: '猜您喜欢'
      }
    ]
  },
  actions: {

  },
  mutations: {

  },
  getters: {

  }

})

export default store
