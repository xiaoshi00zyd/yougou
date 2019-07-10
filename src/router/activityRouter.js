
export default [
  {
    name: 'Activity1',
    path: '/Activity1',
    component: () => import('../components/home/components/activity/activity1.vue'),
    meta: {
      title: '森达爆款-199元封顶',
      cache: false
    }
  },
  {
    name: 'Activity2',
    path: '/Activity2',
    component: () => import('../components/home/components/activity/activity2.vue'),
    meta: {
      title: '6.23思加图清仓-低至199元',
      cache: false
    }
  }
]
