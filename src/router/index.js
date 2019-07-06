import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import classify from '@/components/classify/classify'
import find from '@/components/find/find'
import shop from '@/components/shop/shop'
import mine from '@/components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
