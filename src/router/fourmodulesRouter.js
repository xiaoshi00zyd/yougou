
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
      title: '登录',
      cache: false
    }
  },
  {
    name: 'modules3',
    path: '/modules3',
    component: () => import('../components/home/components/fourmodules/customization.vue'),
    meta: {
      title: '定制',
      cache: false
    }
  },
  {
    name: 'winnow',
    path: '/winnow',
    component: () => import('../components/home/components/fourmodules/winnow.vue')
  },
  {
    name: 'winnow0',
    path: '/winnow0',
    component: () => import('../components/home/components/fourmodules/winnow0.vue')
  }
]
