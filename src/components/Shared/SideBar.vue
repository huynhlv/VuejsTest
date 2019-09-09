<template>
  <div>
    <sidebar-menu :menu="menu" collapsed showChild />
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          href: '/campaign-manager',
          title: this.$t("sidebar.campaign_manager"),
          icon: 'fa fa-chart-area'
        },
        {
          href: '/advertiser',
          title: this.$t("sidebar.advertisers"),
          icon: 'fab fa-app-store-ios'
        }
      ]
    }
  }
}
</script>
