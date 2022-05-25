<template>
    <div class="card mb">
        <div class="data">
            <h1 class="name">{{ pokemon.name }}</h1>
                <h1 class="name">#{{ pokemon.id }}</h1>
            </div>
            <div class="area-image">
                <img :src="`${pokemon.image}`" alt="">
            </div>
        <div class="btn-area">
            <button @click="handClickChoicPokemon(pokemon)">Choice</button>
            <button @click="hendleRedirectPageFromDetails(pokemon.id)">details</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {useStore} from "vuex"
import router from "@/router"
import { reactive, ref } from 'vue'
import { Pokemons } from "@/interfaces/pokemons";

const store = useStore()
const props = defineProps<{
    id: number,
    pokemon: Pokemons
}>()
const trueId = props.id + 1

const pokemon = {
    name: props.pokemon.name,
    id:trueId,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${trueId}.png`
}

function handClickChoicPokemon(objPokemon: Pokemons){
    if (store.state.myTeam.length <= 5) {
       store.commit('addPokemonInMyTeam', objPokemon)
    } 
}
function hendleRedirectPageFromDetails(id: Number){
    router.push({ path: `/pokemon/${id}` })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&display=swap');

.card {
    width: 200px;
    background-color: #f5876e;
    margin: auto auto 10px auto;
    text-align: center;
    box-sizing: border-box;
    border-radius: 20px;

  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
}

img {
    width: 100%;
    height: 100%;
}

.name {
    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    text-transform: capitalize;
    color: #ffffff;
}

.area-image {
    background: url(../assets/Pokeball.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 100px;
    height: 100px;
    margin: auto;
}

.cursor-pointer {
    cursor: pointer;
}

.data {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
}

.btn-area {
    display: flex;
    background-color: #ffffff;
    border-radius:0px 0px 20px 20px;
    padding: 10px;
    justify-content: space-between;
    margin-top: 5px;
}

button{
    width: 60px;
    height: 30px;
    border-radius: 10px;
    background-color:#70A83B;
    border-style: none;
    color: aliceblue;
    cursor: pointer;
    font-size: .9rem;
}

button:hover{
    background-color: #425e28;
}
</style>