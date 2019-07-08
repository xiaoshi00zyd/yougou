<template>
    <div>
        <div v-for="(activitylist,index) in activityList" :key="index">
            <img v-lazy="activitylist.img" class="img_1">
            <ul class="ul_1">
                <li v-for="(activity,index) in activitylist.list" :key='index'>
                    <img v-lazy='activity'>
                </li>
            </ul>
        </div>
        <span class="sp"></span>
    </div>
</template>

<script>
import {getActivity} from '@/api'
export default {
  data () {
    return {
      activityList: []
    }
  },
  methods: {

  },
  async created () {
    this.activityList = await getActivity()
  }
}
</script>

<style scoped lang='less'>
    .img_1{
        width: 100%;
    }
    .ul_1{
        width: 100%;
        display: flex;
        flex-direction: row;
        li{
            width: 30%;
            margin-left: 15px;
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
