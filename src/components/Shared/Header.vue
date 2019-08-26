<template>
  <div class="m-50p">
    <div class="m-2">
      <img class="w-6 m-auto d-block" src="https://dactech.vn/wp-content/uploads/2019/03/logo-300x200.png" />
    </div>
    <b-nav class="profile fs-12 my-auto nav-left">
      <b-nav-item-dropdown
        :text="$t('common.admin')"
        toggle-class="nav-link-custom"
        right
      >
        <b-dropdown-item class="fs-12" @click="logout">{{ $t("common.logout") }}</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$session.destroy()
      this.$router.push('/login')
    }
  }
}
</script>
