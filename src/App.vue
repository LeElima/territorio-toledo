<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <NavigationVue/>
    <router-view/>
    <FooterVue/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import FooterVue from './components/Footer.vue';
import NavigationVue from './components/Navigation.vue';
export default Vue.extend({
  name: 'App',
  components :{
    FooterVue,
    NavigationVue
  },
  created(){
    console.log("Oie")
    this.$store.dispatch("listarTerritorios");
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
