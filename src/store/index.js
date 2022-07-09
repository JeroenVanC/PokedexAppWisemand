import { createStore } from 'vuex'

export default createStore({
  state: {
    favorites: [
      {name:'Bulbasaur', 
      img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', 
      num:'1', 
      pokeTypes:[
        {
          "slot": 1,
          "type": {
            "name": "normal",
            "url": "https://pokeapi.co/api/v2/type/1/"
          }
        }
      ]},
      
    ]
  },
  getters: {
  },
  mutations: {
    addFavorite(state, data){
      //console.log("test");
      state.favorites.push(data)
    }
  },
  actions: {
  },
  modules: {
  }
})
