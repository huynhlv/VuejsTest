import Login from '../components/Authen/Login.vue'
import CampaignManager from '../components/DashBoard/CampaignManager'
import Campaign from '../components/CampaignManager/Campaign'
import AdGroup from '../components/CampaignManager/AdGroup'
import Ads from '../components/CampaignManager/Ads'
import Advertiser from '../components/DashBoard/Advertiser'
import DashBoard from '../components/DashBoard/DashBoard'
export const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/', name: 'dashboard', component: DashBoard, children: [
    { path: '/campaign-manager', name: 'campaign-manager', component: CampaignManager, children: [
      { path: '', name: 'campaign', component: Campaign },
      { path: ':idcampaign/:namecampaign', name: 'adgroups', component: AdGroup },
      { path: ':idcampaign/:namecampaign/:idadgroup/:namegroup', name: 'ads', component: Ads }
    ] },
    { path: '/advertiser', name: 'advertiser', component: Advertiser },
  ] },
]
