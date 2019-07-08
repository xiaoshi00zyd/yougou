<template>
    <div>
        <!-- 全部品牌 -->
        <div v-show="d === 0" class="box1">
            <ul v-for="(item,index) in list" :key="index">
                <p>{{item.title}}</p>
                <li v-for="(itemo,indexo) in item.brand" :key="indexo">
                    <a href="">
                        <img v-lazy="itemo.bootImg" alt="">
                        {{itemo.text}}
                    </a>
                </li>
            </ul>
        </div>
        <!-- 女鞋 -->
        <div v-show="d === 1" class="box1">
            <ul v-for="(item,index) in listTwo" :key="index">
                <p>{{item.title}}</p>
                <li v-for="(itemo,indexo) in item.brand" :key="indexo">
                    <a href="">
                        <img v-lazy="itemo.womenShoesImg" alt="">
                        {{itemo.text}}
                    </a>
                </li>
            </ul>
        </div>
        <!-- 男鞋 -->
        <div v-show="d === 2" class="box1">
            <ul v-for="(item,index) in listThree" :key="index">
                <p>{{item.title}}</p>
                <li v-for="(itemo,indexo) in item.brand" :key="indexo">
                    <a href="">
                        <img v-lazy="itemo.manShoesImg" alt="">
                        {{itemo.text}}
                    </a>
                </li>
            </ul>
        </div>
        <!-- 运动 -->
        <div v-show="d === 3" class="box1">
            <ul v-for="(item,index) in listFour" :key="index">
                <p>{{item.title}}</p>
                <li v-for="(itemo,indexo) in item.brand" :key="indexo">
                    <a href="">
                        <img v-lazy="itemo.soprtImg" alt="">
                        {{itemo.text}}
                    </a>
                </li>
            </ul>
        </div>
        <!-- 户外 -->
        <div v-show="d === 4" class="box1">
            <ul v-for="(item,index) in listFive" :key="index">
                <p>{{item.title}}</p>
                <li v-for="(itemo,indexo) in item.brand" :key="indexo">
                    <a href="">
                        <img v-lazy="itemo.soprtImg" alt="">
                        {{itemo.text}}
                    </a>
                </li>
            </ul>
        </div>
        <!-- 童鞋童装 -->
        <div v-show="d === 5" class="box1">
            <ul v-for="(item,index) in listSix" :key="index">
                <p>{{item.title}}</p>
                <li v-for="(itemo,indexo) in item.brand" :key="indexo">
                    <a href="">
                        <img :src="itemo.soprtImg" alt="">
                        {{itemo.text}}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getOptionGroup, getWomanShoe, getManShoe, getSoprt, getOutdoor, getChild} from '@/api'
export default {
  props: [
    'd'
  ],
  data () {
    return {
      list: [],
      hide: false,
      listTwo: [],
      listThree: [],
      listFour: [],
      listFive: [],
      listSix: []
    }
  },
  computed: {

  },
  async created () {
    this.list = await getOptionGroup()
    this.listTwo = await getWomanShoe()
    this.listThree = await getManShoe()
    this.listFour = await getSoprt()
    this.listFive = await getOutdoor()
    this.listSix = await getChild()
  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
    .box1{
        width: 100%;
        background: #eee;
        padding: 10px 0 5px 3px;
        box-sizing: border-box;
        ul {
            display: flex;
            flex-wrap: wrap;
            background: white;
            p {
                width: 100%;
                height: 40px;
                text-align: center;
                line-height: 40px;
                background: #eee;
                font-size: 16px;
                color: #333;
            }
            li{
                width:33%;
                text-align: center;
                a {
                    display: block;
                    background-color: #fff;
                    margin: 0 3px 5px;
                    text-align: center;
                    padding: 10px 5px;
                    color: #333;
                    text-decoration: none;
                    font-size: 14px;
                    img {
                        width: 100%;
                    }
                }

            }
        }
    }
</style>
