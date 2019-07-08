<template>
    <!-- 顶部 -->
    <div class="search1">
        <img class="img1" src="../imgs/leftarrow.png" alt="">
          <div>
            <h2 class="title">购物车</h2>
            <a href="#/mine">登录</a>
          </div>
        <img class="img2" src="../imgs/options.png" alt="">
    </div>

</template>
<script>
export default {
  data () {
    return {

    }
  },
  created () {

  }
}
</script>
<style scoped>
.search1 {
    position: absolute;
    z-index: 9999;
    background: white;
    height: 44px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 10px;
    /* 两边对齐 */
    justify-content: space-between;
    /* 上下居中 */
    align-items: center;
}
.search1 .img1 {
    width: 26px;
    height: 26px;
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
    width: 30px;
    height: 30px;
}
</style>
