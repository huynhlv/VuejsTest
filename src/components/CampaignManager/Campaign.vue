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
          <template slot="campaign_name" slot-scope="data" >
            <router-link tag="span" :to="{ path: 'campaign-manager/' + data.item.campaign_id }" class="link-a">
              {{ data.value }}
            </router-link>
          </template>
          <template slot="chart" slot-scope="data" >
            <b-button @click="reportCampaign(data.item.campaign_id)" v-b-modal="'modal-center-' + data.item.campaign_id" variant="primary" size="sm">Chart</b-button>
            <b-modal size="xl" :id="'modal-center-' + data.item.campaign_id" centered hide-footer title="HighChart">
              <div class="slect-chart-report col-4">
                <span class="title">Report Date: </span>
                <b-form-select v-model="selected" :options="options" size="sm" @change="selectDate(data.item.campaign_id)"></b-form-select>
              </div>
              <Chart :options="chartOptions" />
            </b-modal>
          </template>
        </b-table>
      </div>
    </b-card-text>
  </b-tab>
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
      this.$http.post('http://ad-tech-dac.herokuapp.com/api/social_accounts/campaigns', this.$session.get('listAccount')).then(response => {
          this.items = response.body
        }, error => {
          console.log(error)
      });
    },
    reportCampaign(id) {
      this.fetchReportCampaign(id, 'report-today')
    },
    fetchReportCampaign(id, select) {
      this.$http.post('http://ad-tech-dac.herokuapp.com/api/social_accounts/campaigns/'+id+'/'+select, this.$session.get('listAccount')).then(response => {
          var clicks=[], views=[], total_25per=[], total_50per=[], total_75per=[], total_100per=[], date=[]
          for(let i=0; i<response.body.length; i++)
          {
            clicks.push(response.body[i].total_clicks)
            views.push(response.body[i].total_views)
            total_25per.push(response.body[i].total_25per_completions)
            total_50per.push(response.body[i].total_50per_completions)
            total_75per.push(response.body[i].total_75per_completions)
            total_100per.push(response.body[i].total_100per_completions)
            date.push(response.body[i].date)
          }
          var series = [
            {
              name: 'Click',
              data: clicks,
              color: '#6fcd98'
            },
            {
              name: 'Views',
              data: views,
              color: '#007bff'
            },
          ]
          this.chartOptions.series = series
          this.chartOptions.xAxis.categories = date
        }, error => {
          console.log(error)
      });
    },
    selectDate(id) {
      switch (this.selected) {
        case 2:
          this.fetchReportCampaign(id, 'report-this-week')
          break
        case 3:
          this.fetchReportCampaign(id, 'report-this-month')
          break
        default:
          this.fetchReportCampaign(id, 'report-today')
          break
      }
    }
  },
  components: {
    Chart
  },
  data() {
    return {
      listAccount: {
        advertiserEmails: [
          "cbode@welch.com",
          "erdman.jacey@lakin.biz"
        ]
      },
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
        // plotOptions: {
          // spline: {
          //   pointInterval: 3600000,
          //   pointStart: Date.now()
          // }
        // },
        series: null,
        xAxis: {
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
          key: 'campaign_id',
          label: 'ID',
          sortable: true
        },
        {
          key: 'campaign_name',
          label: 'Campaign Name',
          sortable: true
        },
        {
          key: 'total_clicks',
          label: 'Clicks',
          sortable: true
        },
        {
          key: 'total_views',
          label: 'Views',
          sortable: true
        },
        {
          key: 'total_costs',
          label: 'Costs',
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
          key: 'period_from',
          sortable: true
        },
        {
          key: 'period_to',
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