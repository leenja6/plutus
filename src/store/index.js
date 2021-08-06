import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import appNavbar from './app-navbar'
import verticalMenu from './vertical-menu'
import viewsBalance from './viewsBalance'
import viewsFaq from './faq/index'
import viewschat from './chat/index'
import viewschats from './chat/chat'
import viewsHistory from './viewsHistory/index'
import viewsCards from './Cards/index'
import viewsLogs from './viewsLogs/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    appNavbar,
    viewsBalance,
    viewsFaq,
    viewschat,
    viewschats,
    viewsHistory,
    viewsCards,
    viewsLogs,
  },
  strict: process.env.DEV,
})
