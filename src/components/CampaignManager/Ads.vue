<template>
  <div>
    <b-tab title="Campaign" @click="backCampaign"></b-tab>
    <b-tab title="AdGroups" @click="backAdGroups"></b-tab>
    <b-tab title="Ads" active>
      <b-card-text>
        <div class="fs-13">
          <b-table class="my-table" small bordered responsive :items="items" :fields="fields">
            <template slot="status" slot-scope="data" >
              <b-form-checkbox v-if="data.value == '1'" checked='true' switch></b-form-checkbox>
              <b-form-checkbox v-else switch></b-form-checkbox>
            </template>
            <template slot="image" slot-scope="data" >
              <span v-if="data.item.type_preview == '0'">
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
                  <video class="w-image-zoom" controls autoplay :id="'popover' + data.item.id">
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
  methods: {
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
      items: [
        {
            "id": 18,
            "ag_id": 19,
            "status": 0,
            "type_preview": 1,
            "ad_name": "Sherman Zulauf DVM",
            "image": "https://www.w3schools.com/html/mov_bbb.mp4",
            "delivery_status": "Prof. Gisselle Anderson DVM",
            "spent": 972793,
            "click": 526,
            "impression": "Thaddeus Haag",
            "ctr": 707,
            "cpc": 15
        },
        {
            "id": 49,
            "ag_id": 19,
            "status": 0,
            "type_preview": 0,
            "ad_name": "Mr. Doug Muller Sr.",
            "image": "https://vevietnamairline.com/Img.ashx?636547984689865774.jpg",
            "delivery_status": "Elenora Wilkinson",
            "spent": 348803,
            "click": 287,
            "impression": "Dr. Carson Bauch",
            "ctr": 183,
            "cpc": 452
        },
        {
            "id": 97,
            "ag_id": 19,
            "status": 0,
            "type_preview": 0,
            "ad_name": "Dr. Demetrius Moore",
            "image": "https://vietjet.net/includes/uploads/2016/01/thang-tu-ve-thien-nhien-quyen-ru-dieu-ky2.jpg",
            "delivery_status": "Malika Blick",
            "spent": 886854,
            "click": 175,
            "impression": "Savannah Konopelski",
            "ctr": 980,
            "cpc": 546
        }
    ],
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
