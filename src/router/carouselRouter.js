
export default [
  {
    name: 'carouselOne',
    path: '/carouselOne',
    component: () => import('../components/home/components/carousel/carouselOne.vue'),
    meta: {
      title: '清凉季 至高减150元',
      cache: false
    }
  },
  {
    name: 'carouselTwo',
    path: '/carouselTwo',
    component: () => import('../components/home/components/carousel/carouselTwo.vue'),
    meta: {
      title: '夏季人气凉鞋 低至1.5折',
      cache: false
    }
  },
  {
    name: 'carouselThree',
    path: '/carouselThree',
    component: () => import('../components/home/components/carousel/carouselThree.vue'),
    meta: {
      title: '运动热力单品 78元起',
      cache: false
    }
  }
]
