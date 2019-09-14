<template>
  <div>
    <b-tab :title="$t('campaign.campaign')" @click="backCampaign"></b-tab>
    <b-tab :title="$t('campaign.ad_groups')" @click="backAdGroups"></b-tab>
    <b-tab :title="$t('campaign.ads')" active>
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
            <template slot="creative_preview" slot-scope="data" >
              <span v-if="data.item.create_type_name">
                <clazy-load :src="data.value" :id="'popover' + data.item.id">
                  <button class="b-none">
                    <img class="w-image" :src="data.value">
                  </button>
                  <div class="preloader" slot="placeholder">
                    <img class="w-image" src="http://www.wellcommshop.com/image/data/loading.gif">
                  </div>
                </clazy-load>
                <b-popover :target="'popover'+ data.item.id" :title="'ID Ad: ' + data.item.id" triggers="focus">
                  <img class="w-image-zoom" :src="data.value"/>
                </b-popover>
              </span>
              <span v-else>
                <div class="video">
                  <div :id="'popover' + data.item.id">
                    <button class="b-none">
                      <video class="w-image" :id="'video' + data.item.id">
                        <source :src="data.value" type="video/mp4">
                      </video>
                    </button>
                  </div>
                  <div class="icon-play" id="icon-play">
                    <i :title="'Play Video'" class="far fa-play-circle play-video" @click="playVideo('video' + data.item.id)"></i>
                  </div>
                </div>
                <b-popover :target="'popover'+ data.item.id" :title="'ID Ad: ' + data.item.id" triggers="focus">
                  <video class="w-image-zoom" controls :id="'popover' + data.item.id">
                    <source :src="data.value" type="video/mp4">
                  </video>
                </b-popover>
              </span>
            </template>
          </b-table>
          <div id="no-data">{{ $t('data.no_data') }}</div>
        </div>
      </b-card-text>
    </b-tab>
  </div>
</template>
<script>
import { VueClazyLoad } from 'vue-clazy-load'
import CampaignApi from '../../api/CampaignApi'
export default {
  created() {
    this.fetchItemList()
  },
  methods: {
    fetchItemList() {
      CampaignApi.getAdsMedia(this.$route.params.idcampaign, this.$route.params.idadgroup, this.$session.get('listAccount')).then(response => {
          var data = response.data
          var arrData = []
          for(let i=0; i<data.length; i++) {
            for(let j=0; j<data[i].length; j++) {
              arrData.push(data[i][j])
            }
          }
          this.dataAds = arrData
          this.fetchReportAds(this.$route.params.namecampaign, this.$route.params.nameadgroup)
        }, error => {
          console.log(error)
      });
    },
    fetchReportAds(namecampaign, nameadgroup) {
      CampaignApi.getReportAds(namecampaign, nameadgroup).then(response => {
          let arrAllItem = []
          let performance = response.data.performance
          for(let i=0; i<this.dataAds.length; i++){
            let performance_index = null
            let performance_current = null
            for(let j=0; j<performance.length; j++){
              if(this.dataAds[i].name == performance[j].ads_name) {
                performance_index = j
                break
              }
            }
            if(performance_index != null) {
              performance_current = performance[performance_index]
            }else{
              performance_current = this.not_performance
            }
            arrAllItem.push(Object.assign({}, performance_current, this.dataAds[i]))
          }
          this.items = arrAllItem
          if(arrAllItem.length == 0) {
            document.getElementById('no-data').style.display = "block"
          }
        }, error => {
          this.checkDataTable()
          console.log(error)
      });
    },
    playVideo(id) {
      var myVideo = document.getElementById(id);
      var icon = document.getElementById('icon-play');
      if (myVideo.paused){
        myVideo.play();
        icon.style.display = 'none';
      }
      else {
        myVideo.pause();
      }
    },
    checkDataTable() {
      this.items = []
      document.getElementById('no-data').style.display = "block"
    },
    backCampaign() {
      this.$router.push('/campaign-manager')
    },
    backAdGroups() {
      this.$router.push(`/campaign-manager/${this.$route.params.idcampaign}/${this.$route.params.namecampaign}`)
    }
  },
  components: {
    VueClazyLoad
  },
  data() {
    return {
      items: null,
      dataAds: null,
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
          label: this.$t("campaign.table.ad_id"),
          sortable: true
        },
        {
          key: 'name',
          label: this.$t("campaign.table.ad_name"),
          sortable: true
        },
        {
          key: 'campaign_name',
          label: this.$t("campaign.table.campaign_name"),
          sortable: true
        },
        {
          key: 'ad_group_name',
          label: this.$t("campaign.table.ad_group_name"),
          sortable: true
        },
        {
          key: 'creative_preview',
          label: this.$t("campaign.table.creative_preview")
        },
        {
          key: 'delivery_status',
          label: this.$t("campaign.table.delivery_status"),
          sortable: true
        },
        {
          key: 'ads_period_budget',
          label: this.$t("campaign.table.period_budget"),
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
          key: 'click_through_rate',
          label: this.$t("campaign.table.click_through_rate"),
          sortable: true
        },
        {
          key: 'cost_bidding',
          label: this.$t("campaign.table.cost_bidding"),
          sortable: true
        },
        {
          key: 'std_daily_budget',
          label: this.$t("campaign.table.std_daily_budget"),
          sortable: true
        },
        {
          key: 'spent',
          label: this.$t("campaign.table.spent"),
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
          key: 'total_clicks',
          label: this.$t("campaign.table.clicks"),
          sortable: true
        },
        {
          key: 'total_costs',
          label: this.$t("campaign.table.costs"),
          sortable: true
        },
        {
          key: 'total_views',
          label: this.$t("campaign.table.views"),
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
