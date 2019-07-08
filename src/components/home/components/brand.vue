<template>
    <div class="ms">
        <div class="mspro"  v-for="(HomeBaner,index) in HomeBanerList" :key="index">
            <img v-if="HomeBaner.brand.img" v-lazy='HomeBaner.brand.img'>
            <img v-lazy='HomeBaner.sign.img' class="pic_1">
            <div class="box">
                <ul class="product" ref="myul">
                    <li ref="myli" v-for="(product,index) in HomeBaner.product" :key="index" class="li_1">
                        <img v-lazy="product.oimg"/>
                        <a><p class="nprice">{{product.p}}</p></a>
                        <a><p class="oprice">{{product.span}}</p></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {getHomeBaner} from '@/api'
export default {
  data () {
    return {
      HomeBanerList: []
    }
  },
  methods: {

  },
  async created () {
    this.HomeBanerList = await getHomeBaner()
  }
}
</script>

<style scoped lang='less'>
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    .ms {
        width: 100%;
        .mspro {
          width: 100%;
          overflow-x: auto;
          margin-top:10px;
          border: 7px solid #f6f6f6;
          box-sizing: border-box;
        }
        img {
            width: 100%;
        }
        }
        .product {
          width: 1000px;
          font-size: 0;
          display: flex;
          flex-direction: row;
          li {
            width: 100px;
            height: 130px;
            padding: 5px;
            display: inline-block;
            vertical-align: top;
            .content {
              font-size: 12px;
              height: 28px;
            }
            .nprice {
              font-size: 14px;
              color: #F3344A;
              margin-left: 20px;
            }
            .oprice {
              font-size: 12px;
              color: #D0D0D0;
              text-decoration: line-through;
              margin-left: 20px;
            }
          }
        }
    .pic_1{
        width: 100%;
        margin-top: 10px;
    }
    .box{
        overflow-x: auto;
    }
</style>
