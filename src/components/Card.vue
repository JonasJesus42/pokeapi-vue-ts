<template class="Card">
    <div class="card">
        <div class="deta d-flax">
            <h1 class="name">{{ props.obj.name }}</h1>
            <h1 class="name">#{{ id }}</h1>
        </div>
        <div class="area-image">
            <img
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`">
        </div>
        <div class="btn-area d-flax">
            <button class="btn-choice" @click="handleClickChoic(store.state.detalesPokemon[props.index])">Choice</button>
            <button class="btn-details" @click="hendleRedirect(id)">details</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { storeMyteam, store } from "@/store";
import router from "@/router"
import { Pokemon } from "@/interfaces/pokemons";

const props = defineProps<{
    index: number,
    obj: Pokemon
}>()
const id = props.index + 1

function handleClickChoic(objPokemon: any) {
    if (storeMyteam.state.myTeam.length <= 5) {
        storeMyteam.commit('addPokemonInMyTeam', objPokemon)
    }
}
function hendleRedirect(id: number) {
    router.push({ path: `/pokemon/${id}` })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&display=swap');
.d-flax{
    display: flex;
}
.card {
    width: 200px;
    margin: auto auto 10px auto;
    text-align: center;
    box-sizing: border-box;
    border-radius: 20px;

    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
    background-color: #3b77a8;
}

.deta {
    justify-content: space-around;
    margin-top: 15px;
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

img {
    width: 85%;
    height: 85%;
}

.btn-area {
    background-color: #ffffff;
    border-radius: 0px 0px 20px 20px;
    padding: 10px;
    justify-content: space-between;
    margin-top: 5px;
}

.btn-details,
.btn-choice {
    width: 60px;
    height: 30px;
    border-radius: 10px;
    border-style: none;
    color: aliceblue;
    cursor: pointer;
    font-size: .9rem;
}

.btn-choice {
    background-color: #70A83B;
}

.btn-details {
    background-color: #3b77a8;

}

.btn-choice:hover {
    background-color: #425e28;
}

.btn-details:hover {
    background-color: #2d5a80;
}
</style>