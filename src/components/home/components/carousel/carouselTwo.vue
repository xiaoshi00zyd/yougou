<template>
    <div>
      <img :src="obj.img">
    </div>
</template>

<script>
import {getHomeBanner} from '@/api'
export default {
  data () {
    return {
      num: null,
      testList: [],
      obj: []
    }
  },
  methods: {

  },
  async created () {
    this.num = this.$route.params.id
    this.testList = await getHomeBanner()
    this.obj = this.testList[this.num]
  }
}
</script>

<style scoped>

</style>
