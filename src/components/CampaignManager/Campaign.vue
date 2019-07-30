<template>
  <div>
    <b-table bordered responsive :items="items" :fields="fields">
      <template slot="campaign_name" slot-scope="data">
        <template slot="adgroups" slot-scope="data1">
          <button @click="adGroups(data1.value)">{{ data.value }}</button>
        </template>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  methods: {
    adGroups(items) {
      console.log(items);
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
          key: 'campaign_name',
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
        }
      ],
      items: [
        {
          "id": 4,
          "campaign_name": "huynh",
          "status": 0,
          "spent": 54376404755,
          "click": 1504,
          "impression": "Riley Jakubowski",
          "ctr": 1,
          "cpc": 111,
          "delivery_status": "Esteban Wisoky",
          "kpi": 635,
          "objective": "Dr. Santa DuBuque Sr.",
          "start_schedule": "2018-11-30 20:16:56",
          "end_schedule": "2019-06-28 15:58:04",
          "budget_type": 4,
          "adgroups": [
              {
                  "id": 4,
                  "campaign_id": 4,
                  "status": 0,
                  "ag_name": "Nicolas Kunze",
                  "delivery_status": "Dr. Carey Cummerata DDS",
                  "spent": 76591,
                  "click": 668,
                  "impression": "Favian Hessel",
                  "ctr": 472,
                  "cpc": 355,
                  "daily_budget": 439632,
                  "bid": "7268",
                  "bid_amount": 116
              },
              {
                  "id": 23,
                  "campaign_id": 4,
                  "status": 0,
                  "ag_name": "Mr. Harvey Konopelski DVM",
                  "delivery_status": "Sunny Schmitt",
                  "spent": 72347,
                  "click": 196,
                  "impression": "Reymundo Heathcote",
                  "ctr": 63,
                  "cpc": 302,
                  "daily_budget": 448737,
                  "bid": "5486",
                  "bid_amount": 113
              }
          ]
        },
        {
          'status': 'table cell',
          'id': 'table',
          'campaign_name': 'table cell',
          'spent': 'table cell',
          'click': 'table cell',
          'impression': 'table cell',
          'ctr': 'table cell',
          'cpc': 'table cell',
          'delivery_status': 'table cell',
          'kpi': 'table cell',
          'objective': 'table cell',
          'start_schedule': 'table cell',
          'end_schedule': 'table cell',
          'budget_type': 'table cell'
        },
        {
          'status': 'table cell',
          'id': 'table',
          'campaign_name': 'table cell',
          'spent': 'table cell',
          'click': 'table cell',
          'impression': 'table cell',
          'ctr': 'table cell',
          'cpc': 'table cell',
          'delivery_status': 'table cell',
          'kpi': 'table cell',
          'objective': 'table cell',
          'start_schedule': 'table cell',
          'end_schedule': 'table cell',
          'budget_type': 'table cell'
        }
      ]
    }
  }
}
</script>
