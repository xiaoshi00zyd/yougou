<template>
  <div class="content">
    <!-- 导航 -->
    <ShopNav></ShopNav>
    <!-- 内容 -->
    <ShopContent></ShopContent>
    <!-- 测试 -->
    <Test></Test>
  </div>
</template>

<script>
import ShopNav from './components/shopNav'
import ShopContent from './components/shopContent'
import Test from './components/test'
export default {
  data () {
    return {

    }
  },
  components: {
    ShopNav,
    ShopContent,
    Test
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
