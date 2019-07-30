<template>
  <div class="fs-13">
    <b-table class="my-table" small bordered responsive :items="this.$store.state.dashBoard.data.ads" :fields="fields">
      <template slot="status" slot-scope="data" >
        <b-form-checkbox v-if="data.value == '1'" checked='true' switch disabled></b-form-checkbox>
        <b-form-checkbox v-else switch disabled></b-form-checkbox>
      </template>
      <template slot="image" slot-scope="data" >
        <VueLoadImage>
          <img slot="image" class="w-image" :src="data.value"/>
          <img slot="preloader" src="http://www.wellcommshop.com/image/data/loading.gif" />
        </VueLoadImage>
      </template>
    </b-table>
  </div>
</template>
<script>
import VueLoadImage from 'vue-load-image'
export default {
  components: {
    VueLoadImage
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
          label: 'Ad ID',
          sortable: true
        },
        {
          key: 'ad_name',
          sortable: true
        },
        {
          key: 'image',
          label: 'Creative Preview'
        },
        {
          key: 'delivery_status',
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
        }
      ]
    }
  }
}
</script>
