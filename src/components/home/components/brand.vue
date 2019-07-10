<template>
    <div class="ms">
        <div class="mspro"  v-for="(HomeBaner,index) in HomeBanerList" :key="index">
            <img v-if="HomeBaner.brand.img" v-lazy='HomeBaner.brand.img'>
            <router-link :to="{name: HomeBaner.sign.name}">
              <img v-lazy='HomeBaner.sign.img' class="pic_1">
            </router-link>
            <div class="box">
                <ul class="product" ref="myul">
                    <li ref="myli" v-for="(product,index) in HomeBaner.product" :key="index" class="li_1">
                      <router-link :to="{name: product.name}">
                        <img v-lazy="product.oimg"/>
                        <a><p class="nprice">{{product.p}}</p></a>
                        <a><p class="oprice">{{product.span}}</p></a>
                      </router-link>
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
          margin-top:20px;
          border: 14px solid #f6f6f6;
          box-sizing: border-box;
        }
        img {
            width: 100%;
        }
        }
        .product {
          width: 2000px;
          font-size: 0;
          display: flex;
          flex-direction: row;
          padding-bottom: 16px;
          li {
            width: 200px;
            height: 260px;
            padding: 10px;
            display: inline-block;
            vertical-align: top;
            .content {
              font-size: 24px;
              height: 56px;
            }
            .nprice {
              font-size: 28px;
              color: #F3344A;
              margin-left: 40px;
            }
            .oprice {
              font-size: 24px;
              color: #D0D0D0;
              text-decoration: line-through;
              margin-left: 40px;
            }
            a:hover{
              text-decoration: none;
              cursor: pointer;
            }
          }
        }
    .pic_1{
        width: 100%;
        margin-top: 20px;
    }
    .box{
        overflow-x: auto;
    }
</style>
