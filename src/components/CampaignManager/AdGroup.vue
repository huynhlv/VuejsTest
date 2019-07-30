<template>
  <div class="fs-13">
    <b-table class="my-table" small bordered responsive :items="this.$store.state.dashBoard.data.adgroups" :fields="fields">
      <template slot="status" slot-scope="data" >
        <b-form-checkbox v-if="data.value == '1'" checked='true' switch disabled></b-form-checkbox>
        <b-form-checkbox v-else switch disabled></b-form-checkbox>
      </template>
      <template slot="ag_name" slot-scope="data" >
        <span class="link-a" @click="agName(data.item.adses)">{{ data.value }}</span>
      </template>
    </b-table>
  </div>
</template>
<script>
export default {
  methods: {
    agName(items) {
      this.$store.state.dashBoard.status.ads = true;
      this.$store.state.dashBoard.data.ads = items;
    }
  },
  data() {
    return {
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
