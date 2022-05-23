<template>
  <div id="nav">
    <div class="img-area">
      <img src="./assets/logo.png" alt="Logo">
    </div>
    <div>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/team" class="link">Team</router-link>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue'
import store from '@/store';
import { getPokemon } from '@/services/index'
import Pokemons from '@/interfaces/pokemons'

export default {
  components: {
    NavBar,
  },
  methods: {
    async pokemon() {
      if(store.state.pokemons.length < 150){
        console.log(`entrou na função pokemon com ${store.state.pokemons.length}`)
        for (let i = 1; i <= 150; i++) {
          const objectPokemon = await getPokemon(i)
          this.newObjectPokemon(objectPokemon)
        }
      }
    },
    newObjectPokemon(pokemonObj: Pokemons) {
      const { id, name, types } = pokemonObj
      const type = types.map(info => info.type.name).join(' | ')
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      const objectPokemon = {
        id: id,
        name: name,
        type: type,
        image: image,
      }
      store.commit('addInPokemons', objectPokemon)
    },
  },
  mounted(){
    this.pokemon()
  },
}
</script>


<style>
body {
  background-color: #b4d5bd;
}

h1,
h2,
h3,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* start nav style */
#nav {
  width: 97.4vw;
  height: 75px;
  background-color: #303030;
  display: flex;
  padding: 0 10px 0 10px;
  justify-content: space-between;
  text-align: center;
  align-items: center;
}

.link {
  list-style: none;
  text-decoration: none;
  color: #d5f3d7;
  font-family: monospace;
  font-size: 1.5rem;
  margin-left: 20px;
}

#nav img {
  width: 50%;
  height: 100%;
}

/* end nav style */
/* start cads */
.componente {
  margin: auto;
  text-align: center;
  box-sizing: border-box;
  border-radius: 20px;
  width: 100%;
  height: 100%;

  border: 1px solid burlywood;
  justify-content: center;
}

.s-btn-x {
  display: flex;
  justify-content: end;
  margin: 10px 10px 0 0;
}

.btn-x {
  background-color: red;
  border: none;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  color: #DEF3FD;
}

.image-area {
  width: 100%;
  height: 140px;
}

.image {
  width: 100%;
  height: 100%;
}

.btns {
  margin-bottom: 10px;
  box-sizing: border-box;
}

.infos {
  width: 100%;
  height: 200px;
  margin-top: 40px;
}

.btn-change-name,
.btn-x {
  cursor: pointer;
}

.input-change-name,
.btn-change-name {
  background-color: blanchedalmond;
  border: 1px solid #97b3e6;
  border-radius: 5px;
  margin-top: 5px;
  height: 90%;
  width: 90%;
}

.name {
  text-transform: capitalize;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  color: rgb(250, 71, 71);
  font-size: 1.5rem;
  text-shadow: 0.01em 0.01em 0.08em rgb(14, 14, 14)
}

/* end cards */


.title {
  display: flex;
  justify-content: center;
  font-family: monospace;
  font-size: 1.5rem;
  color: rgb(244, 247, 250);
  margin: 0 0 5px 0;
  text-shadow: 0.01em 0.01em 0.08em rgb(14, 14, 14)
}

.steel {
  background-color: #f4f4f4;
}

.fire {
  background-color: #FDDFDF;
}

.grass {
  background-color: #DEFDE0;
}

.electric {
  background-color: #FCF7DE;
}

.water,
.ice {
  background-color: #DEF3FD;
}

.ground {
  background-color: #f4e7da;
}

.rock {
  background-color: #d5d5d4;
}

.fairy {
  background-color: #fceaff;
}

.poison {
  background-color: #98d7a5;
}

.bug {
  background-color: #f8d5a3;
}

.dragon {
  background-color: #97b3e6;
}

.ghost {
  background-color: #bc97e6;
}

.psychic {
  background-color: #eaeda1;
}

.flying {
  background-color: #F5F5F5;
}

.fighting {
  background-color: #E6E0D4;
}

.normal {
  background-color: #F5F5F5;
}
</style>
