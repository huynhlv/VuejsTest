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
          icon: 'fa fa-chart-area',
          // child: [
          //   {
          //     // href: '/campaign-manager/:idcampaign',
          //     // title: 'Sub Link'
          //   }
          // ]
        },
        {
          href: '/advertiser',
          title: this.$t("sidebar.advertisers"),
          icon: 'fab fa-app-store-ios'
        },
        {
          href: '/',
          title: this.$t("sidebar.user_account"),
          icon: 'fa fa-user'
        }
      ]
    }
  }
}
</script>
