import CallerPublicsher from '../utils/APICaller'
export default {
  getReportCampaign(account) {
    return CallerPublicsher('campaigns', 'POST', account)
  },
  getReportAdGroup(id, account) {
    return CallerPublicsher('campaigns/' + id + '/adgroups', 'POST', account)
  },
  getReportAds(id_campaign, id_adgroup, account) {
    return CallerPublicsher('campaigns/' + id_campaign +'/adgroups/'+ id_adgroup + '/ads', 'POST', account)
  },
  getReportChart(id, select, account) {
    return CallerPublicsher('campaigns/' + id+'/'+select, 'POST', account)
  }
};