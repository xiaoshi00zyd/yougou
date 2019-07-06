<template>
    <div class='box'>
        <!-- 头部搜索框 -->
        <homeheader></homeheader>
        <!-- 轮播 -->
        <carousel></carousel>
        <!-- 四大模块 -->
        <fourmodules></fourmodules>
        <!-- 热门分类 -->
        <hot></hot>
        <!-- 限时秒杀 -->
        <seckill></seckill>
        <!-- 精选活动 -->
        <activity></activity>
    </div>
</template>
<script>
import homeheader from './components/homeheader'
import carousel from './components/carousel'
import fourmodules from './components/fourmodules'
import hot from './components/hot'
import seckill from './components/seckill'
import activity from './components/activity'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  components: {
    homeheader,
    carousel,
    fourmodules,
    hot,
    seckill,
    activity
  }
}
</script>
<style scoped>
  .box{
    padding-bottom: 60px;
    /* padding-top: 40px; */
  }
</style>
