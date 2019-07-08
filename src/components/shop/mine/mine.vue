<template>
    <div>
        <!-- 搜索头 -->
        <Title @more='gmore'></Title>
        <div class="boxOne"></div>
        <!-- 隐藏栏 -->
        <div v-show="control" class="boxS">
          <Hide :m='control'></Hide>
        </div>
        <!-- 选项 -->
        <div class="box">
          <div class="box1">
              <Classify @hideOne='one'></Classify>
          </div>
          <div class="boxTwo"></div>
        <!-- 选项显示页 -->
        <OptionGroup class="box2" :d='hides'></OptionGroup>
        </div>
    </div>
</template>

<script>
import Title from './components/title.vue'
import Hide from './components/hide.vue'
import Classify from './components/classify.vue'
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
    Classify,
    OptionGroup
  }
}
</script>

<style scoped>
  .boxOne {
    height: 45px;
    width: 100%;
  }
  .box {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
  }
  .box1 {
    flex: 0.25;
    position: fixed;
  }
  .boxTwo {
    flex: 0.25;
  }
  .box2 {
    flex: 0.75;
  }
  .boxS{
     width:100%;
    height: 49px;
  }
</style>
