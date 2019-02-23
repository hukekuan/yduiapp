import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  // base: '/yduiapp/',
  base: '/',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/pcmap',
      component: resolve => require(['../pages/Map.vue'], resolve)
    },
    {
      path: '/login',
      component: resolve => require(['../pages/LogIn.vue'], resolve)
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
router.beforeEach((to, from, next) => {
  let token = store.state.auth.token
  if ((token === null || token === '') && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})

export default router
