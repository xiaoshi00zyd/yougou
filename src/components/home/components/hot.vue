<template>
    <div>
        <div v-for="(list,index) in Classification" :key="index">
            <img v-lazy="list.img" class="img_1">
            <ul class="ul_1">
                <li v-for="(img1, index) in list.up" :key="index">
                    <router-link :to="{name:img1.name,query:{id: img1.id}}">
                        <img v-lazy="img1.src">
                    </router-link>
                </li>
            </ul>
            <ul class="ul_2">
                <li v-for="(img2, index) in list.down" :key="index">
                    <router-link :to="{name:img2.name,query:{id: img2.id}}">
                        <img v-lazy="img2.src">
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getClassification} from '@/api'
export default {
  data () {
    return {
      Classification: []
    }
  },
  methods: {

  },
  async created () {
    this.Classification = await getClassification()
  }
}
</script>

<style scoped lang='less'>
    .img_1{
        width: 100%;
    }
    .ul_1{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        li{
            width: 25%;
            img{
                width: 100%;
            }
        }
    }
    .ul_2{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        li{
            width: 20%;
            img{
                width: 100%;
            }
        }
    }
    .sp{
        display: block;
        width: 100%;
        height: 10px;
        background: #f6f6f6;
    }
</style>
