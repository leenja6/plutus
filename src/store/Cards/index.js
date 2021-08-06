export default {
  namespaced: true,
  state: {
    cards: [
      {
        id: 1,
        type: 'RUB',
        number: '4276 5678 1234 2865',
        expiration:
                {
                  from: '06',
                  to: 2021,
                },
        name: 'Ivan Nikitin',
        namecard: 'АльфаБанк',

      },
      {
        id: 2,
        type: 'USD',
        number: '4276 5678 1234 2864',
        expiration:
                {
                  from: '07',
                  to: 2021,
                },
        name: 'Ivan Nikitin',
        namecard: 'Cбербанк',
      },

    ],
  },
  getters: {

  },
  actions: {},
  mutations: {
    deleteCard(state, item) {
      state.cards = state.cards.filter(c => c.id !== item)
    },
    addCard(state, request) {
      state.cards.push(request)
    },
    editCard(state, request) {
      console.log(request)
    },
  },
}
