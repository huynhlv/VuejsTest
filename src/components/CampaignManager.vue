<template>
  <div>
    <div class="m-2 d-flex">
      <img class="w-6 m-auto" src="https://dactech.vn/wp-content/uploads/2019/03/logo-300x200.png">
      <b-nav class="fs-12 my-auto">
        <b-nav-item-dropdown
          text="Admin"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item class="fs-12">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </div>
    <h2 class="text-center">Campaign Manager</h2>
    <Chart :options="chartOptions" />
    <div class="mx-5">
      <b-card no-body>
        <b-tabs card small>
          <router-view />
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>
<script>
import {Chart} from 'highcharts-vue'
export default {
  components: {
    Chart
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Sin chart'
        },
        series: [{
          data: [10, 0, 8, 2, 6, 4, 5, 5],
          color: '#6fcd98'
        }]
      },
    }
  }
}
</script>

