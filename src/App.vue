<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Login from './components/Authen/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style lang="scss" src="./assets/style.scss"></style>
