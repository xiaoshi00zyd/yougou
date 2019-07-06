<template>
  <div class="my">
      <button class="sign">登录</button>
      <p class="fast" v-show="show">
          <span>新会员限时惊喜 首次登录送百元礼包</span>
      </p>
      <p class="wjpassword" v-show="find">
          <a href="javascript:;">忘记密码</a>
    </p>
    <div class="interface">
        <div class="hd" >
            <span>第三方平台登录</span>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['show', 'find'],
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style scoped >

    .sign{
            width: 100%;
            margin-top: 30px;
            padding: 0;
            background: #999;
            color: #fff;
            height: 44px;
            line-height: 30px;
            font-size: 16px;
            border: 0;
    }
    .wjpassword{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-top: 5px;
        box-sizing: border-box;
    }
    .wjpassword a{
        text-decoration: none;
        color: #666;
        font-size: 13px;
    }
    .fast{
         width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 5px;
        box-sizing: border-box

    }
    .fast span{
         font-size: 12px;
        color: #ff4664;
    }

</style>
