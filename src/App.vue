<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <search></search>
  </div>
</template>

<script>
import search from './components/search.vue'
export default {
  name: 'app',
  components: {
    search
  }
}
</script>

<style>
@import './css/normalize.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
