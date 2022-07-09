<template>
    <div class="detailsPage" v-if="pokemon" >
        <div class="topNav">
            <div class="leftPart" @click="back">
                <svg width="12" height="21" viewBox="0 0 12 21"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.47021 20.4712C9.71729 20.7183 10.0317 20.853 10.4023 20.853C11.1436 20.853 11.7388 20.269 11.7388 19.5278C11.7388 19.1572 11.5815 18.8203 11.3232 18.562L3.46191 10.8804L11.3232 3.22119C11.5815 2.96289 11.7388 2.61475 11.7388 2.25537C11.7388 1.51416 11.1436 0.930176 10.4023 0.930176C10.0317 0.930176 9.71729 1.06494 9.47021 1.31201L0.73291 9.84717C0.418457 10.1392 0.272461 10.4985 0.26123 10.8916C0.26123 11.2847 0.418457 11.6216 0.73291 11.9248L9.47021 20.4712Z" fill="white"/>
                </svg>
                <p>Terug</p>
            </div>
            <div @click="addFavorites()">
                <svg class="rightPart"  width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                    <path :class="isFav ? 'fav': 'notFav'" d="M12.1097 2.72438L12.1095 2.7246C11.9482 2.88865 11.795 3.06211 11.6489 3.24884C10.3353 1.57909 8.19637 0.731114 6.08129 1.11724C4.29146 1.44222 2.88271 2.42695 1.90303 4.03746C0.52336 6.3028 0.404701 8.50223 1.57213 10.5609C2.18881 11.6502 2.98909 12.7103 4.01508 13.8024L4.01514 13.8025C5.89369 15.7986 8.11415 17.6919 11.0047 19.7572L11.0048 19.7572C11.2044 19.8996 11.4219 19.975 11.6508 19.975C11.9993 19.975 12.2365 19.7988 12.3452 19.7181L12.3466 19.717C12.3469 19.7168 12.3471 19.7166 12.3474 19.7165C14.9545 17.854 17.0057 16.1364 18.7981 14.3083C19.7989 13.2881 20.9397 12.0301 21.7755 10.454C22.1323 9.78236 22.5477 8.86532 22.5229 7.81206V7.81201C22.4692 5.57639 21.5794 3.72752 19.8812 2.32408C18.8716 1.48795 17.5735 1.0289 16.2305 1.0289C14.6801 1.0289 13.1764 1.64627 12.1097 2.72438ZM20.2417 9.64081L20.2416 9.64087C19.5114 11.017 18.4775 12.1539 17.5583 13.0923C15.9218 14.7605 14.0527 16.34 11.6475 18.0814C9.02753 16.1825 6.99734 14.4368 5.28051 12.6102L5.2805 12.6102C4.34824 11.6187 3.62895 10.6693 3.08275 9.7027L3.08267 9.70255C2.65412 8.94707 2.46596 8.19438 2.51519 7.41472C2.5645 6.63387 2.8524 5.81861 3.38789 4.93991L3.38794 4.93982C4.10161 3.7661 5.11224 3.05645 6.39492 2.82411L6.39537 2.82402C6.63973 2.7786 6.88902 2.75663 7.13368 2.75663C8.6486 2.75663 9.99255 3.59279 10.7541 5.05297L10.7544 5.05349L10.8861 5.30248L10.8862 5.30266C11.0407 5.59335 11.3563 5.75319 11.6623 5.76208L11.6623 5.76219L11.6669 5.76211C11.9936 5.75666 12.2879 5.56958 12.4313 5.27555C12.7005 4.72603 12.9918 4.30337 13.3459 3.94456C14.0878 3.19483 15.1397 2.76463 16.2321 2.76463C17.1736 2.76463 18.0761 3.08318 18.7754 3.66212L18.7755 3.6622C20.0891 4.74684 20.7447 6.11525 20.7874 7.85241C20.8011 8.49111 20.5252 9.10731 20.2417 9.64081Z" fill="white" stroke="white" stroke-width="0.2"/>
                </svg>
            </div>
        </div>

        <h1>{{ name }}</h1>
        <!-- <img :src="pokemon.sprites.front_default" :alt="name"> -->
        <img :src="imageSource" :alt="name">

        <p>INFO</p>
        <div class="aboutContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias, molestiae dicta doloribus iure quis sequi in! Ad, nulla tempora.</p>
            <p v-for="t in pokemon.types" :key="t.slot">{{ t.type.name }}</p>
            <p>Nr: {{ pokemon.id }}</p>
            <p>Hoogte: {{ pokemon.height }}m</p>
        </div>
        <p>STATISTIEKEN</p>
        <div class="aboutContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias, molestiae dicta doloribus iure quis sequi in! Ad, nulla tempora.</p>
            <p v-for="t in pokemon.types" :key="t.slot">{{ t.type.name }}</p>
            <p>Nr: {{ pokemon.id }}</p>
            <p>Hoogte: {{ pokemon.height }}m</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'id'],
    data() {
        return {
            pokemon: null,
            cardInfo: {},
            isFav: false,
            imageSource: ""
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
        addFavorites() {
            //console.log("eerste");
            this.$store.commit("addFavorite", this.cardInfo)
            this.checkIfFav()
        },
        checkIfFav(){
            for (let pokemonF of this.$store.state.favorites) {
                if (pokemonF.name === this.pokemon.name ) {
                    this.isFav = true
                }
            }
        }
    },
    computed: {

    },
    mounted() {
        // fetch pokemons
        // fetch pokemon data
        fetch("https://pokeapi.co/api/v2/pokemon/" + this.id)
            .then(res => res.json())
            .then(data => this.pokemon = data)
            .catch(err => console.log(err.message))

        fetch("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + this.id + ".png")
            .then(res => res.blob())
            .then(imageBlob => {
                const imageObjectURL = URL.createObjectURL(imageBlob);
                this.imageSource = imageObjectURL
            })
            .catch(err => console.log(err.message))
    },
    updated() {
        this.cardInfo = 
        {   
            name: this.pokemon.name, 
            img: this.pokemon.sprites.front_default, 
            num: this.pokemon.id, 
            pokeTypes: this.pokemon.types
        }

        this.checkIfFav()
    }
}
</script>

<style>
    .detailsPage {
        min-height: 100vh;
        height: auto;
        width: 100vw;
        background: linear-gradient(180deg, #7ECD8B 0%, #89E2B3 100%);
        color: white;
        padding: 1rem;
    }

    .topNav {
        display: flex;
        justify-content: space-between;
    }

    .topNav .leftPart {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        font-size: 1.2rem;
        cursor: pointer;
    }

    .topNav .rightPart {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .topNav .rightPart .fav{
        fill: rgb(186, 91, 119);
    }


    .detailsPage img {
        width: 900px;
    }

    .aboutContainer {
        background: #FFFFFF;
        box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.04);
        border-radius: 10px;
        color: rgba(0, 0, 0, 1);
        padding: 2rem;
    }
</style>