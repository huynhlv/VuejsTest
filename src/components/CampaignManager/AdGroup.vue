<template>
  <div>
    <b-tab title="Campaign" @click="backCampaign"></b-tab>
    <b-tab title="AdGroups" active>
      <b-card-text>
        <div class="fs-13">
          <b-table class="my-table" small bordered responsive :items="items" :fields="fields">
            <template slot="status" slot-scope="data" >
              <b-form-checkbox v-if="data.value == '1'" checked='true' switch></b-form-checkbox>
              <b-form-checkbox v-else switch></b-form-checkbox>
            </template>
            <template slot="ag_name" slot-scope="data" >
              <router-link tag="span" :to="{ path: $route.params.idcampaign + '/' + data.item.id }" class="link-a">
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
  methods: {
    backCampaign() {
      this.$router.push('/campaign-manager')
    }
  },
  data() {
    return {
      items: [
        {
          "id": 19,
          "campaign_id": 1,
          "status": 0,
          "ag_name": "Miss Jacinthe Hill MD",
          "delivery_status": "Zula Raynor I",
          "spent": 37989,
          "click": 446,
          "impression": "Joyce Lueilwitz",
          "ctr": 183,
          "cpc": 72,
          "daily_budget": 957557,
          "bid": "9098",
          "bid_amount": 797
        },
        {
          "id": 5,
          "campaign_id": 3,
          "status": 1,
          "ag_name": "Bonita Champlin",
          "delivery_status": "Anabelle Ondricka PhD",
          "spent": 63156,
          "click": 756,
          "impression": "Josue Kemmer",
          "ctr": 352,
          "cpc": 166,
          "daily_budget": 325910,
          "bid": "5774",
          "bid_amount": 762
        }
      ],
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
          key: 'ag_name',
          sortable: true
        },
        {
          key: 'dilivery_status',
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
        },,
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
          key: 'daily_budget',
          sortable: true
        },
        {
          key: 'bid',
          sortable: true
        },
        {
          key: 'bid_amount',
          sortable: true
        }
      ]
    }
  }
}
</script>
