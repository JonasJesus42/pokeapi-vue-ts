<template>
    <section v-for="(pokemon, index) in store.state.myTeam" :class='pokemon.type + " componente max"'>
        <section class="s-btn-x">
            <button @click="store.commit('remuvePokemon', index)" class="btn-x">X</button>
        </section>
        <section class="image-area">
            <img :src="`${pokemon.image}`" class="image">
        </section>
        <h3 className="name">{{ pokemon.name }}</h3>
        <h3 className="name">{{ pokemon.id }}</h3>
        <section class="btns">
            <input class="input-change-name" v-model="pokemon.value" placeholder="New Name">
            <button class="btn-change-name" @click="btnNewName(index, pokemon.value)">Save</button>
        </section>
    </section>

</template>

<script lang="ts">
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
.max {
    max-width: 220px;
    max-width: 190px;
}

.image-area {
    width: 100%;
    height: 140px;
}
</style>