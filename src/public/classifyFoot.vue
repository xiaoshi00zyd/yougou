<template>
    <div>
        <div class="box">
            <div class="box1" @click="upOneLevel"></div>
            <div class="box2">
                <input type="text" name="" id="" placeholder="请输入关键字">
                <a href=""></a>
            </div>
        </div>
        <div class="boxOne">
            <div class="box3">热门搜索</div>
            <ul>
                <li v-for="(item,index) in list" :key="index">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {
      list: [
        '新款凉鞋',
        '小白鞋',
        '阿迪',
        '休闲鞋',
        '跑步鞋',
        '卫衣',
        '短靴',
        '单鞋',
        '百丽',
        '思加图',
        '天美意'
      ]
      
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
    upOneLevel () {
      this.$router.go(-1)
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
    .box{
        width: 100%;
        height: 110px;
        border-bottom: 2px solid #ddd;
        padding: 20px 0;
        background: #fff;
        box-sizing: border-box;
        position: relative;
        top: 0;
        left: 0;
        .box1 {
            width: 76px;
            height: 56px;
            position: absolute;
            top: 26px;
            left: 0;
            background: url(http://m.yougou.com/images/ico-close.png) center center no-repeat;
            background-size: 30px auto;
        }
        .box2{
            width: 85%;
            margin: 0 auto;
            margin-left: 76px;
            margin-right: 20px;
            position: relative;
            input {
                height: 68px;
                display: block;
                width: 100%;
                position: relative;
                border-radius: 6px;
                border: 2px solid #ccc;
                padding: 0 60px 0 20px;
                box-sizing: border-box;
                font-size: 28px;
            }
            a {
                display: block;
                height: 64px;
                width: 86px;
                background: url(http://m.yougou.com/images/ico-srch.png) center center no-repeat;
                background-size: 40px auto;
                background-color: #F1F1F1;
                border-left: 2px solid #ccc;
                position: absolute;
                top: 2px;
                right: 2px;
                border-radius: 0 6px 6px 0;
            }
        }

    }
    .boxOne {
        padding-top: 0;
        margin: 0;
        background: #fff;
        padding: 24px 14px 4px;
        padding-top: 0;
        position: relative;
        z-index: 500;
        .box3 {
            border: none;
            color: #666;
            padding: 24px 0;
            font-size: 28px;
            background: url(http://m.yougou.com/images/listview/hot.png) center left no-repeat;
            background-size: 24px auto;
            margin-left: 10px;
            padding-left: 40px;
        }
        ul {
            li {
                float: left;
                margin: 0 10px 20px;
                color: #666;
                padding: 6px 24px;
                background: #eee;
                border-radius: 10px;
                font-size: 28px;
                line-height: 48px;
            }
        }
    }
</style>
