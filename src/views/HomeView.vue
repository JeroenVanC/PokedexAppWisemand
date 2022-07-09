<template>
  <div class="homeView">
    <h1 class="title">Pokédex</h1>
    <div class="searchBar">
      <button>
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.3833 12.8767C7.76953 12.8767 9.04785 12.4285 10.0938 11.6814L14.0283 15.616C14.2109 15.7986 14.4517 15.8899 14.709 15.8899C15.2485 15.8899 15.6304 15.4749 15.6304 14.9436C15.6304 14.6946 15.5474 14.4539 15.3647 14.2795L11.4551 10.3616C12.2769 9.28247 12.7666 7.94604 12.7666 6.49341C12.7666 2.98218 9.89453 0.110107 6.3833 0.110107C2.88037 0.110107 0 2.97388 0 6.49341C0 10.0046 2.87207 12.8767 6.3833 12.8767ZM6.3833 11.4988C3.64404 11.4988 1.37793 9.23267 1.37793 6.49341C1.37793 3.75415 3.64404 1.48804 6.3833 1.48804C9.12256 1.48804 11.3887 3.75415 11.3887 6.49341C11.3887 9.23267 9.12256 11.4988 6.3833 11.4988Z" fill="#3C3C43" fill-opacity="0.6"/>
        </svg>
      </button>
      <input type="text" v-model="searchInput" name="" id="" placeholder="Pokemom zoeken">
    </div>
    <div class="pinfoCar-container">
        <pInfoCard title="Mijn team" amount="4"></pInfoCard>
        <pInfoCard @click="$router.push('favorieten')" title="Favorieten" amount="12" color="green"></pInfoCard>

    </div>
    <div v-for="pokemon in searchResults" :key="pokemon.id">
      <router-link class="routerLink_pokeCard" :to="{ name: 'details', params: { name: pokemon.name, id: pokemon.id}}">
        <PokemonCard :name="pokemon.name" :img="pokemon.sprites.front_default" :num="pokemon.id" :pokeTypes="pokemon.types" ></PokemonCard>
      </router-link>
    </div>
  </div>
</template>

<script>
import pInfoCard from '../components/pInfoCard.vue'
import PokemonCard from '../components/PokemonCard.vue'

export default {
  name: 'HomeView',
  components: {
    pInfoCard,
    PokemonCard
  },
  data(){
    return {
      pokemons: [],
      searchInput: ''
    }
  },
  methods: {
  },
  computed: {
    searchResults() {
      // If searchInput property is empty -> return a empty string
      if (this.searchInput.length === 0) return this.pokemons;
      // return pokemons with names that match with
      // the searchInput string
      return this.pokemons.filter(pokemons => pokemons.name.match(this.searchInput))
    }
  },
  mounted() {
    // fetch pokemons
    // fetch pokemon data
        fetch("https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon")
            .then(res => res.json())
            .then(data => this.pokemons = data)
            .catch(err => console.log(err.message))

  }
}
</script>

<style>
.homeView {
  padding: 2rem 2rem;
}
.title {
  font-size: 2.6rem;
  margin-bottom: 10px;
}

.searchBar {
  background: #EFF0F1;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  font-size: 1.4rem;
  padding: 5px 5px;
}

.searchBar button {
  border: none;
  background: none;
  cursor: pointer;
}

.searchBar input {
  width: 100%;
  border: none;
  background: none;
}

.searchBar input:focus {
  border: none;
  
}

.pinfoCar-container {
  display: flex;
  gap: 10px;
}

.routerLink_pokeCard, .routerLink_pokeCard:visited {
  text-decoration: none;
  color: inherit;
}
</style>
