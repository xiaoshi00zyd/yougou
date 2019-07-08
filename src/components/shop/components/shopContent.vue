<template>
  <div class="content">
      <img src="../imgs/shopcar.png" alt="">
      <p>购物车是空的</p>
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
.content p {
    font-size:14px;
    margin-top: 110px;
    text-align: center;
    color: #666666;
}
.content img {
    width: 70px;
    height: 55px;
    position: relative;
    top: 100px;
    left: 50%;
    margin-left: -35px;
    transform: rotate(-30deg);
}
</style>
