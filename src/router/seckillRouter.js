
export default [
  {
    name: 'seckill0',
    path: '/seckill0',
    component: () => import('../components/home/components/seckill/seckill0.vue'),
    meta: {
      title: '大牌秒杀专场',
      cache: false
    }
  },
  {
    name: 'seckill1',
    path: '/seckill1',
    component: () => import('../components/home/components/seckill/seckill1.vue'),
    meta: {
      title: '男女鞋',
      cache: false
    }
  },
  {
    name: 'seckill2',
    path: '/seckill2',
    component: () => import('../components/home/components/seckill/seckill2.vue'),
    meta: {
      title: '领积分',
      cache: false
    }
  }
]
