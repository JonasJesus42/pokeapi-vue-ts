<script lang="ts">
import Pokelist from '../components/Pokelist.vue'
import Myteamcard from '../components/Myteamcard.vue'
import store from '../store'


export default {
  components: {
    Pokelist,
    Myteamcard,
},
data(){
  return {store}
} 
}
</script>

<template>
  <div>
    <section class="my-team bg-bd-color center ">
      <div class="header-myteam">
        <h2>You Team</h2>
      </div>
      <div class="containe">
        <Myteamcard v-for="pokemon in store.state.myTeam" :pokemon="pokemon" />
      </div>
    </section>


    <section class="list ">
      <Pokelist />
    </section>
  </div>
</template>

<style scoped>
.containe{
  display: flex;
  box-sizing: border-box;
  margin: 20px 0;
  justify-content: center;
}
.center {
  align-items: center;
  justify-content: center;
}
.list {

  min-height: 600px;
  margin: 20px;
}
.header-myteam{ 
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
.bg-bd-color 
.area {
  height: 200px;
}
</style>
