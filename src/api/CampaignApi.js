import CallerPublicsher from '../utils/APICaller'
import { CallerMedia } from '../utils/APICaller'
export default {
  getCampaignMedia(account) {
    return CallerMedia('campaigns', 'POST', account)
  },
  getAdgroupMedia(id, account) {
    return CallerMedia(`campaigns/${id}/ad-groups`, 'POST', account)
  },
  getAdsMedia(id_campaign, id_adgroup, account) {
    return CallerMedia(`campaigns/${id_campaign}/ad-groups/${id_adgroup}/ads`, 'POST', account)
  },
  getReportCampaign(campaign_names) {
    return CallerPublicsher('campaigns', 'POST', campaign_names)
  },
  getReportAdgroup(namecampaign) {
    return CallerPublicsher(`campaigns/${namecampaign}/adgroups`)
  },
  getReportAds(namecampaign, nameadgroup) {
    return CallerPublicsher(`campaigns/${namecampaign}/adgroups/${nameadgroup}/ads`)
  },
  getReportChart(campaignName, select) {
    return CallerPublicsher(`campaigns/${campaignName}/${select}`)
  }
};