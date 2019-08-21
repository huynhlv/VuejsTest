<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
export default {
  name: 'App',
  components: {
    SidebarMenu
  }
}
</script>

<style lang="scss" src="./assets/style.scss"></style>
