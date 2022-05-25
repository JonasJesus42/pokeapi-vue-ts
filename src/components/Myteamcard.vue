<template>
    <div class="card mb">
        <div class="data">
            <h1 class="name">{{ pokemon.name }}</h1>
            <h1 class="name">#{{ pokemon.id }}</h1>
        </div>
        <div class="area-image">
            <img :src="`${pokemon.image}`" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Pokemons } from '@/interfaces/pokemons';

const props = defineProps<{pokemon: Pokemons }>()
const pokemon = {
    name: props.pokemon.name,
    id: props.pokemon.id,
    image: props.pokemon.image
}
</script>

<style scoped>
.card {
    width: 150px;
    height: 150px;
    max-width: 200px;
    max-height: 150px;
    background-color: #76AADB;
    margin: 10px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
    overflow: scroll;
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
.data {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
}
</style>