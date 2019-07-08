<template>
    <div>
        <div class="search" ref='box_1'>
            <img class="img1" src="../imgs/logo.png" alt="">
            <div>
                <img src="../imgs/search.png" alt="">
                <input type="text">
            </div>
            <span class="sp">
                <img class="img2" src="../imgs/information2.png" alt="">
                <p class="news">消息</p>
            </span>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  mounted () {
    $(window).scroll(() => {
      if ($(document).scrollTop() > 100) {
        $('.search').css('background', 'linear-gradient(0deg, rgba(238,0,0,0.5), red 60%)')
      } else {
        $('.search').css('background', 'linear-gradient(0deg, rgba(255,255,255,0.3), #000 60%)')
      }
    })
  }
}
</script>
<style scoped>
.search {
    background: linear-gradient(0deg, rgba(255,255,255,0.3), #000 60%);
    height: 44px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    border-bottom: none;
}
.search .img1 {
    width: 50px;
    height: 30px;
}

.search div  {
    flex:1;
    background: #fff;
    height: 32px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin: 0 8px;
}

.search div img {
    width: 16px;
    margin-left: 12px;
}

.search div input {
    border: none;
    margin-left: 10px;
    flex:1;
    height: 30px;
    background: transparent;
    font-size: 14px;
}

.search .img2 {
    width: 15px;
    height: 15px;
    margin-left: 2px;
}

.news{
    float: left;
    color: #fff;
    font-size: 10px;
}

.sp{
    display: flex;
    flex-direction: column;
    text-align: center;
}
</style>
