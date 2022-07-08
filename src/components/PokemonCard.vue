<template>
    <div class="pokemonCardContainer">
        <div class="leftSide">
            <img :src="img" alt="">
            <div class="leftSideText">
                <h3>{{ name }}</h3>
                <p>Nr. {{ formatNumber }}</p>
            </div>
        </div>
        
        <div class="rightSide">
            <div class="typeIcon_container">
                <div   v-for="t in formatTypes" :key="t.name">
                    <p class="typeIcon" :class="t.name">{{ t.name }}</p>
                </div>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 16.9998C10.244 16.9998 9.98801 16.9018 9.79301 16.7068C9.40201 16.3158 9.40201 15.6838 9.79301 15.2928L13.098 11.9878L9.91801 8.69476C9.53501 8.29676 9.54601 7.66376 9.94301 7.28076C10.341 6.89776 10.974 6.90876 11.357 7.30476L15.219 11.3048C15.598 11.6978 15.593 12.3208 15.207 12.7068L11.207 16.7068C11.012 16.9018 10.756 16.9998 10.5 16.9998Z" fill="#231F20"/>
                <mask id="mask0_8_112" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="9" y="7" width="7" height="10">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 16.9998C10.244 16.9998 9.98801 16.9018 9.79301 16.7068C9.40201 16.3158 9.40201 15.6838 9.79301 15.2928L13.098 11.9878L9.91801 8.69476C9.53501 8.29676 9.54601 7.66376 9.94301 7.28076C10.341 6.89776 10.974 6.90876 11.357 7.30476L15.219 11.3048C15.598 11.6978 15.593 12.3208 15.207 12.7068L11.207 16.7068C11.012 16.9018 10.756 16.9998 10.5 16.9998Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_8_112)">
                    <rect width="24" height="24" fill="#BABEC2"/>
                </g>
            </svg>
        </div>

    </div>
</template>

<script>
export default {
    props: ['name', 'img', 'num', 'pokeTypes'],
    data() {
        return{
            types: []
        }
    },
    computed: {
       formatNumber() {
           return String(this.num).padStart(3, 0);
       },
       
       formatTypes() {
           let typArr = [] 
           for(let t of this.pokeTypes) {
               typArr.push(t.type)
            }
            return typArr
       },
    },
    mounted(){
        //console.log(this.pokeTypes[0].type)
        
    }
}
</script>

<style>
    .pokemonCardContainer{
        background: #FFFFFF;
        box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.04);
        display: flex;
        border-radius: 10px;
        margin: 1rem 0;
        padding: 1rem;
        justify-content: space-between;
    }
    .pokemonCardContainer img {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }

    .leftSide {
        display: flex;
        align-items: center;
        justify-content: start;
        height: min-content;
        width: 50%;
    }
    .leftSide .leftSideText {
        height: min-content;
        align-self: start;
        margin-left: 1rem;
        font-size: 1.2rem;
    }
    .rightSide {
        width: 50%;
        justify-content: end;
        display: flex;
        align-items: center;
        height: min-content;

    }
    .typeIcon_container {
        display: flex;
        justify-content: end;
        gap: 10px;
        /* width: 80%; */
        margin-right: 10px;
    }

    .typeIcon {
        text-align: center;
        padding: 3px 10px;
        color: white;
        background: #4592C3;
        border-radius: 100px;
    }


    .pokemonCardContainer svg rect {
    }

    .typeIcon.grass {
        background-color: rgba(149, 194, 77, 1);
    }
    .typeIcon.water {
        background: rgba(69, 146, 195, 1);
    }
    .typeIcon.poison {
        background: rgba(186, 126, 200, 1);
    }
    .typeIcon.fire {
        background: rgba(253, 125, 37, 1);
    }
    .typeIcon.normal {
        background: rgba(163, 172, 174, 1);

    }
</style>