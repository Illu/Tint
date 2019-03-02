<template>
  <div id="app">
    <AppTitle />
    <Converter />
  </div>
</template>

<script>
import AppTitle from './components/AppTitle.vue'
import Converter from './components/Converter.vue'


export default {
  name: 'app',
  components: {
    AppTitle,
    Converter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
