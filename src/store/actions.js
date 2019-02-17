const actions = {
  login (state, userInfo) {
    state.auth.dispatch('login', userInfo)
  }
}

export default actions
