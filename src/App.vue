<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

* {
  box-sizing: border-box;
}

body, html {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  color: #4d4d4d;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
}
</style>
