<template>
    <section className="container">
        <Card v-for="pokemom in store.state.pokemons" :class='pokemom.type + " card"' :id='pokemom.id'
            :name="pokemom.name" :image='pokemom.image' :type='pokemom.type' />
    </section>
</template>

<script lang="ts">
import store from '../store';
import Card from './card.vue';

export default {
    data() {
        return { store }
    },
    components: {
        Card
    },
}
</script>

<style scoped>
section {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 8px;
    flex-wrap: wrap;
    display: flex;
}

</style>
