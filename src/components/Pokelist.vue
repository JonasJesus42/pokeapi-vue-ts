<template>
    <section className="container">
        <Card v-for="(pokemon, i) in store.state.pokemons"
           :id="i"
           :pokemons="pokemon"
        />
    </section>
</template>

<script lang="ts" setup>
import store from '@/store';
import Card from './Card.vue';


</script>

<style scoped>
section {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
}
.header-myteam{ 
  background-color: #ffff;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  color: #FFFA77;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  text-shadow: 0 0px 5px rgba(0, 0, 0, 0.7);
}
</style>
