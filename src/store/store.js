import Vue from 'vue'
import Vuex from 'vuex'
import app from '../main.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  mutations: {
    SET_LANG (state, payload) {
      app.$i18n.locale = payload
    }
  },
  actions: {
    setLang({commit}, payload) {
      commit('SET_LANG', payload)
    }
  }
})
