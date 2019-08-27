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
              <b-form-checkbox v-if="data.value == '1'" checked='true' switch></b-form-checkbox>
              <b-form-checkbox v-else switch></b-form-checkbox>
            </template>
            <template slot="adgroup_name" slot-scope="data" >
              <router-link tag="span" :to="{ path: $route.params.idcampaign + '/' + data.item.adgroup_id }" class="link-a">
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
      CampaignApi.getReportAdGroup(this.$route.params.idcampaign, this.$session.get('listAccount')).then(response => {
          this.items = response.data.performance
        }, error => {
          console.log(error)
      });
    }
  },
  data() {
    return {
      items: null,
      fields: [
        {
          key: 'status',
          label: this.$t("campaign.table.status"),
          sortable: true
        },
        {
          key: 'adgroup_id',
          label: this.$t("campaign.table.id"),
          sortable: true
        },
        {
          key: 'adgroup_name',
          label: this.$t("campaign.table.ag_name"),
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
          key: 'delivery_status',
          label: this.$t("campaign.table.delivery_status"),
          sortable: true
        },
        {
          key: 'period_budget',
          label: this.$t("campaign.table.period_budget"),
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
