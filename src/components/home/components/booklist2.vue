<template>
    <div class='big'>
        <ul class="oul">
            <li class="oli" v-for="(item,index) in booksSrc" :key="index">
                <a href="#">
                    <img :src='item'>
                </a>
            </li>
        </ul>
        <div style="clear:both"></div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      booksSrc: [
        'http://img50.ddimg.cn/116550067538580_y.jpg',
        'http://img63.ddimg.cn/upload_img/00528/000/7chaoshi-1545121233.png',
        'http://img60.ddimg.cn/upload_img/00528/0000/000000-1560324693.png',
        'http://img62.ddimg.cn/upload_img/00528/000/9zhongxin-1545121233.png',
        'http://img63.ddimg.cn/upload_img/00528/0000/12311-1556245256.jpg'
      ]
    }
  }
}
</script>
<style scoped>
    .big{
        display:table;
    }
    .oli{
        width: 20%;
        /* height: 75px; */
        float: left;
    }
    .oli img{
        width: 100%;
        height: 100%;
    }
</style>
