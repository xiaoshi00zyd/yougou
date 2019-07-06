<template>
    <div>
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
        'http://img61.ddimg.cn/upload_img/00702/B/icon-5.27-1558886823.png',
        'http://img63.ddimg.cn/upload_img/00702/B/icon-xsb-1559818712.png',
        'http://img62.ddimg.cn/upload_img/00702/B/SY-iCON-3-5.10-1557488951.png',
        'http://img60.ddimg.cn/upload_img/00702/T/icon-cx-1559818801.png',
        'http://img62.ddimg.cn/upload_img/00705/B/icon-5.28-1559032809.png'
      ]
    }
  }
}
</script>
<style scoped>
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
