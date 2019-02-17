import axios from 'axios'

const auth = {
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  getters: {
    status: state => state.status,
    token: state => state.state.token
  },
  mutations: {
    SET_STSTUS: (state, status) => {
      state.status = status
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    login ({ commit, state }, userInfo) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.API_ROOT + '/sys/tokenlogin', {
          'username': userInfo.username,
          'password': userInfo.password
        }).then((resp) => {
          const data = resp.data
          commit('SET_STSTUS', 'success')
          commit('SET_TOKEN', data.token)
          window.localStorage.setItem('token', data.token)

          console.log('============ ' + localStorage.getItem('token') + ' ============')
          // self.$router.push('/home')
          resolve(resp)
        }).catch(err => {
          commit('SET_STSTUS', 'error')
          commit('SET_TOKEN', undefined)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    }
  }
}

export default auth
