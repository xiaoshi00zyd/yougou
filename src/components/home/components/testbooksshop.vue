<template>
  <div class="bp">
      <img class="mytitle" v-if="pdlist.titleImg" v-lazy="pdlist.titleImg"/>
      <ul class="des">
          <li v-for="(des, index) in pdlist.subtitles" :key="index">
              <span>{{des}}</span>
              <i>&gt;</i>
          </li>
      </ul>
      <!-- 广告图 -->
      <img class="banner" v-lazy="pdlist.banner"/>
      <ul class="book">
          <li v-if="pdlist.firstImg">
            <img v-if="pdlist.firstImg" v-lazy="pdlist.firstImg" alt="">
          </li>
          <li v-for="(book, index) in pdlist.books" :key="index" class="myli">
              <p>{{book.title}}</p>
              <p :style="{color:'#ef2933'}">{{book.yh}}</p>
              <img v-lazy="book.img" alt="">
          </li>
      </ul>
      <hrs></hrs>
  </div>
</template>

<script>
import hrs from './hrs'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  props: ['pdlist'],
  components: {
    hrs
  }
}
</script>

<style scoped lang="less">
  .bp {
    .banner {
      margin-top: 10px;
      width: 100%;
    }
    .mytitle {
      width: 100%;
    }
    .des {
      display: flex;
      justify-content: center;
      li {
        margin-right: 8px;
        span {
          font-size: 12px;
          color: #323232
        }
        i {
          width: 16px;
          height: 16px;
          display: inline-block;
          border-radius: 50%;
          background: black;
          color: white;
          font-size: 12px;
          line-height: 14px;
          text-align: center;
        }
      }
    }
    .book {
      display: flex;
      flex-wrap: wrap;
      li {
        text-align: center;
        width: 33%;
        padding-top:8px;
        box-sizing:border-box;
        // border: 1px solid #666;
        &:nth-child(1),&:nth-child(2),&:nth-child(4),&:nth-child(5){
            border-right:1px solid #eff4fa;
            border-bottom:1px solid #eff4fa;
        }
        &:nth-child(3),&:nth-child(6){
            border-bottom:1px solid #eff4fa;
        }
        &:nth-child(7),&:nth-child(8){
            border-right:1px solid #eff4fa;
        }
        img {
          width: 100%
        }
        p {
          font-size: 12px;
          &:first-child {
            color:#323232
          }
        }
      }
    }
  }
</style>
