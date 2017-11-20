<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <record></record>
    <datafrom></datafrom>
  </div>
</template>

<script>
import record from './components/record.vue'
import form from './components/form.vue'
export default {
  name: 'app',
  components: {
    'record': record,
    'dataform': form
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
