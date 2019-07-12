<template>
    <div class="ticket">
        <!-- 顶部 -->
        <div class="search1">
            <img class="img1" src="../../../shop/imgs/leftarrow.png" alt="" @click="changeone">
            <div>
                <h2 class="title">积分换券</h2>
                <a href="#/mine">说明</a>
            </div>
            <img class="img2" @click="fen" src="../../../shop/imgs/options.png" alt="">
        </div>
        <div class="box"></div>
        <Hide v-show="fenone"></Hide>
        <!-- //领券部分 -->
        <div class="mineone">
            <ul>
                <li v-for="(item,index) in ticket" :key="index">
                    <p class="left">
                        <span><em>￥</em>{{item.span1}}</span>
                        <b>{{item.spanb}}</b>
                    </p>
                    <p class="right">
                        <strong>{{item.strong}}</strong>
                        <time>{{item.time}}</time>
                        <a href="">20积分兑换</a>
                    </p>
                </li>
            </ul>
        </div>
        <h3>没有更多</h3>
    </div>
</template>

<script>
import Hide from '../../../../public/hide'
import {getTicket} from '@/api'
export default {
  data () {
    return {
      fenone: false,
      ticket: null
    }
  },
  methods: {
    fen () {
      this.fenone = !this.fenone
    },
    changeone () {
      this.$router.go(-1)
    }
  },
  components: {
    Hide
  },
  async created () {
    this.ticket = await getTicket()
  }
}
</script>

<style scoped lang="less">
.box {
  height: 88px;
  width: 100%;
}
.search1 {
    position: absolute;
    z-index: 9999;
    background: white;
    height: 88px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    /* 两边对齐 */
    justify-content: space-between;
    /* 上下居中 */
    align-items: center;
    .img1 {
        width: 52px;
        height: 52px;
    }
    div {
        flex: 1;
        height: 64px;
        display: flex;
        align-items: center;
        margin: 0 16px;
        .title {
            font-size: 36px;
            text-align: center;
            width: 100%;
            margin-left: 40px;
        }
        a {
            display: inline-block;
            width: 82px;
            height: 60px;
            padding-top: 28px;
            line-height: 40px;
            font-size: 24px;
            color: black;
        }
    }
    .img2 {
        width: 60px;
        height: 60px;
    }
}
.mineone {
    width: 100%;
    height: 100%;
    position: relative;
    left: 0px;
    top: 0px;
    overflow-x: hidden;
    background: #ffffff;
    ul {
        padding: 20px 36px 0;
        box-sizing: border-box;
        li {
            background: url(//i1.ygimg.cn/pics/mobile/appointment/integralPic/1.jpg);
            background-repeat: no-repeat;
            float: left;
            margin-bottom: 24px;
            background-size: 100% 100%;
        }
    }
}
.left {
    width: 45%;
    float: left;
    em {
        font-size: 26px;
    }
    span {
        margin: 50px 0 0 72px;
        font-style: normal;
        font-size: 76px;
        float: left;
        color: #ffffff;
    }
    b {
        color: #fff;
        padding-left: 72px;
        font-size: 24px;
        display: block;
        text-align: left;
        clear: both;
        font-weight: bold;
    }
}
.right {
    width: 55%;
    position: relative;
    padding-bottom: 32px;
    float: left;
    padding-top: 40px;
    strong {
        font-weight: normal;
        line-height: 40px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;/*显示几行*/
        overflow: hidden;
    }
    time {
        margin-top: 20px;
        margin-bottom: 40px;
        display: block;
        color: #ccc;
        border-bottom: 1px dashed #f3f3f3;
        line-height: 18px;
    }
    a {
        display: inline-block;
        padding: 0px 12px;
        height: 32px;
        line-height: 32px;
        border: 2px solid;
        border-radius: 30px;
        position: absolute;
        right: 32px;
        bottom: 8px;
        color: #f6659a;
        border-color: rgba(245,101,154,1);
    }
}
h3 {
    text-align: center;
    color: #666666;
    margin-bottom: 50px;
}
</style>
