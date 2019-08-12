<template>
  <div>
    <b-tab title="Campaign" active>
    <b-card-text>
      <div class="fs-13">
        <div v-if="!this.items" class="progress-cir">
          <v-progress-circular
            :size="50"
            indeterminate
          ></v-progress-circular>
        </div>
        <b-table v-else class="my-table" small bordered responsive :items="items" :fields="fields">
          <template slot="status" slot-scope="data" >
            <b-form-checkbox v-if="data.value == '1'" checked='true' switch></b-form-checkbox>
            <b-form-checkbox v-else switch></b-form-checkbox>
          </template>
          <template slot="name" slot-scope="data" >
            <router-link tag="span" :to="{ path: 'campaign-manager/' + data.item.id }" class="link-a">
              {{ data.value }}
            </router-link>
          </template>
          <template slot="chart" slot-scope="data" >
            <b-button v-b-modal="'modal-center-' + data.item.id" variant="primary" size="sm">Chart</b-button>
            <b-modal size="xl" :id="'modal-center-' + data.item.id" centered hide-footer title="HighChart">
              <div class="slect-chart-report col-4">
                <span class="title">Report Date: </span>
                <b-form-select v-model="selected" :options="options" size="sm" @change="selectDate"></b-form-select>
                <span>{{selected}}</span>
              </div>
              <Chart :options="chartOptions" />
            </b-modal>
          </template>
        </b-table>
      </div>
    </b-card-text>
  </b-tab>
  <button @click="test">test</button>
  </div>
</template>

<script>
import {Chart} from 'highcharts-vue'
export default {
  created() {
    this.fetchItemList()
  },
  methods: {
    fetchItemList() {
      this.$http.get('http://ad-tech-dac.herokuapp.com/api/social_accounts/ad_performance_report').then(response => {
          this.items = response.body
        }, error => {
          console.log(error)
          // console.log(new Date().toISOString().slice(0,10))
      });
    },
    selectDate() {
      switch (this.selected) {
        case 2:
          console.log('week')
          this.chartOptions.xAxis.categories = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
          ]
          break
        case 3:
          console.log('thang')
          break
        default:
          console.log('ngay');
          this.chartOptions.xAxis.categories = null
          break
      }
    },
    test() {
      this.$http.get('http://ad-tech-dac.herokuapp.com/api/social_accounts/ad_performance_report').then(response => {
        console.log(response.body);
      }, error => {
        console.log(error);
        console.log(new Date().toISOString().slice(0,10));
      });
    }
  },
  components: {
    Chart
  },
  data() {
    return {
      selected: 1,
      options: [
        { value: 1, text: 'Today'},
        { value: 2, text: 'This Week' },
        { value: 3, text: 'This Month' }
      ],
      chartOptions: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Campaign Peformance'
        },
        plotOptions: {
          spline: {
            pointInterval: 3600000,
            pointStart: Date.now()
          }
        },
        series: [
          {
            // pointStart: 2010,
            name: 'Click',
            data: [
              3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
              6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
              9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
              10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
              10.1
            ],
            color: '#6fcd98'
          },
          {
            name: 'Impression',
            data: [
              0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
              0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
              0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
              0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
              1.5
            ],
            color: '#1a73e8'
          }
        ],
        xAxis: {
          type: 'datetime',
          categories: null
        },
        yAxis: {
          title: {
            text: 'Valueee'
          }
        }
      },
      fields: [
        {
          key: 'status',
          sortable: true
        },
        {
          key: 'id',
          label: 'ID',
          sortable: true
        },
        {
          key: 'name',
          label: 'Campaign Name',
          sortable: true
        },
        {
          key: 'spent',
          sortable: true
        },
        {
          key: 'click',
          sortable: true
        },
        {
          key: 'impression',
          sortable: true
        },
        {
          key: 'ctr',
          label: 'CTR',
          sortable: true
        },
        {
          key: 'cpc',
          label: 'CPC',
          sortable: true
        },
        {
          key: 'delivery_status',
          sortable: true
        },
        {
          key: 'kpi',
          label: 'KPI',
          sortable: true
        },
        {
          key: 'objective',
          sortable: true
        },
        {
          key: 'start_schedule',
          sortable: true
        },
        {
          key: 'end_schedule',
          sortable: true
        },
        {
          key: 'budget_type',
          sortable: true
        },
        {
          key: 'chart'
        }
      ],
      items: null
    }
  }
}
</script>
