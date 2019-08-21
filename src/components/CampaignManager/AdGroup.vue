<template>
  <div>
    <b-tab title="Campaign" @click="backCampaign"></b-tab>
    <b-tab title="AdGroups" active>
      <b-card-text>
        <div class="fs-13">
          <div v-if="!this.items" class="progress-cir">
            <v-progress-circular
              :size="50"
              indeterminate
            ></v-progress-circular>
          </div>
          <b-table v-else class="my-table text-nowrap" small bordered responsive :items="items" :fields="fields">
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
export default {
  created() {
    this.fetchItemList()
  },
  methods: {
    backCampaign() {
      this.$router.push('/campaign-manager')
    },
    fetchItemList() {
      this.$http.post('http://ad-tech-dac.herokuapp.com/api/social_accounts/campaigns/'+ this.$route.params.idcampaign +'/adgroups', this.$session.get('listAccount')).then(response => {
          this.items = response.body
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
          sortable: true
        },
        {
          key: 'adgroup_id',
          label: 'ID',
          sortable: true
        },
        {
          key: 'adgroup_name',
          label: 'Ag Name',
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
          key: 'delivery_status',
          sortable: true
        },
        {
          key: 'period_budget',
          sortable: true
        },
        {
          key: 'total_clicks',
          sortable: true
        },
        {
          key: 'total_views',
          sortable: true
        },,
        {
          key: 'total_costs',
          sortable: true
        },
        {
          key: 'total_25per_completions',
          sortable: true
        },
        {
          key: 'total_50per_completions',
          sortable: true
        },
        {
          key: 'total_75per_completions',
          sortable: true
        },
        {
          key: 'total_100per_completions',
          sortable: true
        }
      ]
    }
  }
}
</script>
