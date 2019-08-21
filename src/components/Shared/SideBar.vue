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
          title: 'Campaign Manager',
          icon: 'fa fa-chart-area',
          // child: [
          //   {
          //     href: '/charts/sublink',
          //     title: 'Sub Link'
          //   }
          // ]
        },
        {
          href: '/advertiser',
          title: 'Advertisers dashboard',
          icon: 'fab fa-app-store-ios'
        },
        {
          href: '/',
          title: 'User Account',
          icon: 'fa fa-user'
        }
      ]
    }
  }
}
</script>
