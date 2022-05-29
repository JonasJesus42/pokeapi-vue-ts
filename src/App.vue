<template>
  <Navbar />
  <router-view />
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import {  getAllDataPokemon, pokeList } from '@/services/metods'
import Navbar from '@/components/Navbar.vue'
import {store} from './store'

onBeforeMount(async () => {
  let pokemon = await pokeList()
  if (store.state.pokemons.length <= 150) {
    store.state.pokemons.push(...pokemon)
  }
   getAllDataPokemon()
})

const colorsPokemon = {
  steel: '#B7B9D0',
  fire: '#F57D31',
  grass: '#74CB48',
  electric: '#F9CF30',
  water: '#6493EB',
  ice: '#9AD6DF',
  ground: '#DEC16B',
  rock: '#B69E31',
  fairy: '#E69EAC',
  poison: '#A43E9E',
  bug: '#A7B723',
  dragon: '#7037FF',
  ghost: '#70559B',
  psychic: '#FB5584',
  flying: '#A891EC',
  fighting: '#C12239',
  normal: '#AAA67F',
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
body {
  background-color: #b4d5bd;
}

h1,
h2,
h3,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.steel {
  background-color: v-bind('colorsPokemon.steel');
}

.fire {
  background-color:v-bind('colorsPokemon.fire');
}

.grass {
  background-color: v-bind('colorsPokemon.grass');
}

.electric {
  background-color: v-bind('colorsPokemon.electric');
}

.water{
  background-color: v-bind('colorsPokemon.water');
}
.ice {
  background-color: v-bind('colorsPokemon.ice');
}

.ground {
  background-color: v-bind('colorsPokemon.ground');
}

.rock {
  background-color: v-bind('colorsPokemon.rock');
}

.fairy {
  background-color: v-bind('colorsPokemon.fairy');
}

.poison {
  background-color: v-bind('colorsPokemon.poison');
}

.bug {
  background-color: v-bind('colorsPokemon.bug ');
}

.dragon {
  background-color: v-bind('colorsPokemon.dragon');
}

.ghost {
  background-color: v-bind('colorsPokemon.ghost');
}

.psychic {
  background-color:v-bind('colorsPokemon.psychic');
}

.flying {
  background-color: v-bind('colorsPokemon.flying');
}

.fighting {
  background-color: v-bind('colorsPokemon.fighting');
}

.normal {
  background-color: v-bind('colorsPokemon.normal');
}
</style>
