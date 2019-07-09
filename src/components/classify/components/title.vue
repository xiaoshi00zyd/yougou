<template>
    <div class="search">
        <img class="img1" src="../imgs/logo.png" alt="">
        <div>
            <router-link to="/classifyFoot" tag="div">请输入关键字</router-link>
            <img src="../imgs/search.png" alt="">
        </div>
        <img class="img2" src="../imgs/options.png" alt="" @click="changeHide">
    </div>
</template>

<script>
export default {
  methods: {
    changeHide () {
      this.$emit('more')
    }
  }
}
</script>

<style scoped>
    .search {
        height: 90px;
        width: 100%;
        display: flex;
        box-sizing: border-box;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
        background:#f8f8f8;
        position: fixed;
        top: 0;
        left: 0;
    }
    .search .img1 {
        width: 76px;
        height: 76px;
        margin-left:-20px;
        /* margin-right:5px; */
    }

    .search div  {
        flex:0.9;
        background: #fff;
        height: 56px;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        box-sizing:border-box;
        border-radius: 6px;
        border: 2px solid #ccc;
        margin: 0 16px;
    }

    .search div img {
        width: 32px;
        margin-right: 26px;
    }

    .search div div {
        border: none;
        margin-left: 20px;
        color: #757575;
        flex:1;
        height: 64px;
        background: transparent;
        font-size: 28px;
    }

    .search .img2 {
        width: 46px;
        height: 46px;
    }

</style>
