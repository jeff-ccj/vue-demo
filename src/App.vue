<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


  export default {
    name: 'app'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.mint-header.is-fixed + .page-main {
  margin-top: 50px;
  min-height: 120vh;
}
</style>
