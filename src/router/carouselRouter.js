
export default [
  {
    name: 'carouselOne',
    path: '/carouselOne',
    component: () => import('../components/home/components/carousel/carouselOne.vue'),
    meta: {
      title: '清凉季 至高减150元'
    }
  },
  {
    name: 'carouselTwo',
    path: '/carouselTwo',
    component: () => import('../components/home/components/carousel/carouselTwo.vue')
  }
]
