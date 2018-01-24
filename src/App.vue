<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <footer-bar/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FooterBar from './components/FooterBar.vue'
export default {
  name: 'app',
  components: {
    Navbar,
    FooterBar
  }
}
</script>

<style>
html,body{
  padding: 0;
  margin: 0;
  background-color: #fefefe;
}

.card{
  box-shadow: 0 0 2px #ccc;
  background-color: white;
}
</style>
