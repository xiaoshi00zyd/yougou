<template>
    <div class="nav">
        <ul>
        <router-link to="/home" tag="li">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
        </router-link>
        <router-link to="/classify" tag="li">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
        <span>分类</span>
        </router-link>
        <router-link to="/find" tag="li">
        <i class="iconfont icon-faxian"></i>
        <span>发现</span>
        </router-link>
        <router-link to="/shop" tag="li">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
        </router-link>
        <router-link to="/mine" tag="li">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
        </router-link>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scoped>
    /* i{
        color: #484848;
    }
    span{
        color: #484848;
    } */
    .nav{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index:9999;
        background: #fff;
        padding: 10px;
        box-sizing: border-box;
        border-top:2px solid #ccc;
    }
    .nav i,.nav span{
        color: #666;
        /* font-weight:600; */
    }
    .nav ul{
        display: flex;
        justify-content:space-between;
    }

    .nav ul li{
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .nav ul li i{
        font-size: 36px;
        text-align: center;
        /* color: #484848; */
    }

    .nav ul li span{
        font-size: 24px;
        text-align: center;
    }
    .router-link-active i,.router-link-active span{
        color: #fd4765;
    }
</style>
