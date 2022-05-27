<template>
    <div :class="`card ${typeOne}`">
        <div class="deta">
            <h1 class="name">{{ props.pokemon.name }}</h1>
            <h1 class="id">#{{ props.pokemon.id }}</h1>
        </div>
        <div class="area-image">
            <img :src="`${props.pokemon.sprites?.other.dream_world.front_default}`" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Pokemons } from '@/interfaces/pokemons';

const props = defineProps<{ pokemon: Pokemons }>()
const [typeOne] = props.pokemon.types.map((typeInfo) => typeInfo.type.name)
</script>

<style scoped>
.card {
    width: 150px;
    height: 150px;
    max-width: 200px;
    max-height: 150px;
    margin: 10px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
}

.deta {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
}

.name,
.id {
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

img {
    width: 85%;
    height: 85%;
}
</style>