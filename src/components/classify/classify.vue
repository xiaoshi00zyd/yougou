<template>
    <div>
        <!-- 搜索头 -->
        <Title @more='gmore'></Title>
        <div class="boxOne"></div>
        <!-- 隐藏栏 -->
        <div v-show="control" class="boxS">
          <Hide :hide='control'></Hide>
        </div>
        <!-- 选项 -->
        <div class="box">
          <div class="box1">
              <ClassifyOne @hideOne='one'></ClassifyOne>
          </div>
          <div class="boxTwo"></div>
        <!-- 选项显示页 -->
        <OptionGroup class="box2" :d='hides'></OptionGroup>
        </div>
    </div>
</template>

<script>
import Title from './components/title.vue'
// import Hide from './components/hide.vue'
import Hide from '@/public/hide'
import ClassifyOne from './components/classifyone.vue'
import OptionGroup from './components/optionGroup.vue'

export default {
  data () {
    return {
      control: false,
      hides: 0
    }
  },
  methods: {
    gmore () {
      this.control = !this.control
    },
    one (index) {
      this.hides = index
    }
  },
  created () {

  },
  components: {
    Title,
    Hide,
    ClassifyOne,
    OptionGroup
  }
}
</script>

<style scoped>
  .boxOne {
    height: 90px;
    width: 100%;
  }
  .box {
    width: 100%;
    /* max-width: 1600px; */
    margin: 0 auto;
    display: flex;
  }
  .box1 {
    width: 25%;
    /* flex: 0.25; */
    position: fixed;
  }
  .boxTwo {
    width: 25%;
  }
  .box2 {
    /* flex: 0.75; */
    width: 75%;
  }
  .boxS{
     width:100%;
    height: 98px;
  }
</style>
