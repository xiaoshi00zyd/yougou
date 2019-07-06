<template>
  <div class="c-content">
      <Loading ref="load"></Loading>
      <!-- 左边 -->
      <div class="c-left" ref="left">
          <ul ref="myul">
              <li class="fs" :class="{active: currentid===index}" @click="changeCate(index)" v-for="(cate, index) in cateList" :key="index">{{cate.title}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
import Loading from '@/common/loading.vue'
import BScroll from '@better-scroll/core'
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      cateList: [],
      currentid: 0,
      leftscroll: null
    }
  },
  methods: {
    changeCate (index) {
      this.$refs.load.isShow()
      this.currentid = index
      // 开始计算
      var leftHeight = (this.cateList.length - index) * 45
      var allHeight = this.$refs.left.offsetHeight
      setTimeout(() => {
        this.$refs.load.isHide()
      }, 1000)
      if (leftHeight <= allHeight) {
        return
      }
      var scrollHeight = index * -45
      this.leftscroll.scrollTo(0, scrollHeight, 500)
    }
  },
  created () {
    this.cateList = this.$store.state.cateList
  },
  components: {
    Loading
  },
  async mounted () {
    this.$nextTick(() => {
      /* eslint-disable no-new */
      this.leftscroll = new BScroll('.c-left', {
        click: true
      })
    })
  }
}
</script>

<style scoped lang="less">
.c-content {
    height: 100%;
}
.fs{
  font-size: 14px;
}
.c-left {
    height: calc(100% - 60px);
    overflow: hidden;
    // overflow-y: auto;
    li {
        width: 80px;
        height: 45px;
        text-align: center;
        line-height: 45px;
    }
}

.active {
    background: #EFF4FA;
    color: #E87066;
    font-size: 13px;
}
</style>
