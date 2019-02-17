import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './actions'
// import getters from './getters'
import auth from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth: auth
  }
  // , actions,
  // getters
})

export default store
