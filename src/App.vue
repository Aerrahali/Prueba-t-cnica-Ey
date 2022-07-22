<template>

  <div id="app">
    <GalleryImage />
  </div>
  
</template>

<script>

import GalleryImage from './components/GalleryImage.vue'
export default {
  name: 'App',
  components: {
    GalleryImage
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
