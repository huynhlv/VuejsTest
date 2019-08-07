<template>
  <div>
    <sidebar-menu :menu="menu" collapsed showChild />
    <div class="m-50p">
      <div>
        <div class="m-2">
          <img class="w-6 m-auto d-block" src="https://dactech.vn/wp-content/uploads/2019/03/logo-300x200.png" />
          <h2 class="text-center">Campaign Manager</h2>
        </div>
        <b-nav class="fs-12 my-auto nav-left">
          <b-nav-item-dropdown
            text="Admin"
            toggle-class="nav-link-custom"
            right
          >
            <b-dropdown-item class="fs-12" @click="logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
      </div>
      <Chart :options="chartOptions" />
      <div class="mx-5">
        <b-card no-body>
          <b-tabs card small>
            <router-view />
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import {Chart} from 'highcharts-vue'
export default {
  components: {
    Chart
  },
  beforeCreate() {
    if(!this.$session.exists()) {
      this.$router.push('/')
    }
  },
  methods: {
    logout() {
      this.$session.destroy()
      this.$router.push('/')
    }
  },
  data() {
    return {
      menu: [
        {
          href: '/',
          title: 'User Account',
          icon: 'fa fa-user'
        },
        {
          href: '/campaign-manager',
          title: 'Campaign Manager',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/charts/sublink',
              title: 'Sub Link'
            }
          ]
        },
        {
          href: '/',
          title: 'Advertisers dashboard',
          icon: 'fab fa-app-store-ios'
        }
      ],
      chartOptions: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Sin chart'
        },
        series: [{
          // pointStart: 2010,
          data: [10, 0, 8, 2, 6, 4, 5, 5],
          color: '#6fcd98'
        }],
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
        }
      },
    }
  }
}
</script>

