<template>
  <div>
    <b-tab title="Campaign" @click="backCampaign"></b-tab>
    <b-tab title="AdGroups" @click="backAdGroups"></b-tab>
    <b-tab title="Ads" active>
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
            <template slot="link_preview" slot-scope="data" >
              <span v-if="data.item.type_preview == 'image'">
                <clazy-load :src="data.value" :id="'popover' + data.item.ad_id">
                  <button class="b-none">
                    <img class="w-image" :src="data.value">
                  </button>
                  <div class="preloader" slot="placeholder">
                    <img class="w-image" src="http://www.wellcommshop.com/image/data/loading.gif">
                  </div>
                </clazy-load>
                <b-popover :target="'popover'+ data.item.ad_id" :title="'ID Ad: ' + data.item.ad_id" triggers="focus">
                  <img class="w-image-zoom" :src="data.value"/>
                </b-popover>
              </span>
              <span v-else>
                <div class="video">
                  <div :id="'popover' + data.item.ad_id">
                    <button class="b-none">
                      <video class="w-image" :id="'video' + data.item.ad_id">
                        <source :src="data.value" type="video/mp4">
                      </video>
                    </button>
                  </div>
                  <div class="icon-play" id="icon-play">
                    <i :title="'Play Video'" class="far fa-play-circle play-video" @click="playVideo('video' + data.item.ad_id)"></i>
                  </div>
                </div>
                <b-popover :target="'popover'+ data.item.ad_id" :title="'ID Ad: ' + data.item.ad_id" triggers="focus">
                  <video class="w-image-zoom" controls :id="'popover' + data.item.ad_id">
                    <source :src="data.value" type="video/mp4">
                  </video>
                </b-popover>
              </span>
            </template>
          </b-table>
        </div>
      </b-card-text>
    </b-tab>
  </div>
</template>
<script>
import { VueClazyLoad } from 'vue-clazy-load'
export default {
  created() {
    this.fetchItemList()
  },
  methods: {
    fetchItemList() {
      this.$http.post('http://ad-tech-dac.herokuapp.com/api/social_accounts/campaigns/'+ this.$route.params.idcampaign +'/adgroups/'+ this.$route.params.idadgroup + '/ads', this.$session.get('listAccount')).then(response => {
          this.items = response.body
        }, error => {
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
    backCampaign() {
      this.$router.push('/campaign-manager')
    },
    backAdGroups() {
      this.$router.push('/campaign-manager/' + this.$route.params.idcampaign)
    }
  },
  components: {
    VueClazyLoad
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
          key: 'ad_id',
          label: 'Ad ID',
          sortable: true
        },
        {
          key: 'ad_name',
          sortable: true
        },
        {
          key: 'link_preview',
          label: 'Creative Preview'
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
          key: 'period_from',
          sortable: true
        },
        {
          key: 'period_to',
          sortable: true
        },
        {
          key: 'total_clicks',
          sortable: true
        },
        {
          key: 'total_costs',
          sortable: true
        },
        {
          key: 'total_views',
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
