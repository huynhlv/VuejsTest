<template>
  <div>
    <b-tab :title="$t('campaign.campaign')" @click="backCampaign"></b-tab>
    <b-tab :title="$t('campaign.ad_groups')" active>
      <b-card-text>
        <div class="fs-13">
          <div v-if="!this.items" class="progress-cir">
            <v-progress-circular
              :size="50"
              indeterminate
            ></v-progress-circular>
          </div>
          <b-table v-else sticky-header="400px" head-variant="light" class="my-table text-nowrap" small bordered responsive :items="items" :fields="fields">
            <template slot="status" slot-scope="data" >
              <b-form-checkbox v-if="data.value == '1'" checked='true' switch class="not-allow" disabled></b-form-checkbox>
              <b-form-checkbox v-else switch class="not-allow" disabled></b-form-checkbox>
            </template>
            <template slot="name" slot-scope="data" >
              <router-link tag="span" :to="{ path: `${$route.params.namecampaign}/${data.item.id}/${data.item.name}`}" class="link-a">
                {{ data.value }}
              </router-link>
            </template>
          </b-table>
        </div>
      </b-card-text>
    </b-tab>
  </div>
</template>
<script>
import CampaignApi from '../../api/CampaignApi'
export default {
  created() {
    this.fetchItemList()
  },
  methods: {
    backCampaign() {
      this.$router.push('/campaign-manager')
    },
    fetchItemList() {
      CampaignApi.getAdgroupMedia(this.$route.params.idcampaign, this.$session.get('listAccount')).then(response => {
          var data = response.data
          var arrData = []
          for(let i=0; i<data.length; i++) {
            for(let j=0; j<data[i].length; j++) {
              arrData.push(data[i][j])
            }
          }
          this.dataAdgroup = arrData
          this.fetchReportAdgroup(this.$route.params.namecampaign)
        }, error => {
          console.log(error)
      });
    },
    fetchReportAdgroup(namecampaign) {
      CampaignApi.getReportAdgroup(namecampaign).then(response => {
          let arrAllItem = []
          let performance = response.data.performance
          for(let i=0; i<this.dataAdgroup.length; i++){
            let performance_index = null
            let performance_current = null
            for(let j=0; j<performance.length; j++){
              if(this.dataAdgroup[i].name == performance[j].ad_group_name) {
                performance_index = j
                break
              }
            }
            if(performance_index != null) {
              performance_current = performance[performance_index]
            }else{
              performance_current = this.not_performance
            }
            arrAllItem.push(Object.assign({}, performance_current, this.dataAdgroup[i]))
          }
          this.items = arrAllItem
        }, error => {
          this.checkDataTable()
          console.log(error)
      });
    }
  },
  data() {
    return {
      items: null,
      dataAdgroup: null,
      not_performance: {
        total_clicks: 0,
        total_views: 0,
        total_costs: 0,
        total_25per_completions: 0,
        total_50per_completions: 0,
        total_75per_completions: 0,
        total_100per_completions: 0,
        total_skips: 0
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
          label: this.$t("campaign.table.ag_name"),
          sortable: true
        },
        {
          key: 'campaign_name',
          label: this.$t("campaign.table.campaign_name"),
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
          key: 'delivery_status_name',
          label: this.$t("campaign.table.delivery_status"),
          sortable: true
        },
        {
          key: 'std_daily_budget',
          label: this.$t("campaign.table.std_daily_budget"),
          sortable: true
        },
        {
          key: 'std_bidding_amount',
          label: this.$t("campaign.table.std_bidding_amount"),
          sortable: true
        },
        {
          key: 'std_bidding_method_name',
          label: this.$t("campaign.table.std_bidding_method_name"),
          sortable: true
        },
        {
          key: 'ag_period_budget',
          label: this.$t("campaign.table.campaign_period_budget"),
          sortable: true
        },
        {
          key: 'ag_period_budget_from',
          label: this.$t("campaign.table.period_budget_from"),
          sortable: true
        },
        {
          key: 'ag_period_budget_to',
          label: this.$t("campaign.table.ag_period_budget_to"),
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
        },,
        {
          key: 'total_costs',
          label: this.$t("campaign.table.costs"),
          sortable: true
        },
        {
          key: 'total_25per_completions',
          label: this.$t("campaign.table.total_25per"),
          sortable: true
        },
        {
          key: 'total_50per_completions',
          label: this.$t("campaign.table.total_50per"),
          sortable: true
        },
        {
          key: 'total_75per_completions',
          label: this.$t("campaign.table.total_75per"),
          sortable: true
        },
        {
          key: 'total_100per_completions',
          label: this.$t("campaign.table.total_100per"),
          sortable: true
        }
      ]
    }
  }
}
</script>
