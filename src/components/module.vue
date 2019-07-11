<template>
    <div>
        test1
    </div>
</template>

<script>
import {getHomeBanner} from '@/api'
export default {
  data () {
    return {
      bigList: [],
      list: []
    }
  },
  methods: {

  },
  async created () {
    this.bigList = await getHomeBanner()
    this.list = this.bigList[this.$route.params.id]
    this.$store.dispatch('setTitleFn', this.list.title)
  }
}
</script>

<style scoped>

</style>
