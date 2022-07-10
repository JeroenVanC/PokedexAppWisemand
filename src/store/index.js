import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemons: [],
    favorites: [
    ],
    team: []
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
    },
    deleteFavorite(state, data){
        let pokeNames = []
        for (let p of state.favorites) {
          pokeNames.push(p.name)
        }
        console.log(pokeNames)
        var index = pokeNames.indexOf(data)
        console.log(index)
        if (index !== -1) {
          state.favorites.splice(index, 1)
        }
    },
    addToTeam(state, data){
      state.team.push(data)
      let uniqueItems = [...new Set(state.team)]
      state.team = uniqueItems
  },
  deleteTeam(state, data){
      let pokeNames = []
      for (let p of state.team) {
        pokeNames.push(p.name)
      }
      var index = pokeNames.indexOf(data)
      if (index !== -1) {
        state.team.splice(index, 1)
      }
  },
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
