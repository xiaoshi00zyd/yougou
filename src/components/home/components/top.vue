<template>
    <div class="db">
        <img @click='toTop' v-if="isShow" src='http://touch.m.dangdang.com/images/go-top.png' ref='top' class='top'>
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
      // document.body.scrollTop = 0
      scrollTo(0, 0)
    }
  },
  mounted () {
    $(window).scroll(() => {
      // console.log(this.$refs.top.scrollTop)
      // console.log($(document).scrollTop())
      // console.log(this.$refs.sp.offsetTop)
      // if ($(document).scrollTop() > 550) {
      //   this.isShow = true
      // } else {
      //   this.isShow = false
      // }
      this.isShow = $(document).scrollTop() > 550
    })
  }
}
</script>

<style scoped lang='less'>
    .db{
      width: 100%
    }
    .top{
        width: 40px;
        height: 40px;
        position:fixed;
        bottom: 58px;
        right: 10px;
        z-index: 11;
    }
</style>
