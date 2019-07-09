<template>
    <div>
        <div class="search_2" ref='box_1'>
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
        $('.search_2').css('background', 'linear-gradient(0deg, rgba(238,0,0,0.5), red 60%)')
      } else {
        $('.search_2').css('background', 'linear-gradient(0deg, rgba(255,255,255,0.3), #000 60%)')
      }
    })
  }
}
</script>
<style scoped>
.search_2 {
    background: linear-gradient(0deg, rgba(255,255,255,0.3), #000 60%);
    height: 88px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    border-bottom: none;
}
.search_2 .img1 {
    width: 100px;
    height: 60px;
}

.search_2 div  {
    flex:1;
    background: #fff;
    height: 64px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 0 16px;
}

.search_2 div img {
    width: 32px;
    margin-left: 24px;
}

.search_2 div input {
    border: none;
    margin-left: 20px;
    flex:1;
    height: 60px;
    background: transparent;
    font-size: 28px;
}

.search_2 .img2 {
    width: 30px;
    height: 30px;
    margin-left: 4px;
}

.news{
    float: left;
    color: #fff;
    font-size: 20px;
}

.sp{
    display: flex;
    flex-direction: column;
    text-align: center;
}
</style>
