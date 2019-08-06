<template>
  <div id="app">
    <router-view />
  </div>
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
