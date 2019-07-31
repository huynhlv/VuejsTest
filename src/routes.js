import Login from './components/Authen/Login.vue'
import CampaignManagement from './components/CampaignManagement.vue'
import CampaignManager from './components/CampaignManager'
export const routes = [
  { path: '/', name: 'login', component: Login },
  { path: '/campaign-management', name: 'management', component: CampaignManagement },
  { path: '/campaign-manager', name: 'campaign-manager', component: CampaignManager }
]
