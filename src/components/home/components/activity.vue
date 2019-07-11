<template>
    <div>
        <div v-for="(activitylist,index) in activityList" :key="index">
            <img v-lazy="activitylist.img" class="img_1">
            <ul class="ul_1">
                <li v-for="(activity,index) in activitylist.list" :key='index'>
                    <router-link :to="{name: activity.name,query:{id: activity.id}}">
                        <img v-lazy='activity.src'>
                    </router-link>
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
        // padding-bottom: 20px;
        li{
            width: 30%;
            margin-left: 30px;
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
