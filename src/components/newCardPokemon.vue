<template>
    <section v-for="(pokemon, index) in store.state.myTeam" :class='pokemon.type + " componente mb"'>
        <section class="s-btn-x">
            <button @click="store.commit('remuvePokemon', index)" class="btn-x">X</button>
        </section>
        <section class="image-area">
            <img :src="`${pokemon.image}`" class="image">
        </section>
        <section class="infos">
            <h2>{{ pokemon.name }}</h2>
            <h3>Tipo: {{ pokemon.type }}</h3>
            <h3>Ataque: Aqua Tail </h3>
            <h3>Ataque: Water Pulse </h3>
            <h3>Ataque: Return Purified </h3>
        </section>
        <section class="btns">
            <input class="input-change-name" v-model="pokemon.value" placeholder="New Name">
            <button class="btn-change-name" @click="btnNewName(index, pokemon.value)">Save</button>
        </section>
    </section>
</template>

<script lang="ts">
import Pokemons from "../interfaces/pokemons"
import store from "../store"

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        btnNewName(index: number, name: string) {
            let nameEndIndex = {
                index: index,
                name: name
            }
            store.commit('setNamePokemon', nameEndIndex)
        },
    }
}
</script>

<style scoped>


.image {
    width: 100%;
    height: 100%;
}

h2 {
    font-family: 'Roboto', sans-serif;
    color: rgb(250, 137, 71);
    font-size: 1.5rem;
    text-shadow: 0.01em 0.01em 0.08em rgb(14, 14, 14)
}

h2 {
    margin: 5px;
}

h3 {
    color: rgb(65, 65, 65);
    margin-bottom: 10px;
}

h2,
h3 {
    font-family: monospace;
}
.mb{
    margin: 0 10px;
    width: 300px;
}
.infos {
    width: 100%;
    height: 200px;
    margin-top: 40px;
}
</style>