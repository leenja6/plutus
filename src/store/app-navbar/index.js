export default {
  namespaced: true,
  state: {
    curency: 'USD',
  },
  getters: {},
  actions: {},
  mutations: {
    updateCurency(state, items) {
      state.curency = items
    },
  },
}
