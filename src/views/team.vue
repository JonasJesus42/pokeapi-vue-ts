<template>
    <section class="my-team center">
        <div class="header-myteam">
            <h2>You Team</h2>
        </div>
        <div class="containe">
            <CardTeam v-for="(pokemon, index) in storeMyteam.state.myTeam" :key="pokemon.id" :obj="pokemon" :index="index" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import CardTeam from '@/components/CardTeam.vue';
import { storeMyteam } from '@/store';
</script>

<style scoped>
.my-team {
    min-height: 200px;
    margin: 20px;
    background-color: #FFFA77;
    border-radius: 20px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
}

.center {
    align-items: center;
    justify-content: center;
}

.containe {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
}

.header-myteam {
    background-color: #ffff;
    border-radius: 20px 20px 0px 0px;
    display: flex;
    justify-content: center;
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
    color: #FFFA77;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
    text-shadow: 0 0px 5px rgba(0, 0, 0, 0.7);
}
</style>