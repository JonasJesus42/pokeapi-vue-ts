<template>
    <section class="componente mb">
        <section class="cursor-pointer">
            <img :src="`${pokemon.image}`" class="image">
        </section>
        <section>
            <h2 className="name"> name:{{pokemon.name}}</h2>
        </section>
        <button class="btn-change-name" @click="handClickChoicPokemon(props.id)">ESCOLHER</button>
    </section>
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

/* export default {
    props: {
        id: Number,
    },
    methods: {
        addPokemonInTeam(idParamiter: number) {
            if (store.state.myTeam.length <= 5) {
               store.commit('addPokemonInMyTeam', idParamiter)
                console.log('pokemon adicionado no time')
            } else {
                console.log('limite de pokemon no time atingido')
                return
            } 
        },
        pegeAboutPokemon(id: number){
           router.push({ path: `/pokemon/${id-1}` })
        }
    },
    created() { } 
}*/
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