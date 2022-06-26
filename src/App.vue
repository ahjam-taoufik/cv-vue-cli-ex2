<template>
  <div id="app">
    <header-top></header-top>
    <contenu></contenu>
  </div>
</template>

<script>
  
  import Contenu from './components/Contenu.vue'
  import Header from './components/header/Header.vue'
export default {
  name: 'App',
  components: {
   'contenu':Contenu,
   // eslint-disable-next-line vue/no-unused-components
   'header-top':Header,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
