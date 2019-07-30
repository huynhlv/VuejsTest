<template>
  <div>
    <h3 class="text-center">Advertisers dashboard</h3>
    <div class="m-5">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Campaign" active>
            <b-card-text>
              <Campaign />
            </b-card-text>
          </b-tab>
          <b-tab title="Ad Group">
            <b-card-text>AdGroup</b-card-text>
          </b-tab>
          <b-tab title="Ads">
            <b-card-text>Ads</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>
<script>
import Campaign from './CampaignManager/Campaign'
export default {
  components: {
    Campaign
  }
}
</script>
