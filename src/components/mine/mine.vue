<template>
    <div class="content">
      <!-- 头部 -->
      <MineNav></MineNav>
      <div class="dingti"></div>
      <!-- 内容 -->
      <MineContent></MineContent>
    </div>
</template>
<script>
import MineNav from './components/mineNav'
import MineContent from './components/mineContent'
export default {
  data () {
    return {

    }
  },
  components: {
    MineNav,
    MineContent
  }
}

</script>
<style scoped>
/* .content{
  height: 100%;
  width: 100%;
  box-sizing: border-box;
} */
.dingti{
  width: 100%;
  height: 88px;
}
</style>
