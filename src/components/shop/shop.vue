<template>
  <div class="content">
    <!-- 导航 -->
    <ShopNav @more='morea' :value="shopping"></ShopNav>
    <div class="empty"></div>
    <!-- 选项 -->
    <hide :hide='option'></hide>
    <!-- 内容 -->
    <ShopContent></ShopContent>

  </div>
</template>

<script>
// import ShopNav from './components/shopNav'
import ShopNav from '@/public/navigation'
import ShopContent from './components/shopContent'
import hide from '@/public/hide'
export default {
  data () {
    return {
      shopping: '购物车',
      option: false
    }
  },
  components: {
    ShopNav,
    ShopContent,
    hide
  },
  methods: {
    morea () {
      this.option = !this.option
    }
  }
}
</script>

<style scoped>
.content {
    background: #EEEEEE;
    width: 100%;
    height: 100%;
}
.empty {
  height: 44px;
}
</style>
