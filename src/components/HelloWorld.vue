<template>
  <!--<h1>这是 hello 组件，{{info}}：{{messageObj.tabs}} -&#45;&#45; {{messageObj.ids}}</h1>-->
  <button @click="fn" id="hello">按钮</button>
</template>

<script>
export default {
  data () {
    return {
      info: 'this is message'
    }
  },
  methods: {
    fn () {
      this.$emit('pfn1', '这是子组件传递给父组件的数据')
    }
  }
  // , props: ['messageObj']
}
</script>

<style scoped>
</style>
