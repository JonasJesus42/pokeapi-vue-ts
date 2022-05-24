<template>
    <section class="title">
        <h1>You Team</h1>
    </section>
    <section class="team">
        <NewCardPokemon />
    </section>
</template>
<script lang="ts">
import NewCardPokemon from "../components/NewCardPokemon.vue";
    export default{
    components: { NewCardPokemon }
}
</script>

<style scoped>
.team{
    display: flex;
    height: 80vh;
    width: 98vw;
}
</style>