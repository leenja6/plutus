import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/Home.vue'),
      props: true,
    },
    {
      path: '/balance',
      name: 'balance',
      component: () => import('@/views/Balance/BalancePage.vue'),
      props: true,
    },
    {
      path: '/topup',
      name: 'topup',
      component: () => import('@/views/TopUp/TopUpPage.vue'),
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: () => import('@/views/Transfer/TransferPage.vue'),
      props: true,
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: () => import('@/views/Exchange/ExchangePage.vue'),
      props: true,
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('@/views/Cards/CardsPage.vue'),
      props: true,
    },
    {
      path: '/cheque',
      name: 'cheque',
      component: () => import('@/views/ChequePage.vue'),
      props: true,
    },
    {
      path: '/score',
      name: 'score',
      component: () => import('@/views/ScorePage.vue'),
      props: true,
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('@/views/History/History.vue'),
      props: true,
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/Settings/SettingsPage.vue'),
      props: true,
    },
    {
      path: '/logs',
      name: 'logs',
      component: () => import('@/views/Logs/LogsPage.vue'),
      props: true,
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('@/views/faq/FaqPage.vue'),
      props: true,
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/views/chat/Chat.vue'),
      meta: {
        contentRenderer: 'sidebar-left',
        contentClass: 'chat-application',
      },
      props: true,
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
      props: true,
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

export default router
