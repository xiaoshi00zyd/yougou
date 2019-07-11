// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import store from './store/index'
import './common/mixin'
import '@/assets/reset.css'
import '@/assets/common.css'
import 'swiper/dist/css/swiper.css'
import 'lib-flexible'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/error.png',
  loading: 'static/loading.gif',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
