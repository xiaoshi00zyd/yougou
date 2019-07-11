<template>
    <div>
        <div v-if="this.showNum=='0'&&!this.showList">
            <ul class="ul_2">
                <li v-for="(list,index) in recommend.list" :key="index">
                    <router-link :to="{name: list.name,query:{id: list.id}}">
                        <img v-lazy="list.img">
                        <p>￥{{list.price}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div v-if="this.showNum=='1'&&!this.showList">
            <ul class="ul_2">
                <li v-for="(list,index) in recommend.list" :key="index">
                    <router-link :to="{name: list.name,query:{id: list.id}}">
                        <img v-lazy="list.img">
                        <p>￥{{list.price}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div v-if="this.showNum=='2'&&!this.showList">
            <ul class="ul_2">
                <li v-for="(list,index) in recommend.list" :key="index">
                    <router-link :to="{name: list.name,query:{id: list.id}}">
                        <img v-lazy="list.img">
                        <p>￥{{list.price}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div v-if="this.showList">
            <ul class="ul_2">
                <li v-for="(list,index) in recommend4.list" :key="index">
                    <router-link :to="{name: list.name,query:{id: list.id}}">
                        <img v-lazy="list.img">
                        <p>￥{{list.price}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getRecommend} from '@/api'
export default {
  data () {
    return {
      recommendList: [],
      recommend: {},
      recommend4: {}
    }
  },
  props: ['showNum', 'showList'],
  methods: {

  },
  async created () {
    this.recommendList = await getRecommend()
    this.recommend = this.recommendList[0]
    this.recommend4 = this.recommendList[3]
  },
  beforeUpdate () {
    this.recommend = this.recommendList[parseInt(this.showNum)]
  }
}
</script>

<style scoped lang='less'>
    .ul_2{
        font-size: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        li{
            a:hover{
                text-decoration: none;
            }
            width: 25%;
            text-align: center;
            img{
                width: 80%;
            }
            p{
                color: #000;
                font-size: 24px;
            }
        }
    }
</style>
