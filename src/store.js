import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    target: {
      name: 'Cory',
      number: 0
    }
  },
  mutations: {
    //first value on every mutation is state
    attack(state, payload) {
      state.target.number += payload
    }
  },
  actions: {

    //first parameter on every action is {commit, dispatch}
    attack({ commit, dispatch }, payload) {
      commit('attack', payload)
    }
  }
})
