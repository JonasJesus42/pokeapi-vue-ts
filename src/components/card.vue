<template>
    <section  :class='type + " componente mb"'>
        <section @click="pegeAboutPokemon(id)" class="cursor-pointer">
            <img :src="`${image}`" class="image">
        </section>
        <section>
            <h2 className="name">{{ name }}</h2>
            <h3> Type: {{ type }}</h3>
        </section>
        <button v-on:click="addPokemonInTeam(id)" class="btn-change-name">ESCOLHER</button>
    </section>
</template>

<script lang="ts">
import store from "../store"
import router from "@/router"
export default {
    props: {
        id: Number,
        name: String,
        image: String,
        type: String,
        class: String,
        /* 
         attack1: String,
         attack2: String,
         attack3: String, */
    },
    methods: {
        addPokemonInTeam(idParamiter: number) {
            if (store.state.myTeam.length <= 5) {
               store.commit('addPokemonInMyTeam', idParamiter)
                console.log('pokemon adicionado no time')
            } else {
                console.log('limite de pokemon no time atingido')
                return
            } 
        },
        pegeAboutPokemon(id: number){
           router.push({ path: `/pokemon/${id-1}` })
        }
    },
    created() { }
}
</script>

<style scoped>
h3{
    color: rgb(11, 3, 49);
}
.mb{
    margin-bottom: 10px;
    max-width: 220px;
    max-width: 190px;
}
.cursor-pointer{
    cursor: pointer;
  }

</style>