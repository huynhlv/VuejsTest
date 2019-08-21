<template>
  <div>
    <Header />
    <SideBar />
    <router-view />
  </div>
</template>
<script>
import SideBar from '../Shared/SideBar'
import Header from '../Shared/Header'
export default {
  beforeCreate() {
    if(!this.$session.exists()) {
      this.$router.push('/login')
    }
  },
  components: {
    SideBar,
    Header
  }
}
</script>