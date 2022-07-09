import { createStore } from 'vuex'

export default createStore({
  state: {
    favorites: [
    ]
  },
  getters: {
  },
  mutations: {
    addFavorite(state, data){
        state.favorites.push(data)
        let uniqueItems = [...new Set(state.favorites)]
        state.favorites = uniqueItems
    }
  },
  actions: {
  },
  modules: {
  }
})
