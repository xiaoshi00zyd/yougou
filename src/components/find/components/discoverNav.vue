<template>
    <!-- 顶部 -->
    <div class="search1">
        <img class="img1" src="../imgs/back.png" alt="" @click="$router.back(-1)">
          <div>
            <h2 class="title">发现</h2>
            <a href="#/mine">登录</a>
          </div>
        <img class="img2" src="../imgs/option.png" alt="" @click="change">
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    // 返回首页的函数
    // goback () {
    //   this.$router.push('/home')
    // },
    change () {
      this.$emit('more')
    }
  }
}
</script>
<style scoped>
.search1 {
    position: absolute;
    z-index: 9999;
    background: #f8f8f8;
    height: 44px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 10px;
    /* 两边对齐 */
    justify-content: space-between;
    /* 上下居中 */
    align-items: center;
    clear: both;
}
.search1 .img1 {
    width: 16px;
    height: 20px;
}
.search1 div {
    flex: 1;
    /* background: #E8ECF0; */
    height: 32px;
    /* border-radius: 16px; */
    display: flex;
    align-items: center;
    margin: 0 8px;
}
.search1 div .title {
  font-size: 18px;
  text-align: center;
  width: 100%;
  margin-left: 20px;
}
.search1 div a {
  display: inline-block;
  width: 42px;
  height: 30px;
  padding-top: 14px;
  line-height: 20px;
  font-size: 12px;
  color: black;
}
.search1 .img2 {
    width: 20px;
    height: 15px;
}
</style>
