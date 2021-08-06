export default {
  namespaced: true,

  state: {
    chatheight: 570,
    togg: true,
    data: [{
      profileUser: {
        id: 11,
        avatar: '13.png',
        fullName: 'ivan-nikitin',
        role: 'admin',
        about:
                  'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
        status: 'online',
        settings: {
          isTwoStepAuthVerificationEnabled: true,
          isNotificationsOn: false,
        },
      },
      contacts: [
        {
          id: 2,
          fullName: 'Менеджер поддержки',
          role: 'Менеджер поддержки',
          about: '',
          avatar: '1.png',
          status: 1,
        },

      ],

      chats: [
        {
          id: 2,
          userId: 2,
          unseenMsgs: 8,
          statusform: true,
          chat: [
            {
              message: '10 Декабря 2018',
              time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
              senderId: 100,

            },
            {
              message: 'Добрый день, возникает ошибка при выводе стредств с рублевого счета 🙁',
              time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
              senderId: 11,
            },
            {
              message: 'Здравствуйте, Иван, мы уже занимаемся решением вашей задачи, пожалуйста сообщите id операции',
              time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
              senderId: 2,
            },
            {
              message: 'id12389142',
              time: 'Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)',
              senderId: 11,
            },
            {
              message: 'Пробовал вывести два раза, всеравно не получается',
              time: 'Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)',
              senderId: 11,
            },
            {
              message: 'Дайте нам пять минут',
              time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
              senderId: 2,
            },
            {
              message: 'Иван, мы все исправили!',
              time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
              senderId: 2,
            },
            {
              message: 'Попробуйте еще раз',
              time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)',
              senderId: 2,
            },
            {
              message: 'Сейчас попробую',
              time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)',
              senderId: 11,
            },
            {
              message: 'Напишите если ошибка будет повторяться',
              time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)',
              senderId: 2,
            },
            {
              message: 'Хорошего вам дня 🙂',
              time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)',
              senderId: 2,
            },
            {
              message: '12 Декабря 2018',
              time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
              senderId: 100,

            },
            {
              message: 'Всегда рады помочь!',
              time: 'Wed Dec 12 2018 07:40:53 GMT+0000 (GMT)',
              senderId: 11,
            },
            {
              message: 'Сегодня',
              time: 'Mon Dec 12 2018 07:45:00 GMT+0000 (GMT)',
              senderId: 100,

            },
            {
              message: 'Спасибо',
              time: 'Wed Dec 12 2018 07:46:53 GMT+0000 (GMT)',
              senderId: 11,
            },
          ],
        },

      ],

    }],
    profileUser: [{}],
    chatsContacts: [],
    resolvedchatsContacts: [],

  },
  getters: {},
  mutations: {

    chatHeight(state, request) {
      state.chatheight = request
    },
    toggle(state, request) {
      state.togg = request
    },
    sendMessagePush(state, request) {
      state.data[0].chats[0].chat.push({
        message: request.message,
        time: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
        senderId: 11,
      })
    },

  },
  actions: {
    sendMessage({ commit }, payload) {
      commit('sendMessagePush', payload)
    },
  },
}
