<template>
    <div>
        <ul class="ul_1" v-for="(singlist,index) in HomeSigninList[0]" :key="index">
            <li v-for="(sing,index) in singlist" :key="index">
                <a :href="sing.href">
                    <img :src="sing.src" >
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import {getHomeSignin} from '@/api'
export default {
  data () {
    return {
      HomeSigninList: []
    }
  },
  methods: {

  },
  async created () {
    this.HomeSigninList = await getHomeSignin()
  }
}
</script>

<style scoped lang='less'>
    .ul_1{
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: -6px;
        &:nth-child(3){
            li{
                width: calc(100%/3);
            }
        }
        li{
            width: 25%;
            img{
                width: 100%
            }
        }
        li:hover{
            cursor: pointer;
        }
    }
</style>
