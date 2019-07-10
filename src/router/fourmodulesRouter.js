
export default [
  {
    name: 'modules0',
    path: '/modules0',
    component: () => import('../components/home/components/fourmodules/modules0.vue'),
    meta: {
      title: '领积分',
      cache: false
    }
  },
  {
    name: 'modules1',
    path: '/modules1',
    component: () => import('../components/home/components/fourmodules/modules1.vue'),
    meta: {
      title: '积分换券',
      cache: false
    }
  },
  {
    name: 'modules2',
    path: '/modules2',
    component: () => import('../components/mine/mine.vue'),
    meta: {
      title: '',
      cache: false
    }
  },
  {
    name: 'modules4',
    path: '/modules4',
    component: () => import('../components/home/components/fourmodules/modules4.vue'),
    meta: {
      title: '定制',
      cache: false
    }
  },
  {
    name: 'winnow',
    path: '/winnow',
    component: () => import('../components/home/components/fourmodules/winnow.vue'),
    meta: {
      title: '清凉季 夏凉精选',
      cache: false
    }
  },
  {
    name: 'winnow0',
    path: '/winnow0',
    component: () => import('../components/home/components/fourmodules/winnow0.vue'),
    meta: {
      title: '清凉季 断码清仓',
      cache: false
    }
  },
  {
    name: 'winnow1',
    path: '/winnow1',
    component: () => import('../components/home/components/fourmodules/winnow1.vue'),
    meta: {
      title: '清凉季 平底凉鞋',
      cache: false
    }
  },
  {
    name: 'winnow2',
    path: '/winnow2',
    component: () => import('../components/home/components/fourmodules/winnow2.vue'),
    meta: {
      title: '清凉季 阿迪5折封顶',
      cache: false
    }
  }
]
