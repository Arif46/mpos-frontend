import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

import state from './index'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

import Configuration from '../modules/configuration/store'
import Stock from '../modules/stock/store'
import Sales from '../modules/sales/store'
import Report from '../modules/report/store'
import Account from '../modules/account/store'

export default new Vuex.Store({
  modules: {
    Configuration,
    Stock,
    Sales,
    Report,
    Account
  },
  state,
  actions,
  mutations,
  getters,
  plugins: [createPersistedState()]
})
