<template>
  <div>
    <router-link>
        <img src="" id="logo">
    </router-link>
  </div>
  <div>
    <router-link to="/" >home </router-link>
    <router-link to="/team" >team</router-link>
  </div>
</template>

<script lang="ts">

export default {
    name: "NavBar",
}
</script>

<style scoped>
</style>