<template>
  <div>
    <b-tab :title="$t('campaign.campaign')" active>
    <b-card-text>
      <div class="fs-13">
        <div v-if="!this.items" class="progress-cir">
          <v-progress-circular
            :size="50"
            indeterminate
          ></v-progress-circular>
        </div>
        <b-table v-else sticky-header="400px" head-variant="light" class="my-table text-nowrap" small bordered responsive :items="items" :fields="fields">
          <div slot="status" slot-scope="data" >
            <b-form-checkbox v-if="data.value == '1'" checked='true' switch></b-form-checkbox>
            <b-form-checkbox v-else switch></b-form-checkbox>
          </div>
          <div slot="name" slot-scope="data" >
            <router-link tag="span" :to="{ path: `campaign-manager/${data.item.id}/${data.item.name}`}" class="link-a">
              {{ data.value }}
            </router-link>
          </div>
          <div slot="chart" slot-scope="data" >
            <b-button @click="reportCampaign(data.item.name)" v-b-modal="'modal-center-' + data.item.id" variant="primary" size="sm">{{ $t('campaign.table.chart') }}</b-button>
            <b-modal size="xl" :id="'modal-center-' + data.item.id" centered hide-footer title="HighChart">
              <div class="slect-chart-report col-4">
                <span class="title">Report Date: </span>
                <b-form-select v-model="selected" :options="options" size="sm" @change="selectDate(data.item.name)"></b-form-select>
              </div>
              <Chart :options="chartOptions" />
            </b-modal>
          </div>
        </b-table>
        <div id="no-data">{{ $t('data.no_data') }}</div>
      </div>
    </b-card-text>
  </b-tab>
  </div>
</template>

<script>
import {Chart} from 'highcharts-vue'
import CampaignApi from '../../api/CampaignApi'
export default {
  created() {
    this.fetchItemList()
  },
  methods: {
    fetchItemList() {
      CampaignApi.getCampaignMedia(this.$session.get('listAccount')).then(response => {
          var data = response.data
          var arrData = []
          for(let i=0; i<data.length; i++) {
            for(let j=0; j<data[i].length; j++) {
              arrData.push(data[i][j])
            }
          }
          this.dataCampaign = arrData
          let campaign_names = []
          for(let i=0; i<data.length; i++){
            for(let j=0; j<data[i].length; j++){
              campaign_names.push(data[i][j].name)
            }
          }
          let obcampaignNames = {
            "campaignNames": campaign_names
          }
          this.fetchReportCampaign(obcampaignNames)
        }, error => {
          this.checkDataTable()
          console.log(error)
      });
    },
    fetchReportCampaign(campaign_names) {
      CampaignApi.getReportCampaign(campaign_names).then(response => {
          let arrAllItem = []
          for(let i=0; i<this.dataCampaign.length; i++){
            arrAllItem.push(Object.assign({}, response.data[i], this.dataCampaign[i]))
          }
          this.items = arrAllItem
        }, error => {
          this.checkDataTable()
          console.log(error)
      });
    },
    checkDataTable() {
      this.items = []
      document.getElementById('no-data').style.display = "block"
    },
    reportCampaign(campaign_name) {
      this.selected = 1
      this.fetchReportChart(campaign_name, 'report-today')
    },
    fetchReportChart(campaign_name, select) {
      CampaignApi.getReportChart(campaign_name, select).then(response => {
          var clicks=[], views=[], total_25per=[], total_50per=[], total_75per=[], total_100per=[], date=[]
          var { performance } = response.data
          for(let i=0; i<performance.length; i++)
          {
            clicks.push(performance[i].total_clicks)
            views.push(performance[i].total_views)
            total_25per.push(performance[i].total_25per_completions)
            total_50per.push(performance[i].total_50per_completions)
            total_75per.push(performance[i].total_75per_completions)
            total_100per.push(performance[i].total_100per_completions)
            date.push(performance[i].date)
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
            {
              name: 'Video watchs 25%',
              data: total_25per,
              color: '#fc03fc'
            },
            {
              name: 'Video watchs 50%',
              data: total_50per,
              color: '#fc7703'
            },
            {
              name: 'Video watchs 75%',
              data: total_75per,
              color: '#ebfc03'
            },
            {
              name: 'Video watchs 100%',
              data: total_100per,
              color: '#03fcfc'
            },
          ]
          this.chartOptions.series = series
          this.chartOptions.xAxis.categories = date
        }, error => {
          console.log(error)
      });
    },
    selectDate(campaign_name) {
      switch (this.selected) {
        case 2:
          this.fetchReportChart(campaign_name, 'report-this-week')
          break
        case 3:
          this.fetchReportChart(campaign_name, 'report-this-month')
          break
        default:
          this.fetchReportChart(campaign_name, 'report-today')
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
      dataCampaign: null,
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
          label: this.$t("campaign.table.status"),
          sortable: true
        },
        {
          key: 'id',
          label: this.$t("campaign.table.id"),
          sortable: true
        },
        {
          key: 'name',
          label: this.$t("campaign.table.campaign_name"),
          sortable: true
        },
        {
          key: 'media_name',
          label: this.$t("campaign.table.media_name"),
          sortable: true
        },
        {
          key: 'delivery_status_name',
          label: this.$t("campaign.table.delivery_status"),
          sortable: true
        },
        {
          key: 'object_name',
          label: this.$t("campaign.table.object_name"),
          sortable: true
        },
        {
          key: 'budget_type',
          label: this.$t("campaign.table.budget_type"),
          sortable: true
        },
        {
          key: 'campaign_period_budget',
          label: this.$t("campaign.table.campaign_period_budget"),
          sortable: true
        },
        {
          key: 'std_daily_budget',
          label: this.$t("campaign.table.std_daily_budget"),
          sortable: true
        },
        {
          key: 'total_clicks',
          label: this.$t("campaign.table.clicks"),
          sortable: true
        },
        {
          key: 'total_views',
          label: this.$t("campaign.table.views"),
          sortable: true
        },
        {
          key: 'total_costs',
          label: this.$t("campaign.table.costs"),
          sortable: true
        },
        {
          key: 'kpi',
          label: this.$t("campaign.table.kpi"),
          sortable: true
        },
        {
          key: 'period_from',
          label: this.$t("campaign.table.period_from"),
          sortable: true
        },
        {
          key: 'period_to',
          label: this.$t("campaign.table.period_to"),
          sortable: true
        },
        {
          key: 'chart',
          label: this.$t("campaign.table.chart")
        }
      ],
      items: null
    }
  }
}
</script>
