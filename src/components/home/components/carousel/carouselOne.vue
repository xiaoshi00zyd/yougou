<template>
    <div>
      TEST1
    </div>
</template>

<script>
export default {
  data () {
    return {
      num: null
    }
  },
  methods: {

  },
  created () {
    this.num = this.$route.params.id
    console.log(this.num)
  }
}
</script>

<style scoped>

</style>
