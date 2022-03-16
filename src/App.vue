<template>
<nav>
  <router-link to="/"> Home</router-link>
    <router-link to="/add"> Add Project</router-link>
</nav>
<router-view/>
</template>

<script lang="ts" >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from "./views/Home.vue"
export default {
  name: "App",
  components: { Home },
}
</script>

<style>
body {
  background: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
</style>
