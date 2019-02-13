<template>
  <h1>这是 hello 组件，这是消息：{{msg}} --- {{myMsg}}</h1>
</template>

<script>
export default {
  data () {
    return {
//      msg: 'Welcome to Your Vue.js App',
//      myMsg:'8080'
    }
  },
  props: ['msg', 'myMsg']
}
</script>

<style scoped>
</style>
