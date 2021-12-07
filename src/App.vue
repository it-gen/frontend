<template>
  <div class="container">
    <component-nav-bar />
    <router-view/>
  </div>
</template>

<script>
import ComponentNavBar from './components/ComponentNavBar.vue'

export default {
  name: 'App',
  components: {
    ComponentNavBar
  }
}
</script>

<style>
@import "assets/styles/style.css"
</style>
