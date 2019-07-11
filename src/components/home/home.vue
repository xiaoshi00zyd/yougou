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
        <!-- 品牌专区 -->
        <brand></brand>
        <!-- 回到顶部 -->
        <top></top>
        <!-- 为你推荐 -->
        <recommend></recommend>
        <!-- 底部 -->
        <homefoot></homefoot>
    </div>
</template>
<script>
import homeheader from './components/homeheader'
import carousel from './components/carousel'
import fourmodules from './components/fourmodules'
import hot from './components/hot'
import seckill from './components/seckill'
import activity from './components/activity'
import brand from './components/brand'
import top from './components/top'
import recommend from './components/recommend'
import homefoot from './components/homefoot'
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
    activity,
    brand,
    top,
    recommend,
    homefoot
  }
}
</script>
<style scoped>
  .box{
    padding-bottom: 96px;
    /* padding-top: 40px; */
  }
</style>
