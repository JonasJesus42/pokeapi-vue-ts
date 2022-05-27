<template class="CardTeam">
    <div :class="`card ${typeOne}`">
        <div class="deta">
            <h1 class="name">{{ props.obj.name }}</h1>
            <h1 class="id">#{{ pokemon.id }}</h1>
        </div>
        <div class="area-image">
            <img :src="`${props.obj.sprites?.other.dream_world.front_default}`" alt="">
        </div>
        <div class="deta">
            <div class="types">
                <p :class="`type ${typeOne}`">{{ typeOne }}</p>
                <p :class="`type type-two ${typeTwo}`" v-if="typeTwo">{{ typeTwo }}</p>
            </div>
        </div>
        <div class="btn-area">
            <input maxlength="15" v-model="pokemon.name" placeholder="New Name">
            <button class="btn-change-name cursor-pointer" @click="hendleName(props.index, pokemon.name)">Save</button>
            <button class="remuve cursor-pointer" @click="handleRerumePokemon(props.index)">Remuve</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Pokemons } from "@/interfaces/pokemons"
import { storeMyteam } from "@/store";

const props = defineProps<{
    obj: Pokemons,
    index: number
}>()

const pokemon: Pokemons = props.obj

const [typeOne, typeTwo] = pokemon.types.map((typeInfos) => typeInfos.type.name)

function hendleName(index: number, name: string) {
    storeMyteam.commit('setName', { index, name })
}

function handleRerumePokemon(index: number) {
    storeMyteam.commit('remuvePokemon', index)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&display=swap');

.card {
    min-width: 200px;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
    margin: 20px;
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
    width: 100%;
    height: 100%;
}

.types {
    display: flex;
    justify-content: center;
}

.type {
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 2px;
    min-width: 50px;
    min-height: 20px;
    border-radius: 5px;
    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    text-transform: capitalize;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.4);
    color: #ffffff;
    text-align: center;
}

.type-two {
    margin-right: 10px;
}

.btn-area {
    background-color: #ffffff;
    border-radius: 0px 0px 20px 20px;
    padding: 10px;
    margin-top: 5px;
}

input {
    border-radius: 5px;
    width: 100px;
    height: 30px;
    font-size: 1rem;
    margin: 0 10px 10px 0;
    border-style: none;
    padding-left: 5px;
    background-color: #dfdfdf;
}

.btn-change-name {
    width: 60px;
    height: 30px;
    border-radius: 10px;
    background-color: #70A83B;
    border-style: none;
    color: aliceblue;
    font-size: .9rem;
}

.btn-change-name:hover {
    background-color: #59862e;
}

.remuve {
    width: 80%;
    height: 60%;
    height: 25px;
    background-color: #F76545;
    border-radius: 10px;
    border-style: none;
    color: #ffffff;
    font-family: 'Lato', sans-serif;
}

.remuve:hover {
    background-color: #c95136;
}

.cursor-pointer {
    cursor: pointer;
}
</style>