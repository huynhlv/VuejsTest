import CallerPublicsher from '../utils/APICaller'
import { CallerMedia } from '../utils/APICaller'
export default {
  getCampaignMedia(account) {
    return CallerMedia('campaigns', 'POST', account)
  },
  getReportCampaign(campaign_names) {
    return CallerPublicsher('campaigns', 'POST', campaign_names)
  },
  getReportAdGroup(id, account) {
    return CallerPublicsher(`campaigns/${id}/adgroups`, 'POST', account)
  },
  getReportAds(id_campaign, id_adgroup, account) {
    return CallerPublicsher(`campaigns/${id_campaign}/adgroups/${id_adgroup}/ads`, 'POST', account)
  },
  getReportChart(campaignName, select) {
    return CallerPublicsher(`campaigns/${campaignName}/${select}`, 'POST')
  }
};