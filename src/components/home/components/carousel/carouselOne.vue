<template>
    <div class="content">
      <!-- 顶部nav -->
      <div class="search1">
        <img class="img1" src="../../../shop/imgs/leftarrow.png" alt="" @click="goback">
          <div>
            <h2 class="title">清凉季 至高减150元</h2>
          </div>
        <img class="img2" src="../../../shop/imgs/options.png" alt="" @click="changer">
      </div>
      <!-- 占头部的无内容空间 -->
      <div class="empty"></div>
      <Hide v-show="hid"></Hide>
      <!-- 内容 -->
      <!-- 第一副大图 -->
      <div class="firstImg">
        <a href="">
          <img v-lazy="qingliangjiList.img">
        </a>
      </div>
      <!-- 第一个四等分 -->
      <div class="firstFourImg">
        <ul>
          <li v-for="(item,index) in qingliangjiList.list1" :key="index"><a href=""><img v-lazy="item.img" alt=""></a></li>
        </ul>
      </div>
      <!-- 三等分 -->
      <div class="threeImg">
        <ul>
          <li v-for="(item,index) in qingliangjiList.list2" :key="index"><a href=""><img v-lazy="item.img" alt=""></a></li>
        </ul>
      </div>
      <!-- 二等分 -->
      <div class='twoImg'>
        <ul>
          <li v-for="(item,index) in qingliangjiList.list3" :key="index"><a href=""><img v-lazy="item.img" alt=""></a></li>
        </ul>
      </div>
      <!-- 第二个三等分 -->
      <div class='threeImg'>
        <ul>
          <li v-for="(item,index) in qingliangjiList.list4" :key="index"><a href=""><img v-lazy="item.img" alt=""></a></li>
        </ul>
      </div>
    <!-- 超多图片的四等分 -->
      <div class="firstFourImg">
        <ul>
          <li v-for="(item,index) in qingliangjiList.list5" :key="index"><a href=""><img v-lazy="item.img" alt=""></a></li>
        </ul>
      </div>
      <!-- 二等分 -->
      <div class="twoImg">
        <ul>
          <li v-for="(item,index) in qingliangjiList.list6" :key="index"><a href=""><img v-lazy="item.img" alt=""></a></li>
        </ul>
      </div>
      <!-- 三等分 -->
      <div class="threeImg">
        <ul>
          <li v-for="(item,index) in qingliangjiList.list7" :key="index"><a href=""><img v-lazy="item.img" alt=""></a></li>
        </ul>
      </div>
      <!-- 二等分 -->
      <div class="twoImg">
        <ul>
          <li v-for="(item,index) in qingliangjiList.list8" :key="index"><a href=""><img v-lazy="item.img" alt=""></a></li>
        </ul>
      </div>
      <!-- 三等分 -->
      <div class="threeImg">
        <ul>
          <li v-for="(item,index) in qingliangjiList.list9" :key="index"><a href=""><img v-lazy="item.img" alt=""></a></li>
        </ul>
      </div>
      <!-- 猜你喜欢 -->
      <div><a href=""><img v-lazy="qingliangjiList.img2" alt=""></a></div>
      <!-- 商品列表 -->
      <div class="productList">
        <ul>
          <li v-for="(item,index) in qingliangjiList.list10" :key="index"><a href=""><img v-lazy="item.img" alt=""><span>{{item.price}}</span></a></li>
        </ul>
      </div>
      <div class="productList">
        <ul>
          <li v-for="(item,index) in qingliangjiList.list11" :key="index"><a href=""><img v-lazy="item.img" alt=""><span>{{item.price}}</span></a></li>
        </ul>
      </div>
      <div class="productList">
        <ul>
          <li v-for="(item,index) in qingliangjiList.list12" :key="index"><a href=""><img v-lazy="item.img" alt=""><span>{{item.price}}</span></a></li>
        </ul>
      </div>
      <div class="productList">
        <ul>
          <li v-for="(item,index) in qingliangjiList.list13" :key="index"><a href=""><img v-lazy="item.img" alt=""><span>{{item.price}}</span></a></li>
        </ul>
      </div>
      <div class="productList">
        <ul>
          <li v-for="(item,index) in qingliangjiList.list14" :key="index"><a href=""><img v-lazy="item.img" alt=""><span>{{item.price}}</span></a></li>
        </ul>
      </div>
      <div class="productList">
        <ul>
          <li v-for="(item,index) in qingliangjiList.list15" :key="index"><a href=""><img v-lazy="item.img" alt=""><span>{{item.price}}</span></a></li>
        </ul>
      </div>
    </div>
</template>

<script>
import {getQingliangji} from '@/api'
import Hide from '../../../../public/hide'
export default {
  data () {
    return {
      qingliangjiList: [],
      hid: false
    }
  },
  async created () {
    this.qingliangjiList = await getQingliangji()
  },
  methods: {
    changer () {
      this.hid = !this.hid
    },
    goback () {
      this.$router.go(-1)
    }
  },
  components: {
    Hide
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
ul li {
  float: left;
  display: block;
}
img {
  width: 100%;
  display: block;
}
.search1 {
    position: absolute;
    z-index: 9999;
    background: #f8f8f8;
    height: 88px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    /* 两边对齐 */
    justify-content: space-between;
    /* 上下居中 */
    align-items: center;
}
.search1 .img1 {
    width: 52px;
    height: 52px;
}
.search1 div {
    flex: 1;
    /* background: #E8ECF0; */
    height: 64px;
    /* border-radius: 16px; */
    display: flex;
    align-items: center;
    margin: 0 16px;
}
.search1 div .title {
  font-size: 36px;
  text-align: center;
  width: 100%;
  margin-left: 40px;
}
.search1 .img2 {
    width: 60px;
    height: 60px;
}
/* 空 */
.empty {
  height: 88px;
}
/* 内容 */
.firstFourImg ul li {
  width: 25%;
}
.threeImg ul li {
   width:calc(100%/3);
}
.twoImg ul li {
  width:50%;
}
.productList {
  background:#EEEEEE;
}
.productList li {
  width: calc(100%/3);
  padding: 0 6px;
  box-sizing: border-box;
  margin-top: 20px;
}
.productList li:nth-child(-n+3){
  margin-top: 0;
}
.productList ul {
  overflow: auto;
  padding: 20px 14px;
}
.productList li span {
  display: block;
  text-align: center;
  color: red;
  background:white;
}

</style>
