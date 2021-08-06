import appNavbar from '../app-navbar/index'

export default {
  namespaced: true,
  state: {
    system: [{

      paymentSystems: [
        {
          id: 103,
          title: 'Банковские карты',
          icons: 'credit',
          min_summ: [
            {
              item: 'usd',
              value: 1,
            },
            {
              item: 'eur',
              value: 1,
            },
            {
              item: 'rub',
              value: 100,
            },

          ],
          max_summ: [
            {
              item: 'usd',
              value: 100000,
            },
            {
              item: 'eur',
              value: 100000,
            },
            {
              item: 'rub',
              value: 10000000,
            },

          ],
          system: 3,
        },
        {
          id: 173,
          title: 'Qiwi',
          icons: 'Qiwi',
          procent: 1.05,
          min_summ: [
            {
              item: 'usd',
              value: 1,
            },
            {
              item: 'eur',
              value: 1,
            },
            {
              item: 'rub',
              value: 100,
            },

          ],
          max_summ: [
            {
              item: 'usd',
              value: 100000,
            },
            {
              item: 'eur',
              value: 100000,
            },
            {
              item: 'rub',
              value: 10000000,
            },

          ],
          system: 4,
        },
      ],
      card: [
        {
          id: 10,
          title: 'VISA',
          icons: 'VISA',
          procent: 3.09,
          min_summ: [
            {
              item: 'usd',
              value: 1,
            },
            {
              item: 'eur',
              value: 1,
            },
            {
              item: 'rub',
              value: 100,
            },

          ],
          max_summ: [
            {
              item: 'usd',
              value: 100000,
            },
            {
              item: 'eur',
              value: 100000,
            },
            {
              item: 'rub',
              value: 10000000,
            },

          ],
          system: 1,
        },
        {
          id: 11,
          title: 'MasterCard',
          icons: 'MasterCard',
          procent: 2.89,
          min_summ: [
            {
              item: 'usd',
              value: 1,
            },
            {
              item: 'eur',
              value: 1,
            },
            {
              item: 'rub',
              value: 100,
            },

          ],
          max_summ: [
            {
              item: 'usd',
              value: 100000,
            },
            {
              item: 'eur',
              value: 100000,
            },
            {
              item: 'rub',
              value: 10000000,
            },

          ],
          system: 1,
        },
        {
          id: 12,
          title: 'Maestro',
          icons: 'Maestro',
          procent: 2.99,
          min_summ: [
            {
              item: 'usd',
              value: 1,
            },
            {
              item: 'eur',
              value: 1,
            },
            {
              item: 'rub',
              value: 100,
            },

          ],
          max_summ: [
            {
              item: 'usd',
              value: 100000,
            },
            {
              item: 'eur',
              value: 100000,
            },
            {
              item: 'rub',
              value: 10000000,
            },

          ],
          system: 1,
        },

      ],

      paymentsystems: [
        {
          id: 13,
          title: 'Bitcoin',
          icons: 'Bitcoin',
          crypt: 'BTC',
          procent: 1.01,
          min_summ: [
            {
              item: 'usd',
              value: 1,
            },
            {
              item: 'eur',
              value: 1,
            },
            {
              item: 'rub',
              value: 100,
            },

          ],
          max_summ: [
            {
              item: 'usd',
              value: 100000,
            },
            {
              item: 'eur',
              value: 100000,
            },
            {
              item: 'rub',
              value: 10000000,
            },

          ],
          system: 2,
        },
        {
          id: 14,
          title: 'Litecoin',
          icons: 'Litecoin',
          crypt: 'LTC',
          procent: 1.02,
          min_summ: [
            {
              item: 'usd',
              value: 1,
            },
            {
              item: 'eur',
              value: 1,
            },
            {
              item: 'rub',
              value: 100,
            },

          ],
          max_summ: [
            {
              item: 'usd',
              value: 100000,
            },
            {
              item: 'eur',
              value: 100000,
            },
            {
              item: 'rub',
              value: 10000000,
            },

          ],
          system: 2,
        },
        {
          id: 15,
          title: 'Etherium',
          icons: 'Etherium',
          crypt: 'ETH',
          procent: 1.03,
          min_summ: [
            {
              item: 'usd',
              value: 1,
            },
            {
              item: 'eur',
              value: 1,
            },
            {
              item: 'rub',
              value: 100,
            },

          ],
          max_summ: [
            {
              item: 'usd',
              value: 100000,
            },
            {
              item: 'eur',
              value: 100000,
            },
            {
              item: 'rub',
              value: 10000000,
            },

          ],
          system: 2,
        },
        {
          id: 16,
          title: 'Tether',
          icons: 'Tether',
          crypt: 'USDT',
          procent: 1.04,
          min_summ: [
            {
              item: 'usd',
              value: 1,
            },
            {
              item: 'eur',
              value: 1,
            },
            {
              item: 'rub',
              value: 100,
            },

          ],
          max_summ: [
            {
              item: 'usd',
              value: 100000,
            },
            {
              item: 'eur',
              value: 100000,
            },
            {
              item: 'rub',
              value: 10000000,
            },

          ],
          system: 2,
        },
        {
          id: 17,
          title: 'Qiwi',
          icons: 'Qiwi',
          crypt: 'USD',
          procent: 1.05,
          min_summ: [
            {
              item: 'usd',
              value: 1,
            },
            {
              item: 'eur',
              value: 1,
            },
            {
              item: 'rub',
              value: 100,
            },

          ],
          max_summ: [
            {
              item: 'usd',
              value: 100000,
            },
            {
              item: 'eur',
              value: 100000,
            },
            {
              item: 'rub',
              value: 10000000,
            },

          ],
          system: 2,
        },
        {
          id: 18,
          title: 'Adwcash',
          icons: 'Adwcash',
          crypt: 'USD',
          procent: 1.06,
          min_summ: [
            {
              item: 'usd',
              value: 1,
            },
            {
              item: 'eur',
              value: 1,
            },
            {
              item: 'rub',
              value: 100,
            },

          ],
          max_summ: [
            {
              item: 'usd',
              value: 100000,
            },
            {
              item: 'eur',
              value: 100000,
            },
            {
              item: 'rub',
              value: 10000000,
            },

          ],
          system: 2,
        },
      ],
    }],
    cryptocurrency: [
      {
        id: 1,
        token: 'BTC',
        icons: 'BTC',
        summ_token: 0.00000000,
        summ_rub: 0.00,
        img_height: 19,
      },
      {
        id: 2,
        token: 'LTC',
        icons: 'LTC',
        summ_token: 0.00000000,
        summ_rub: 0.00,
        img_height: 19,
      },
      {
        id: 3,
        token: 'BCH',
        icons: 'BCH',
        summ_token: 0.00000000,
        summ_rub: 0.00,
        img_height: 19,
      },
      {
        id: 4,
        token: 'XMR',
        icons: 'XMR',
        summ_token: 0.00000000,
        summ_rub: 0.00,
        img_height: 20,
      },
      {
        id: 5,
        token: 'ETH',
        icons: 'ETH',
        summ_token: 0.00000000,
        summ_rub: 0.00,
        img_height: 19,
      },
      {
        id: 6,
        token: 'USDT',
        icons: 'USDT',
        summ_token: 0.00000000,
        summ_rub: 0.00,
        img_height: 19,
      },
    ],
    fiatcurrency: [
      {
        id: 7,
        token: 'USD',
        icons: 'USD',
        summ_cost: 0.00,
        summ_rub: 0.00,
        img_height: 18,
      },
      {
        id: 8,
        token: 'EUR',
        icons: 'EUR',
        summ_cost: 0.00,
        summ_rub: 0.00,
        img_height: 18,
      },
      {
        id: 9,
        token: 'RUB',
        icons: 'RUB',
        summ_cost: 0.00,
        summ_rub: 0.00,
        img_height: 18,
      },
    ],

  },
  getters: {
    filterFiatcurrency: state => state.fiatcurrency.find(todo => todo.token === appNavbar.state.curency),
  },
  actions: {},
  mutations: {

  },
}
