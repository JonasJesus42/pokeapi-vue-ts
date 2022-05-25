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
</template>

<style scoped>
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
</style>