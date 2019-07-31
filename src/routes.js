import Login from './components/Authen/Login.vue'
import CampaignManagement from './components/CampaignManagement.vue'
import CampaignManager from './components/CampaignManager'
import Campaign from './components/CampaignManager/Campaign'
import AdGroup from './components/CampaignManager/AdGroup'
import Ads from './components/CampaignManager/Ads'
export const routes = [
  { path: '/', name: 'login', component: Login },
  { path: '/campaign-management', name: 'management', component: CampaignManagement },
  { path: '/campaign-manager', name: 'campaign-manager', component: CampaignManager, children: [
    { path: '', name: 'campaign', component: Campaign },
    { path: ':idcampaign', name: 'adgroups', component: AdGroup },
    { path: ':idcampaign/:idadgroup', name: 'ads', component: Ads }
  ] }
]
