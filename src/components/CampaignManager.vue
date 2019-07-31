<template>
  <div>
    <div class="m-2 d-flex">
      <img class="w-6 m-auto" src="https://dactech.vn/wp-content/uploads/2019/03/logo-300x200.png">
      <b-nav class="fs-12 my-auto">
        <b-nav-item-dropdown
          text="Admin"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item class="fs-12">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </div>
    <h2 class="text-center">Campaign Manager</h2>
    <div class="mx-5">
      <b-card no-body>
        <b-tabs card small>
          <b-tab title="Campaign" active @click="backCampaign">
            <b-card-text><Campaign /></b-card-text>
          </b-tab>
          <b-tab v-if="dashBoardStatus.adgroups" active title="Ad Group" @click="backAdGroups">
            <b-card-text><AdGroup /></b-card-text>
          </b-tab>
          <b-tab v-if="dashBoardStatus.ads" active title="Ads">
            <b-card-text><Ads /></b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>
<script>
import Campaign from './CampaignManager/Campaign'
import AdGroup from './CampaignManager/AdGroup'
import Ads from './CampaignManager/Ads'
export default {
  methods: {
    backCampaign() {
      this.$store.state.dashBoard.status.adgroups = false
      this.$store.state.dashBoard.status.ads = false
    },
    backAdGroups() {
      this.$store.state.dashBoard.status.ads = false
    }
  },
  computed: {
    dashBoardStatus() {
      return this.$store.state.dashBoard.status
    }
  },
  components: {
    Campaign,
    AdGroup,
    Ads
  }
}
</script>
