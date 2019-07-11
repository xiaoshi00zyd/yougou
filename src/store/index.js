import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: '首页'
  },
  mutations: {
    setTitle (state, title) {
      state.title = title
      document.title = title
    }
  },
  actions: {
    setTitleFn (context, title) {
      context.commit('setTitle', title)
    }
  },
  getters: {

  }

})

export default store
