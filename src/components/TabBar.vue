<template>
  <yd-tabbar slot="tabbar" v-show="$route.meta.tabShow">
    <yd-tabbar-item :title="item.title" :link="item.link" :key="index" :active="item.active"  v-for="(item, index) in tabs">
      <yd-icon :name="item.icon_name" slot="icon"></yd-icon>
    </yd-tabbar-item>
  </yd-tabbar>
</template>
<script>
export default {
  data () {
    return {
      tabs: [
        {title: '首页', link: '/home', icon_name: 'home', active: true},
        {title: '购物车', link: '/map', icon_name: 'shopcart-outline', active: false},
        {title: '个人中心', link: '#', icon_name: 'ucenter-outline', active: false}
      ]
    }
  },
  // 首次进入页面显示页面title及选中
  mounted () {
    if (this.$route.meta.title) {
      document.title = this.$route.meta.title
    }
    for (let k in this.tabs) {
      if (this.tabs[k].link === this.$route.path) {
        this.tabs[k].active = true
      } else {
        this.tabs[k].active = false
      }
    }
  },
  // 监听路由变化 修改选中
  watch: {
    '$route' () {
      for (let k in this.tabs) {
        if (this.tabs[k].link === this.$route.path) {
          this.tabs[k].active = true
        } else {
          this.tabs[k].active = false
        }
      }
    }
  }
}
</script>
<style scoped>
</style>
