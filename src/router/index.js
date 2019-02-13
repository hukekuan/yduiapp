import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: resolve => require(['../components/Home.vue'], resolve),
      meta: {
        title: '首页',
        navShow: false,
        tabShow: true,
        keepAlive: false
      }
    },
    {
      path: '/map',
      component: resolve => require(['../components/Map.vue'], resolve),
      meta: {
        title: '购物车',
        navShow: false,
        tabShow: true,
        keepAlive: false
      }
    }
  ]
})
