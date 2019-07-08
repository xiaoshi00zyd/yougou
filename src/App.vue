<template>
  <div id="app">
    <bottomnav></bottomnav>
    <router-view/>
  </div>
</template>

<script>
import bottomnav from '@/common/bottomnav.vue'
export default {
  name: 'App',
  components: {
    bottomnav
  }
}
</script>

<style>
  html,body{
    height: 100%;
  }
  #app{
    height: 100%;
  }
</style>
