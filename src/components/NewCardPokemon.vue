<template>
    <div class="card mb">
        <div class="data">
            <h1 class="name">{{ pokemon.name }}</h1>
            <h1 class="name">#{{ pokemon.id }}</h1>
        </div>
        <div class="area-image">
            <img :src="`${pokemon.image}`" alt="">
        </div>
        <div class="btn-area">
            <input class="input-change-name" v-model="pokemon.name" placeholder="New Name">
            <button class="btn-change-name">Save</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Pokemons } from "@/interfaces/pokemons"
import { reactive } from "vue";

const props = defineProps<{
    pokemon: Pokemons
}>()
const pokemon = reactive(props.pokemon)

function btnNewName(index: number, name: string) {
/*     let nameEndIndex = {
        index: index,
        name: name
    }
    store.commit('setNamePokemon', nameEndIndex) */
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&display=swap');

.card {
    width: 200px;
    background-color: #f5876e;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
    margin: 20px;
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

.cursor-pointer {
    cursor: pointer;
}

.data {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
}

.btn-area {
    display: flex;
    background-color: #ffffff;
    border-radius: 0px 0px 20px 20px;
    padding: 10px;
    justify-content: space-between;
    margin-top: 5px;
}

button {
    width: 60px;
    height: 30px;
    border-radius: 10px;
    background-color: #70A83B;
    border-style: none;
    color: aliceblue;
    cursor: pointer;
    font-size: .9rem;
}

button:hover {
    background-color: #425e28;
}
</style>