import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: 'Francis',
    age: 25,
  },
  getters: {
    showAge(state) {
      return state.age + ' years old'
    },
    showName(state) {
      return state.name
    }
  },
  mutations: {
    addOne(state) {
      state.age++
    },
    restOne(state) {
      state.age--
    },
    swapName(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    addOne({ commit }) {
      setTimeout(() => {
        commit('addOne')
      }, 2000)
    },
    restOne({ commit }) {
      setTimeout(() => {
        commit('restOne')
      }, 2000)
    },
    swapName({ commit }, payload) {
      setTimeout(() => {
        commit('swapName', payload)
      }, 2000)
    },
  }
});

