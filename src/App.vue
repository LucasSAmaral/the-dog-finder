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
  max-width: 480px;
  width: 100%;
  min-height: 300px;
}
</style>
