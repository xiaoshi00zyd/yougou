<template>
  <div class="test">
      <ul>
          <li v-for="(a,index) in msg" :key="index" ref="bbb" @click="bian(index)" :class="{active:aindex===index}">
              {{a}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: [1, 2, 3, 4, 5, 6],
      aindex: ''
    }
  },
  methods: {
    bian (index) {
      this.aindex = index
    }
  }
}
</script>

<style scoped>
.test{
    width: 100%;
    height: 300px;
}
li{
    width: 30px;
    background: gray;
    color: white;
}
.active{
    background: yellowgreen
}
</style>
