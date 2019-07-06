<template>
    <div>
        <div v-for="(list,index) in Classification" :key="index">
            <img :src="list.img" class="img_1">
            <ul class="ul_1">
                <li v-for="(img1, index) in list.up" :key="index">
                    <a href="">
                        <img :src="img1">
                    </a>
                </li>
            </ul>
            <ul class="ul_2">
                <li v-for="(img2, index) in list.down" :key="index">
                    <a href="">
                        <img :src="img2">
                    </a>
                </li>
            </ul>
        </div>
        <!-- <span class="sp"></span> -->
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
        height: 5px;
        background: #f6f6f6;
    }
</style>
