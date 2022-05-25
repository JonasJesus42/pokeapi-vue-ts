<template>
    <section className="container">
        <Card v-for="(pokemon, i) in store.state.pokemons"
           :id="i"
           :pokemon="pokemon"
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
    padding: 8px;
    flex-wrap: wrap;
    display: flex;
}

</style>
