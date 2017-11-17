<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <record></record>
  </div>
</template>

<script>
import record from './components/record.vue'
export default {
  name: 'app',
  components: {
    record
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
