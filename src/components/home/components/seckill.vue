<template>
    <div class="big">
        <div v-for="(list,index) in ClassHomeSeckill" :key="index" class="box_1">
            <img :src="list.seckill" class="img_1">
            <img :src="list.leftImg" class="img_2">
            <ul class="ul_1">
                <li class="li_1">
                    <a href="" class="a_1">{{list.pone}}</a>
                    <a href="" class="a_2">{{list.ptwo}}</a>
                    <a href="" class="a_3">{{list.psh}}</a>
                    <a href="" class="a_4">{{list.pfp}}</a>
                    <a href=""><img :src="list.dimg"></a>
                </li>
                <li class="li_2">
                    <a href="" class="a_2">{{list.pfi}}</a>
                    <a href="" class="a_3">{{list.pse}}</a>
                    <a href="" class="a_4">{{list.pfp}}</a>
                    <a href=""><img :src="list.dtimg"></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getClassHomeSeckill} from '@/api'
export default {
  data () {
    return {
      ClassHomeSeckill: []
    }
  },
  methods: {

  },
  async created () {
    this.ClassHomeSeckill = await getClassHomeSeckill()
  }
}
</script>

<style scoped lang='less'>
    .big{
        .box_1{
            padding: 8px;
            background: #fff;
            border: 5px solid #f6f6f6;
            box-sizing: border-box;
            border-bottom: 10px solid #ebebeb;
            .img_1{
                width: 100%;
            }
            .img_2{
                width: 50%;
                margin-top:10px;
            }
            .ul_1{
                float: right;
                width: 50%;
                padding: 10px;
                box-sizing: border-box;
                .li_1{
                    border-bottom: 1px solid #666666;
                    position: relative;
                    padding-bottom: 8px;
                    box-sizing: border-box;
                    a{
                    display: block;
                    }
                    a:hover{
                        text-decoration: none;
                    }
                    .a_1,.a_3,.a_4{
                        font-size: 12px;
                        color: #666666;
                        margin-top: 5px;
                    }
                    .a_2{
                        font-size: 16px;
                        color: #7b51ff;
                        margin-top: 10px;
                    }
                    img{
                        width: 40%;
                        float: right;
                        position: absolute;
                        top: 30%;
                        right: 5%;
                    }
                }
                .li_2{
                    position: relative;
                    padding-bottom: 8px;
                    box-sizing: border-box;
                    a{
                    display: block;
                    }
                    a:hover{
                        text-decoration: none;
                    }
                    .a_1,.a_3,.a_4{
                        font-size: 12px;
                        color: #666666;
                        margin-top: 5px;
                    }
                    .a_2{
                        font-size: 16px;
                        color: #ff5465;
                        margin-top: 10px;
                    }
                    img{
                        width: 40%;
                        float: right;
                        position: absolute;
                        top: 30%;
                        right: 5%;
                    }
                }
            }
        }
    }

</style>
