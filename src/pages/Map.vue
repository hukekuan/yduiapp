<template>
  <div>
    <olmap></olmap>
    <maptool></maptool>
    <home style="display: none" class="home"></home>
  </div>
</template>

<script>
import olmap from '../components/OLMap.vue'
import maptool from '../components/MapTool.vue'
import home from '../components/Home.vue'
export default {
  name: 'Map',
  components: {olmap, maptool, home}
}
</script>

<style scoped>
</style>
