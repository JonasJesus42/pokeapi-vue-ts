<template>
    <div >
        <div>
            <h1>{{ pokemon.name }}</h1>
                <h1 >#{{ pokemon.id }}</h1>
            </div>
            <div >
                <img :src="`${pokemon.image}`" alt="">
            </div>
        <div >
        </div>
    </div>
</template>

<script lang="ts" setup>
import store from "../store"
import router from "@/router"
import { reactive, ref } from 'vue'

const props = defineProps(['id','pokemon'])

const pokemon = {
    name: props.pokemon.name,
    id: props.id,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id+1}.png`
}

function handClickChoicPokemon(id: number){
    if (store.state.myTeam.length <= 5) {
       store.commit('addPokemonInMyTeam', id)
        console.log('pokemon adicionado no time')
    } else {
        console.log('limite de pokemon no time atingido')
        return
    } 
}
</script>

<style scoped>
h3{
    color: rgb(11, 3, 49);
}
.mb{
    margin-bottom: 10px;
    max-width: 220px;
    max-width: 190px;
}
.cursor-pointer{
    cursor: pointer;
  }

</style>