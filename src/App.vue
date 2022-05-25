<template>
  <Navbar />
  <router-view />
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { pokeList } from '@/services/metods'

import Navbar from '@/components/Navbar.vue'
import store from './store'

onBeforeMount(async () => {
  let pokemons = await pokeList()
  store.state.pokemons.push(...pokemons)
})
</script>

<style>
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
  background-color: #f4f4f4;
}

.fire {
  background-color: #FDDFDF;
}

.grass {
  background-color: #DEFDE0;
}

.electric {
  background-color: #FCF7DE;
}

.water,
.ice {
  background-color: #DEF3FD;
}

.ground {
  background-color: #f4e7da;
}

.rock {
  background-color: #d5d5d4;
}

.fairy {
  background-color: #fceaff;
}

.poison {
  background-color: #98d7a5;
}

.bug {
  background-color: #f8d5a3;
}

.dragon {
  background-color: #97b3e6;
}

.ghost {
  background-color: #bc97e6;
}

.psychic {
  background-color: #eaeda1;
}

.flying {
  background-color: #F5F5F5;
}

.fighting {
  background-color: #E6E0D4;
}

.normal {
  background-color: #F5F5F5;
}
</style>
