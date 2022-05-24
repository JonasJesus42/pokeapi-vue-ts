<script lang="ts">
import MyTeam from '../components/Myteam.vue'
import Pokelist from '../components/Pokelist.vue'

export default {
  components: {
    MyTeam,
    Pokelist
  },
}
</script>

<template>
  <div>
    <header class="title">
      <h1>Pokemon Team</h1>
    </header>

    <section class="my-team bg-bd-color center ">
      <div class="title">
        <h2>You team</h2>
      </div>
      <MyTeam />
    </section>

    <section class="list bg-bd-color">
       <div class="title">
         <h2 >Select you Pokemon for you team!</h2>
       </div>
      <Pokelist />
    </section>
  </div>
</template>

<style scoped>
.containe{
  display: flex;
  box-sizing: border-box;
}

.center {
  align-items: center;
  justify-content: center;
}

.sub-title {
  font-size: 2rem;
}

.list {
  border: 1px solid #42b983;
  min-height: 600px;
  margin: 20px;
}

.my-team {
  min-height: 200px;
  max-height: 400px;
  margin: 0 20px;
  padding: 10px;
}

.bg-bd-color {
  background-color: #ff887d;
  border: 3px solid rgb(27, 27, 27);
  color: #fdfdfd;
}

.area {
  height: 200px;
}

</style>
