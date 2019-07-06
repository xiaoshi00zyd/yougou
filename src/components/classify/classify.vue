<template>
    <div class="ify">
      <catenav></catenav>
      <cateContent></cateContent>
    </div>
</template>
<script>

import cateContent from './components/cateContent'
import catenav from './components/cateNav'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    cateContent,
    catenav
  }
}
</script>
<style scoped>
  .ify{
    height: 100%;
  }
</style>
