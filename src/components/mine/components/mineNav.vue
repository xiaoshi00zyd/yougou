<template>
  <div class="top">
      <img src="../imgs/leftarrow.png" alt="" @click="goback">
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
    goback () {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.top {
    position: absolute;
    z-index: 9999;
    background: #F8F8F8;
    height: 88px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    /* 上下居中 */
    align-items: center;
    border-bottom: 2px solid #E5E5E5;
}

.top img {
    width: 52px;
    height: 52px;
}
.top p {
    font-weight: 800;
    font-size: 36px;
    width: 100%;
    text-align: center;
    transform: translateX(-10px);
}
</style>
