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
    font-size:28px;
    margin-top: 220px;
    text-align: center;
    color: #666666;
}
.content img {
    width: 140px;
    height: 110px;
    position: relative;
    top: 200px;
    left: 50%;
    margin-left: -70px;
    transform: rotate(-30deg);
}
</style>
