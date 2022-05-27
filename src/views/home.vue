<template>
  <div class="view-home">
    <section class="my-team center j-center ">
      <div class="header-myteam">
        <h2>You Team</h2>
      </div>
      <div class="containe j-center">
        <CardYouTeam v-for="(pokemon, index) in storeMyteam.state.myTeam" :pokemon="pokemon" :index="index" />
      </div>
    </section>

    <section class="list ">
      <Pokelist />
    </section>
  </div>
</template>

<script lang="ts" setup>
import Pokelist from '../components/Pokelist.vue'
import CardYouTeam from '@/components/CardYouTeam.vue';
import { storeMyteam } from '../store'
</script>

<style scoped>
.containe {
  display: flex;
  box-sizing: border-box;
  margin: 20px 0;
}

.j-center {
  justify-content: center;
}

.center {
  align-items: center;
}

.list {
  min-height: 600px;
  margin: 15px;
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

.my-team {
  min-height: 200px;
  max-height: 400px;
  margin: 20px;
  background-color: #FFFA77;
  border-radius: 20px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
