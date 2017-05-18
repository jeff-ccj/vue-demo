
// initial state
const state = {
  count: 0
}

// getters
const getters = {
}

// actions
const actions = {
  getNum ({ commit }) {
    commit('increment')
  }
}

// mutations
const mutations = {
  increment (state) {
    console.log(state.count)
    state.count++
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
