<template>
  <yd-layout id="app">
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>

    <tabbar slot="tabbar" v-show="$route.meta.tabShow"></tabbar>
  </yd-layout>
</template>

<script>
import tabbar from './components/TabBar.vue'
export default {
  name: 'App1',
  components: {
    tabbar
  }
}
</script>
<style scoped>
  *{
    font-family: "微软雅黑";
    padding:0;
    margin:0;
  }
  html,body{
    overflow: hidden;
    margin: 0;
    padding: 0px;
    width: 100%;
    height:100%;
    position: absolute;
  }
</style>
