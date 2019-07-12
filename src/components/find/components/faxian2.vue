<template>
  <div>
    <!-- 顶部nav -->
    <div class="search1">
      <img class="img1" src="../../shop/imgs/leftarrow.png" alt @click="goback" />
      <div>
        <h2 class="title">初春时髦装备</h2>
      </div>
      <img class="img2" src="../../shop/imgs/options.png" alt @click="changer" />
    </div>
    <!-- 占头部的无内容空间 -->
    <div class="empty"></div>
    <Hide v-show="hid"></Hide>
    <!-- 内容 -->
    <div v-for="(item,index) in getFaxian2List" :key="index">
      <a href>
        <img :src="item" alt />
      </a>
    </div>
  </div>
</template>

<script>
import {getFaxian2} from '@/api'
import Hide from '../../../public/hide'

export default {
  props: {

  },
  data () {
    return {
      getFaxian2List: [],
      hid: false
    }
  },
  computed: {

  },
  async created () {
    this.getFaxian2List = await getFaxian2()
    console.log(this.getFaxian2List)
  },
  mounted () {

  },
  watch: {

  },
  methods: {
     changer () {
      this.hid = !this.hid
    },
    goback () {
      this.$router.go(-1)
    }
  },
  components: {
     Hide
  }
}
</script>

<style scoped>
img{
  width: 100%;
}
.search1 {
  position: absolute;
  z-index: 9999;
  background: #f8f8f8;
  height: 88px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0 20px;
  /* 两边对齐 */
  justify-content: space-between;
  /* 上下居中 */
  align-items: center;
}
.search1 .img1 {
  width: 52px;
  height: 52px;
}
.search1 div {
  flex: 1;
  height: 64px;
  display: flex;
  align-items: center;
  margin: 0 16px;
}
.search1 div .title {
  font-size: 36px;
  text-align: center;
  width: 100%;
  margin-left: 40px;
}
.search1 .img2 {
  width: 60px;
  height: 60px;
}
.empty {
  height: 88px;
}
</style>