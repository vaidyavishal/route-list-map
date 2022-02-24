import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 10
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
      count: (state) => {
        return state.count
      }
  }
})
export default store
