<template>
    <section class="pokecard">
        <PokeCard />
    </section>
</template>

<script lang="ts">

import PokeCard from './Myteamcard.vue'

export default {
  components:{
    PokeCard
  },
  methods:{

  }
}
</script>

<style scoped>
  .pokecard{
    display: flex;
  }
</style>