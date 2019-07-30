import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    dashBoard: {
      status: {
        campaign: true,
        adgroups: false,
        ads: false
      },
      data: {
        adgroups: null,
        ads: null
      }
    },
  }
})
