<template>
    <div class="db">
        <img @click='toTop' v-if="isShow" src='../imgs/top.png' ref='top' class='top'>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    toTop () {
      scrollTo(0, 0)
    }
  },
  mounted () {
    $(window).scroll(() => {
      this.isShow = $(document).scrollTop() > 550
    })
  }
}
</script>

<style scoped lang='less'>
    .db{
      width: 100%;
    }
    .top{
        width: 80px;
        height: 80px;
        position:fixed;
        bottom: 116px;
        right: 40px;
        z-index: 11;
        opacity: 0.7;
    }
</style>
