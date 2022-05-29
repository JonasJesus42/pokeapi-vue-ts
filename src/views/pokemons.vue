<template>
    <div :class="`${typeOne} container `">
        <div class="header">
            <div class="top">
                <button @click="handleBack()"><img src="../assets/arrow-left.svg" alt=""></button>
                <h1 class="name">{{ pokemon.name }}</h1>
                <h1 class="id">#{{ pokemon.id }}</h1>
            </div>
            <div>
                <img class="img-Pokemon" :src="pokemon.sprites?.other.dream_world.front_default" alt="">
            </div>
        </div>
        <div class="data">
            <div class="about">
                <div class="types">
                    <p :class="`type ${typeOne}`">{{ typeOne }}</p>
                    <p v-if="typeTwo" :class="`type ${typeTwo}`">{{ typeTwo }}</p>
                </div>
                <h1 class="title">Abilities</h1>
                <div class="abilities">
                    <h3>{{ abilits[0] }}</h3>
                    <hr>
                    <h3>{{ abilits[1] }}</h3>
                </div>
                <h1 class="sub-title">Stats</h1>
            </div>
            <div class="base-stats">
                <div class="stats-names">
                    <h2>HP</h2>
                    <h2>ATK</h2>
                    <h2>DEF</h2>
                    <h2>SATK</h2>
                    <h2>SDEF</h2>
                    <h2>SPD</h2>
                </div>
                <div class="line">
                    <hr>
                </div>
                <div class="stats-number">
                    <h2>{{ test[0].base_stat }}</h2>
                    <h2>{{ test[1].base_stat }}</h2>
                    <h2>{{ test[2].base_stat }}</h2>
                    <h2>{{ test[3].base_stat }}</h2>
                    <h2>{{ test[4].base_stat }}</h2>
                    <h2>{{ test[5].base_stat }}</h2>
                </div>
                <div class="barra-stats">
                    <div class="progress-bar">
                        <div class="progress first"></div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress second"></div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress third"></div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress fourth"></div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress fifth"></div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress sixth"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Pokemons } from "@/interfaces/pokemons";
import router from "@/router";
import { store } from "@/store";
import { useRoute } from "vue-router";

const route = useRoute()
const id = Number(route.params.id) - 1
const pokemon: Pokemons = store.state.detalesPokemon[id]

const [typeOne, typeTwo] = pokemon.types.map((typeInfos) => typeInfos.type.name)
const abilits = pokemon.abilities?.map((abilitInfos) => abilitInfos.ability.name)
const test = pokemon.stats.map((statsInfos) => statsInfos)

function handleBack() {
    router.push({ path: `/` })
}

const colorsPokemon: any = {
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

const tema = {
    color: colorsPokemon[typeOne],
    stats: {
        hp: `${test[0].base_stat}px`,
        atk: `${test[1].base_stat}px`,
        def: `${test[2].base_stat}px`,
        satk: `${test[3].base_stat}px`,
        sdef: `${test[4].base_stat}px`,
        spd: `${test[5].base_stat}px`,
    }
}
</script>

<style scoped>
p,
h1 {
    font-family: 'Lato', sans-serif;
    margin: 0;
}

h1 {
    color: v-bind('tema.color');
    font-size: 16px;
}

p,
h1,
h2,
h3 {
    text-shadow: rgba(0, 0, 0, 0.4) 0px 0px 1px;
}

.title {
    font-size: 40px;
    margin-top: 15px;
    margin-bottom: 10px;
}

.sub-title {
    font-size: 20px;
}

h2 {
    width: 30px;
}

.abilities {
    display: flex;
    align-items: center;
    justify-content: center;
}

.abilities h3 {
    font-size: 24px;
    margin: 10px;
    font-family: 'Poppins', sans-serif;
    text-transform: capitalize;
    color: v-bind('tema.color');
}

.abilities hr {
    height: 30px;
}

.types {
    display: flex;
    justify-content: center;
}

.type {
    padding: 2px;
    min-width: 50px;
    min-height: 20px;
    border-radius: 15px;
    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    text-transform: capitalize;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.4);
    color: var('--var-fire');
    text-align: center;
    margin: 0 10px;
}

.container {
    width: 360px;
    height: 600px;
    margin: auto;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.top {
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.header {
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: url(../assets/Pokeball.svg);
    background-repeat: no-repeat;
    background-position: right;
    background-size: 200px;
}

.data {
    width: 352px;
    height: 369px;
    background-color: #ffffff;
    border-radius: 8px;
}

.line {
    display: flex;
    height: 100%;
    width: 10px;
    justify-content: center;
    color: #E0E0E0;
}

.line hr {
    height: 88%;
    margin: 0;
}

.img-Pokemon {
    position: relative;
    top: 18px;
    right: -90px;
    width: 200px;
    height: 200px;
    size: 1px;
}

button {
    background-color: transparent;
    width: 50px;
    height: 50px;
    border-style: none;
    cursor: pointer;
}

button:hover {
    transform: scale(1.4);
}

img {
    width: 100%;
    height: 100%;
}

.name,
.id {
    color: #ffffff;

}

.name {
    font-size: 30px;
    margin-right: 100px;
    align-self: center;
}

.id {
    font-size: 20px;
    margin: 10px 20px 0 0px;
    align-self: center;
}

.stats {
    display: flex;
}

.stats-names {
    width: 50px;
    text-align: end;
}

.stats-names h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    color: v-bind('tema.color')
}

.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 50px;
}

.base-stats {
    display: flex;
    width: 100%;
    height: 110px;
    position: relative;
    top: 55px;
}

.barra-stats {
    width: 80%;
    padding-right: 10px;
    margin-top: 8px;
}

.stats-number {
    width: 50px;
}

.stats-number h2 {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    color: v-bind('tema.color');
}

.progress-bar {
    height: 6px;
    width: 100%;
    background-color: #ccc;
    margin-bottom: 9px;
    border-radius: 5px;
}

.progress {
    height: 100%;
    border-radius: 5px;
    background-color: v-bind('tema.color');
}

.first {
    width: v-bind('tema.stats.hp');
}

.second {
    width: v-bind('tema.stats.atk');
}

.third {
    width: v-bind('tema.stats.def');
}

.fourth {
    width: v-bind('tema.stats.satk');
}

.fifth {
    width: v-bind('tema.stats.sdef');
}

.sixth {
    width: v-bind('tema.stats.spd');
}
</style>