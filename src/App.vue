<template>
  <Navbar />
</template>

<script lang="ts" setup>
import Navbar from './Navbar.vue'

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
