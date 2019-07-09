<template>
    <div class="box">
      <ul>
        <li :class="{picth: currentid === index}"  @click="changeCate(index)"  v-for="(item,index) in list" :key="index">{{item}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {
      list: [
        '全部品牌',
        '女鞋',
        '男鞋',
        '运动',
        '户外',
        '童鞋童装'
      ],
      currentid: 0
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
    changeCate (index) {
      this.currentid = index
      // console.log(this.currentid)
      this.$emit('hideOne', this.currentid)
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .box {
    width: 180px;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 100%;
        height: 80px;
        text-align: center;
        line-height: 80px;
        font-size: 28px;
        border-bottom: 2px solid #ddd;
        color:#666;
      }
      .picth {
        background-color: #eee;
        border-right: 2px solid #eee;
        color: #ff0000;
      }
    }
  }

</style>
