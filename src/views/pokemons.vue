<template>
    <section :class='pokemon[$route.params.id].type + " page "'>
        <section class="area-image">
            <img :src="`${pokemon[$route.params.id].image}`" class="image">
        </section>
        <section class="info">
            <h2 class="name name-about">{{ pokemon[$route.params.id].name }}</h2>
            <h3 class="type"> {{ pokemon[$route.params.id].type }}</h3>
            <section class="info-atacks">
                <h3> attack: {{ pokemon[$route.params.id].type }}</h3>
                <h3> attack: {{ pokemon[$route.params.id].type }}</h3>
                <h3> attack: {{ pokemon[$route.params.id].type }}</h3>
            </section>
        </section>
    </section>
</template>

<script lang="ts">
import store from "@/store"

export default{
    data(){
        return{
            pokemon: store.state.pokemons
        }
    },
    computed:{
    }
}
</script>

<style scoped>
    .page{
        width: 95.8vw;
        height: 79vh;
        padding: 30px;
        display: flex;
    }
    .area-image{
        width: 300px;
        height: 300px;
        border: 5px solid rgb(42, 40, 40);
        background-color: rgb(180, 208, 232);
        margin: 0 20px 0 0;
    }
    .info{
        width: 50vw;
        text-align: center;
    }
    .info-atacks{
        margin-top: 40px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
.name-about{
    font-size: 6rem;
}
.type{
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
}
</style>