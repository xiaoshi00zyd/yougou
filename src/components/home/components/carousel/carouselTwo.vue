/* eslint-disable vue/no-side-effects-in-computed-properties */
<template>
    <div class="spbig">
      <!-- 标题搜索框 -->
      <Title  @more='morea'></Title>
      <div class="pudian"></div>
      <Hide :hide='option' ></Hide>
       <!-- 商品列表操作 -->
       <div class="operation">
         <ul>
           <li v-for="(item,index) in text" :key="index"  @click="selectStyle (item,index) " :class="{'textcolor':aindex===index}" >
             {{item.wenben}}
             <img :src="item.img" v-if="item.img"/>
           </li>
         </ul>
       </div>

       <!-- 具体商品列表 -->
       <div class="list">
          <ul>
            <li v-for="item in sortItems" :key="item.id">
                <img v-lazy="item.img" alt="">
                <span>{{item.txt}}</span>
                <p class="jiaqian">
                  <span class="price">{{item.price}}</span>
                  <span :class="['yuanjia',item.judge? 'yuanjia_xiahua':'']" >
                    {{item.yuanjia}}
                    <img src="../../imgs/plus-small.png" v-if="item.plus">
                  </span>
                  <span class="ticketIcon"></span>
                  </p>
                <p class="time">
                  <span v-if="item.time">{{item.time}}</span>
                </p>
            </li>
          </ul>
       </div>
       <!-- 购物车图标 -->
      <div class="SuspensionCon">
        <a class="topicsCar" href="/shoppingcart"></a>
        <a class="topmove" style="height: 0px;"></a>
      </div>
    </div>
</template>

<script>
import {getHomeBanner} from '@/api'
import Title from '@/public/title'
import Hide from '@/public/hide'
export default {
  data () {
    return {
      aindex: 0,
      currentWenben: '综合',
      text: [
        {wenben: '综合'},
        {wenben: '销量'},
        {wenben: '价格', img: '//i1.ygimg.cn/pics/mobile/appointment/searchP/gray.png'},
        {wenben: '新品'},
        {wenben: '筛选', img: '//i1.ygimg.cn/pics/mobile/appointment/searchP/select.png'}
      ],
      // list: [],
      option: false,
      arr: [],
      num: null,
      testList: [],
      obj: [],
      age: ''
    }
  },
  computed: {
    sortItems () {
      let arr = []
      arr = JSON.parse(JSON.stringify(this.obj))
      if (this.currentWenben === '销量') {
        return arr.sort((a, b) => {
          return b.salesvolume - a.salesvolume
        })
      } else if (this.currentWenben === '综合') {
        // console.log('综合更新')
        return arr
      } else if (this.currentWenben === '价格') {
        // console.log('价格更新')
        return arr.sort((a, b) => {
          let abc = parseInt(a.price.substring(1))
          let bcd = parseInt(b.price.substring(1))
          return abc - bcd
        })
      }
      return arr
    }
  },
  methods: {
    selectStyle (item, index) {
      // console.log(this.text[index].wenben)
      this.aindex = index
      this.currentWenben = this.text[index].wenben
    },
    morea () {
      this.option = !this.option
    }

  },
  async created () {
    // this.list = await getCommodity()
    this.testList = await getHomeBanner()
    this.age = this.$route.query.id
    if (!this.$route.query.id) {
      this.num = this.testList[this.age]
      this.obj = this.testList[this.age].Child.data
    } else {
      this.num = this.testList[this.$route.query.id]
      this.obj = this.testList[this.$route.query.id].Child.data
    }

    this.$store.dispatch('setTitleFn', this.num.title)
  },
  components: {
    Title,
    Hide
  }
}
</script>

<style scoped lang="less">
.spbig{
  background: #f5f5f5;
  .pudian{
    height: 90px;
  }
  .search{
    position: absolute;
  }
   .operation{
      width: 100%;
      height: 100%;
      background: #fff;
      font-size: 24px;
      border-bottom: 1px #ccc solid;
      ul{
        list-style: none;
        display: flex;
        text-align: center;
        line-height: 84px;
        li{
          width: 24%;
          height: 84px;
          color: #999;
          cursor: pointer;
          img{
                vertical-align: middle;
                width: 16px;
                height: 20px;
          }
        }
      }
      .textcolor{
        color: red;
      }
  }
  .list{
        ul{
          display: flex;
          flex-wrap: wrap;
          li{
            width: 48.4%;
            height: 100%;
            margin: 3px .8%;
            background: white;
            img{
              width: 100%;
              height: 100%;
              margin-bottom: 4px;
            }
            span{
              font-size: 24px;
              color:#666666;
            }
            .price{
                font-weight: 500;
                font-size: 28px;
                font-family: PingFangSC-Medium;
                color: rgba(253,71,101,1);
            }
            .yuanjia{
                width: 136px;
                height: 40px;
                font-size: 20px;
                font-family: PingFangSC-Regular;
                font-weight: 500;
                color: #333;
            }
            .yuanjia img{
                width: 42px;
                height: 16px;
                padding-top: 10px;
            }
            .yuanjia_xiahua{
              text-decoration:line-through;
              color: rgba(153,153,153,1);
              font-weight: 400;
              margin-left: 10px;
            }
            .ticketIcon{
              width: 36px;
              height: 22px;
              background: url("../../imgs/lingjuan.png") no-repeat center center;
              // background-position: center center;
              // background-repeat: no-repeat;
              background-size: 100%;
              display: inline-block;
            }
            .jiaqian{
              margin-top: 10px;
              height: auto;
            }
            .time{
                padding-top: 0;
                margin: 20px 10px;
                height: 32px;
                span{
                  padding: 0 6px;
                  margin-right: 40px;
                  border: 1px solid #FD4765;
                  border-radius: 50px;
                  font-size: 16px;
                  color: #FD4765;
                }
            }
            img+span{
              height: 68px;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }

          }
          li:first-child span{
            margin-top: 2px;
            box-sizing: border-box;
          }
        }

    }
    .SuspensionCon{
      width: 80px;
      position: fixed;
      right: 10px;
      bottom: 50px;
      z-index: 900;
        .topicsCar{
          display: block;
          width: 80px;
          height: 80px;
          background-color: rgba(0,0,0,0.3);
          background-image: url("../../imgs/gouwuche.png");
          background-repeat: no-repeat;
          background-size: 60% auto;
          border-radius: 40px;
          background-position: center center;
          margin-bottom: 15px;
        }
    }
}

</style>
