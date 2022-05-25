<template>
    <div class="card mb">
        <div class="data">
            <h1 class="name">{{ pokemon.name }}</h1>
            <h1>#{{ pokemon.id }}</h1>
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
.max {
    max-width: 220px;
    max-width: 190px;
}

.image-area {
    width: 100%;
    height: 140px;
}
</style>