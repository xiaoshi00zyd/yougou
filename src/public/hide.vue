<template>
    <div class="box" v-show="hide" >
        <ul>
            <router-link to="/home" tag="li"><a class="item1" href="">首页</a></router-link>
            <router-link to="/classify" tag="li"><a class="item2" href="">分类</a></router-link>
            <router-link to="/shop" tag="li"><a class="item3" href="">购物车</a></router-link>
            <router-link to="/mine" tag="li"><a class="item4" href="">我的优购</a></router-link>
        </ul>
    </div>
</template>

<script>
export default {
  props: ['hide'],
  data () {
    return {
    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
    .box {
        width:100%;
        height: 98px;
        background: #666;
    }
    .box ul{
        display: flex;
        width: 100%;
    }
    .box ul li{
        width:25%;
        text-align: center
    }
    .box ul li a{
        display: block;
        font-size: 28px;
        color: #fff;
        background-position: center 18px;
        background-size: auto 36px;
        padding-top: 56px
    }
    .box ul li .item1 {
        background: url(http://m.yougou.com/images/homec.png) no-repeat;
        background-size: auto 36px;
        background-position: center 18px;
    }
    .box ul li .item2 {
       background: url(http://i1.ygimg.cn/pics/mobile/appointment/6.18Game/class.png) center 9px no-repeat;
       background-size: auto 36px;
        background-position: center 18px;
    }
    .box ul li .item3 {
        background: url(http://m.yougou.com/images/ico-shopcartc.png) no-repeat;
        background-size: auto 36px;
        background-position: center 18px;
    }
    .box ul li .item4 {
        background: url(http://m.yougou.com/images/ico-personc.png) no-repeat;
        background-size: auto 36px;
        background-position: center 18px;
    }
</style>
