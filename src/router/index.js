import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      redirect: '/map'
    },
    {
      path: '/main1',
      component: resolve => require(['../components/HelloWorld.vue'], resolve)
    },
    {
      path: '/map',
      component: resolve => require(['../components/OLMap.vue'], resolve)
    }
  ]
})
