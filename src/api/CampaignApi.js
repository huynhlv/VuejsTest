import CallerPublicsher from '../utils/APICaller'
import { CallerMedia } from '../utils/APICaller'
export default {
  getCampaignMedia(account) {
    return CallerMedia('campaigns', 'POST', account)
  },
  getAdgroupMedia(id, account) {
    return CallerMedia(`campaigns/${id}/ad-groups`, 'POST', account)
  },
  getReportCampaign(campaign_names) {
    return CallerPublicsher('campaigns', 'POST', campaign_names)
  },
  getReportAdgroup(namecampaign) {
    return CallerPublicsher(`campaigns/${namecampaign}/adgroups`)
  },
  getReportAds(id_campaign, id_adgroup, account) {
    return CallerPublicsher(`campaigns/${id_campaign}/adgroups/${id_adgroup}/ads`, 'POST', account)
  },
  getReportChart(campaignName, select) {
    return CallerPublicsher(`campaigns/${campaignName}/${select}`)
  }
};