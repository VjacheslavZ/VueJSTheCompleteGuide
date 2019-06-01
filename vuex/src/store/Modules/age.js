const myAge = {
  state: {
    age: 25,
  },
  getters: {
    showAge(state) {
      return state.age + ' years old'
    },
  },
  mutations: {
    addOne(state) {
      state.age++
    },
    restOne(state) {
      state.age--
    },
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
  }
};

export default myAge;
