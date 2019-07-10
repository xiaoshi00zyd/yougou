import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import classify from '@/components/classify/classify'
import find from '@/components/find/find'
import shop from '@/components/shop/shop'
import mine from '@/components/mine/mine'
import carouselRouter from './carouselRouter'
// 分类下搜索框分支路由
import classifyFoot from './classifyRouter'
// 签到
import fourmodules from './fourmodulesRouter'
// 热门分类
import hot from './hotRouter'
// 限时秒杀
import seckill from './seckillRouter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/recommendNew'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        cache: true,
        title: '首页'
      }
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify,
      meta: {
        title: '分类',
        cache: true
      }
    },
    {
      path: '/find',
      name: 'find',
      component: find,
      meta: {
        title: '发现',
        cache: false
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
      meta: {
        title: '购物车',
        cache: true
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta: {
        title: '我的',
        cache: true
      }
    },
    {
      path: '*',
      redirect: '/home'
    },
    ...carouselRouter,
    ...classifyFoot,
    ...fourmodules,
    ...hot,
    ...seckill
  ]
})
