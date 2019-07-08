<template>
    <div class="search">
        <img class="img1" src="../imgs/logo.png" alt="">
        <div>
            <input type="text" placeholder="请输入关键字">
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
        height: 45px;
        width: 100%;
        display: flex;
        box-sizing: border-box;
        padding: 0 10px;
        justify-content: space-between;
        align-items: center;
        background:#f8f8f8;
        position: fixed;
        top: 0;
        left: 0;
    }
    .search .img1 {
        width: 38px;
        height: 38px;
        margin-left:-10px;
        /* margin-right:5px; */
    }

    .search div  {
        flex:0.9;
        background: #fff;
        height: 28px;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        box-sizing:border-box;
        border-radius: 3px;
        border: 1px solid #ccc;
        margin: 0 8px;
    }

    .search div img {
        width: 16px;
        margin-right: 13px;
    }

    .search div input {
        border: none;
        margin-left: 10px;
        flex:1;
        height: 32px;
        background: transparent;
        font-size: 14px;
    }

    .search .img2 {
        width: 23px;
        height: 23px;
    }

</style>
