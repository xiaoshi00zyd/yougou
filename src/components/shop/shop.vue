<template>
  <div class="content">
    <!-- 导航 -->
    <ShopNav></ShopNav>
    <!-- 内容 -->
    <ShopContent></ShopContent>
  </div>
</template>

<script>
import ShopNav from './components/shopNav'
import ShopContent from './components/shopContent'
export default {
  data () {
    return {

    }
  },
  components: {
    ShopNav,
    ShopContent
  }
}
</script>

<style scoped>
.content {
    background: #EEEEEE;
    width: 100%;
    height: 100%;
}
</style>
