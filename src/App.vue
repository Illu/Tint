<template>
  <div id="app">
    <Blob />
    <AppTitle />
    <Converter />
    <div id="footer">
      <a href="https://twitter.com/maximenory">
        <p>2019 Maxime Nory</p>
      </a>
    </div>
  </div>
</template>

<script>
import AppTitle from './components/AppTitle.vue'
import Converter from './components/Converter.vue'
import Blob from './components/Blob.vue'

export default {
  name: 'app',
  components: {
    AppTitle,
    Converter,
    Blob
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

#footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  text-decoration: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: 
}
</style>
