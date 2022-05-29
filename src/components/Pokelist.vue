<template>
    <div class="pokelist">
        <Card v-memo v-for="(pokemon, index) in store.state.pokemons"
           :index="index"
           :obj="pokemon"
        />
    </div>
</template>

<script lang="ts" setup>
import { store } from '@/store';
import { onMounted } from 'vue';
import Card from './Card.vue';

</script>

<style scoped>
.pokelist {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
}
</style>
