<template>
    <div class="home">
        <!-- 头部搜索 -->
        <discoverNav @more='morea' :value="faxian"></discoverNav>
        <!-- 占头部的无内容空间 -->
        <div class="empty"></div>
        <!-- 头部右侧选项按钮效果 -->
        <hide :hide='hide'></hide>
        <!-- 商品展示列表 -->
        <discoverList></discoverList>
    </div>
</template>
<script>
// import discoverNav from './components/discoverNav.vue'
import discoverNav from '@/public/navigation'
import discoverList from './components/discoverList.vue'
// import hide from './components/hide.vue'
import hide from '@/public/hide'
export default {
  data () {
    return {
      bookProductList: [],
      hide: false,
      faxian: '发现'
    }
  },
  methods: {
    morea () {
      this.hide = !this.hide
    }
  },
  created () {
  },
  components: {
    discoverNav,
    discoverList,
    hide
  }
}
</script>
<style scoped>
.home{
  background:#EEEEEE;
}
.empty {
  height: 88px;
}
</style>
