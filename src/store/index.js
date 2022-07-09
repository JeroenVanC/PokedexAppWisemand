import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemons: [],
    favorites: [
    ]
  },
  getters: {
    getPokemons(state) {
      return state.pokemons
    }
  },
  mutations: {
    setPokemons(state, pokemons) {
      state.pokemons = pokemons;
    },
    addFavorite(state, data){
        state.favorites.push(data)
        let uniqueItems = [...new Set(state.favorites)]
        state.favorites = uniqueItems
    }
  },
  actions: {
    loadPokemon(state){
      console.log("dispatched");
      fetch("https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon")
            .then(res => res.json())
            .then((data) => {
              state.commit('setPokemons', data)
            })
            .catch(err => console.log(err.message))

    }
  },
  modules: {
  }
})
