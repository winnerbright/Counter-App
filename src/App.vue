<template>
  <div id="app">
    <nav>
      <div class="header">My Counter App</div>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>
<style>
#app {
  font-family: 'Comic Sans MS', cursive, sans-serif;
  text-align: center;
}
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #111;
  color: purple;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid purple;
}

.header {
  font-size: 2.4rem;
  color: purple;
  font-family: cursive;
  font-weight: light;
  letter-spacing: 4px;
}
</style>