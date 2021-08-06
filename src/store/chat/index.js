export default {
  namespaced: true,
  state: {
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
          id: 1,
          fullName: 'Не получается вы...',
          role: 'Не получается вывести деньги на карту ',
          about: '',
          avatar: 'icon-chart-2.svg',
          status: 1,
        },

        {
          id: 2,
          fullName: 'Размер комиссии',
          role: 'Размер комиссии',
          about: '',
          avatar: 'icon-chart-2.svg',
          status: 2,
        },
        {
          id: 3,
          fullName: 'Не вижу последние оп..',
          role: 'Не вижу последние оплаты',
          about: '',
          avatar: 'icon-chart.svg',
          status: 3,
        },

      ],

      resolvedcontacts: [
        {
          id: 10,
          fullName: 'Не корректно отобра...',
          role: 'Не корректно отображается ',
          about: '',
          avatar: 'icon-chart.svg',
          status: 10,
        },

        {
          id: 12,
          fullName: 'Как получить карту дл...',
          role: 'Как получить карту для физ лица',
          about: '',
          avatar: 'icon-chart-2.svg',
          status: 12,

        },

      ],
      chats: [
        {
          id: 1,
          userId: 2,
          unseenMsgs: 8,
          statusform: true,
          chat: [
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
              message: 'Всегда рады помочь!',
              time: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
              senderId: 11,
            },
          ],
        },
        {
          id: 2,
          userId: 1,
          unseenMsgs: 0,
          statusform: true,
          chat: [
            {
              message: 'Добрый день, возникает ошибка при выводе стредств с рублевого счета 🙁',
              time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
              senderId: 11,
            },
            {
              message: 'Здравствуйте, Иван, мы уже занимаемся решением вашей задачи, пожалуйста сообщите id операции',
              time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
              senderId: 1,
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
              senderId: 1,
            },
            {
              message: 'Иван, мы все исправили!',
              time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
              senderId: 1,
            },
            {
              message: 'Попробуйте еще раз',
              time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)',
              senderId: 1,
            },
            {
              message: 'Сейчас попробую',
              time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)',
              senderId: 11,
            },
            {
              message: 'Напишите если ошибка будет повторяться',
              time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)',
              senderId: 1,
            },
            {
              message: 'Хорошего вам дня 🙂',
              time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)',
              senderId: 1,
            },
            {
              message: 'Спасибо, все работает!',
              time: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
              senderId: 11,
            },
          ],
        },
        {
          id: 3,
          userId: 3,
          unseenMsgs: 3,
          statusform: true,
          chat: [
            {
              message: 'Добрый день, возникает ошибка при выводе стредств с рублевого счета 🙁',
              time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
              senderId: 11,
            },
            {
              message: 'Здравствуйте, Иван, мы уже занимаемся решением вашей задачи, пожалуйста сообщите id операции',
              time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
              senderId: 3,
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
              senderId: 3,
            },
            {
              message: 'Иван, мы все исправили!',
              time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
              senderId: 3,
            },
            {
              message: 'Попробуйте еще раз',
              time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)',
              senderId: 3,
            },
            {
              message: 'Сейчас попробую',
              time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)',
              senderId: 11,
            },
            {
              message: 'Напишите если ошибка будет повторяться',
              time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)',
              senderId: 3,
            },
            {
              message: 'Хорошего вам дня 🙂',
              time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)',
              senderId: 3,
            },
            {
              message: 'Последние операции вы мо...',
              time: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
              senderId: 11,
            },
          ],
        },

      ],

      resolvedchats: [{
        id: 10,
        userId: 10,
        unseenMsgs: 0,
        statusform: false,
        chat: [
          {
            message: 'Добрый день, возникает ошибка при выводе стредств с рублевого счета 🙁',
            time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
            senderId: 11,
          },
          {
            message: 'Здравствуйте, Иван, мы уже занимаемся решением вашей задачи, пожалуйста сообщите id операции',
            time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
            senderId: 10,
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
            senderId: 10,
          },
          {
            message: 'Иван, мы все исправили!',
            time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
            senderId: 10,
          },
          {
            message: 'Попробуйте еще раз',
            time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)',
            senderId: 10,
          },
          {
            message: 'Сейчас попробую',
            time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)',
            senderId: 11,
          },
          {
            message: 'Напишите если ошибка будет повторяться',
            time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)',
            senderId: 10,
          },
          {
            message: 'Хорошего вам дня 🙂',
            time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)',
            senderId: 10,
          },
          {
            message: 'Спасибо, получилось!',
            time: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
            senderId: 11,
          },
        ],
      },
      {
        id: 12,
        userId: 12,
        unseenMsgs: 0,
        statusform: false,
        chat: [
          {
            message: 'Добрый день, возникает ошибка при выводе стредств с рублевого счета 🙁',
            time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
            senderId: 11,
          },
          {
            message: 'Здравствуйте, Иван, мы уже занимаемся решением вашей задачи, пожалуйста сообщите id операции',
            time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
            senderId: 12,
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
            senderId: 12,
          },
          {
            message: 'Иван, мы все исправили!',
            time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
            senderId: 1,
          },
          {
            message: 'Попробуйте еще раз',
            time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)',
            senderId: 12,
          },
          {
            message: 'Сейчас попробую',
            time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)',
            senderId: 11,
          },
          {
            message: 'Напишите если ошибка будет повторяться',
            time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)',
            senderId: 12,
          },
          {
            message: 'Хорошего вам дня 🙂',
            time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)',
            senderId: 12,
          },
          {
            message: 'Также вы можете сделать...',
            time: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
            senderId: 12,
          },
        ],
      }],

    }],
    profileUser: [{}],
    chatsContacts: [],
    resolvedchatsContacts: [],

  },
  getters: {},
  mutations: {

    sendMessagePush(state, request) {
      state.data[0].chats.find(c => c.id === request.id).chat.push({
        message: request.message,
        time: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
        senderId: 11,
      })
    },

    profileUsers(state) {
      state.chatsContacts = state.data[0].chats.map(chat => {
        const contact = state.data[0].contacts.find(c => c.status === chat.userId)
        contact.chat = { id: chat.id, unseenMsgs: chat.unseenMsgs, lastMessage: chat.chat[chat.chat.length - 1] }
        return contact
      })
        .reverse()

      state.resolvedchatsContacts = state.data[0].resolvedchats.map(chat => {
        const contact = state.data[0].resolvedcontacts.find(c => c.status === chat.userId)
        contact.chat = { id: chat.id, unseenMsgs: chat.unseenMsgs, lastMessage: chat.chat[chat.chat.length - 1] }
        return contact
      })
        .reverse()

      state.profileUser = [{
        id: state.data[0].profileUser.id,
        avatar: state.data[0].profileUser.avatar,
        fullName: state.data[0].profileUser.fullName,
        status: state.data[0].profileUser.status,
      }]
    },

  },
  actions: {
    sendMessage({ commit }, payload) {
      commit('sendMessagePush', payload)
      commit('profileUsers')
    },
  },
}
