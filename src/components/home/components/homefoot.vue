<template>
    <div class="foot">
        <div class="left">
            <router-link to="/mine">登录</router-link> |
            <router-link to="/mine">注册</router-link>
        </div>
        <div class="right">
            <router-link to="/">电脑版</router-link>&nbsp;
            <router-link to="/">客户端</router-link>&nbsp;
            <router-link to="/">微信</router-link>
        </div>
        <p>百丽国际旗下购物网站</p>
        <h5>Copyright © 2011-2018 优购 m.yougou.com</h5>
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

<style scoped lang='less'>
    .foot{
        padding: 10px;
        box-sizing: border-box;
        background: #f6f6f6;
        border-top: 1px solid #dddddd;
        .left,.right{
            color: #666;
            font-size: 14px;
            margin-top: 5px;
            a{
                color: #666;
            }
        }
        .right{
            float: right;
            margin-top: -20px;
            margin-right: 10px;
        }
        p,h5{
            color: #a0a0a0;
            font-size: 14px;
            margin-top: 10px;
            display: inline-block;
            width: 100%;
            text-align: center;
        }
    }
</style>
