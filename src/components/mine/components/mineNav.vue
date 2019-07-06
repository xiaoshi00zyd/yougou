<template>
  <div class="top">
      <img src="../imgs/leftarrow.png" alt="">
      <p>登录</p>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.top {
    position: absolute;
    z-index: 9999;
    background: #F8F8F8;
    height: 44px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 10px;
    /* 上下居中 */
    align-items: center;
    border-bottom: 1px solid #E5E5E5;
}

.top img {
    width: 26px;
    height: 26px;
}
.top p {
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    text-align: center;
}
</style>
