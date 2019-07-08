<template>
    <div>
        <h2>
            为你推荐
        </h2>
        <ul>
            <router-link to="/home/recommendNew" tag="li">新品</router-link>
            <router-link to="/home/recommendFavorable" tag="li">钜惠</router-link>
            <router-link to="/home/recommendPopularity" tag="li">人气</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import recommendNew from './recommendNew'
import recommendFavorable from './recommendFavorable'
import recommendPopularity from './recommendPopularity'
Vue.use(Router)
let router = new Router({
  routes: [
    {path: '/home', component: recommendNew},
    {path: '/home/recommendNew', name: 'recommendNew', component: recommendNew},
    {path: '/home/recommendFavorable', name: 'recommendFavorable', component: recommendFavorable},
    {path: '/home/recommendPopularity', name: 'recommendPopularity', component: recommendPopularity}
  ]
})
export default {
  data () {
    return {

    }
  },
  router,
  methods: {

  }
}
</script>

<style scoped lang='less'>

</style>
