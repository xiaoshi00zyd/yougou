<template>
    <div class="content">
        <div class="fengxiaobiao">
            <div class="ygIndexCountHourTi">
                <div class="ygIndexCountHourTiP">
                    <p>时尚风向标</p>
                </div>
            </div>
        </div>
        <div v-for="(item,id) in faxianlist" :key="id" class="one">
            <dl>
                <a href="">
                    <dt>{{item.title}}</dt>
                    <dd class="picture">
                        <img :src="item.find_img" alt="">
                    </dd>
                    <dd class="introduce">{{item.bottom_introduce}}</dd>
                </a>
            </dl>
        </div>
    </div>
</template>

<script>
import {getDiscover} from '@/api'
export default {
  props: {

  },
  data () {
    return {
      faxianlist: [

      ]
    }
  },
  computed: {

  },
  async created () {
    this.faxianlist = await getDiscover()
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

<style scoped>
.fengxiaobiao{
    width: 100%;
    background: #EEEEEE;
    text-align: center;
    padding-top:20px;
}
.ygIndexCountHourTi {
    width: 50%;
    text-align: center;
    border-top: 1px solid #ccc;
    height: 20px;
    margin: 0 auto;
    position: relative;
}
.ygIndexCountHourTiP{
    position: absolute;
    top: -12px;
    left: 0;
    width: 100%;
}
.ygIndexCountHourTiP p {
    background-color: #eee;
    font-size: 15px;
    padding: 0 10px;
    font-weight: 400;
    display: inline-block;
    min-width: 1%;
    max-width: 80%;
    color: #333;
    box-sizing: border-box;
    position: relative;
    white-space: normal;
    height: 18px;
    margin: 0 auto;
}
.content {
    background:#EEEEEE;
}
.content .one{
    margin-bottom:18px;
}
.content a {
    display: block;
    width: calc(100%-26px);
    background:#FFFFFF;
    padding: 0 16px 10px;
}
.one img {
    display: block;
    width: 100%;
    margin: auto
}
.one dt {
    font-size: 14px;
    padding: 10px 0;
    color:#333;
}
.introduce {
    color:#a0a0a0;
    font-size: 12px;
}
.picture {
    padding-bottom:10px;
}
</style>
