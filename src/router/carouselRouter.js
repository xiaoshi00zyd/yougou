
export default [
  {
    name: 'carouselOne',
    path: '/carouselOne',
    component: () => import('../components/home/components/carousel/carouselOne.vue')
  },
  {
    name: 'carouselTwo',
    path: '/carouselTwo',
    component: () => import('../components/home/components/carousel/carouselTwo.vue')
  }
]
