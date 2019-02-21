<template>
  <div>
    <yd-button @click.native="openConfrim" size="large">Confirm</yd-button>
    <yd-button size="large" type="danger">danger</yd-button>
    <yd-button size="large" type="warning">warning</yd-button>
    <yd-button size="large" type="disabled" disabled>disabled</yd-button>
    <yd-button size="large" type="hollow">hollow</yd-button>
    <yd-button size="large" bgcolor="#000" color="#FFF">Custom Color</yd-button>
    <hello @pfn1="parentFn"></hello>
  </div>
</template>

<script>
import { mapState, mapMutations, actions } from 'vuex'
import hello from './HelloWorld.vue'
export default {
  name: 'Home',
  components: {hello},
  data () {
    return {
      message: {
        tabs: 1,
        ids: ['31', '32']
      }
    }
  },
  methods: {
    openConfrim () {
      this.$dialog.confirm({
        title: '选填标题',
        mes: '我有一个小毛驴我从来也不骑！',
        opts: () => {
          this.$dialog.toast({mes: '你点了确定', timeout: 1000})
        }
      })
    },
    parentFn (data) {
      console.log('token：', this.$store.state.auth.token)
      console.log('父组件：', data)
    }
  }
}
</script>

<style scoped>
</style>
