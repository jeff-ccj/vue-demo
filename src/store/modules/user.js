import user from '../../api/user'

// initial state
const state = {
  user: {}
}

// getters
const getters = {
}

// actions
const actions = {
  login ({ commit }) {
    user.login(function (userInfo) {
      commit('setUserInfo', {userInfo})
    })
  }
}

// mutations
const mutations = {
  setUserInfo (state, { userInfo }) {
    state.user = userInfo
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
