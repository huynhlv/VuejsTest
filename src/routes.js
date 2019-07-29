import Login from './components/Authen/Login.vue'
import CampaignManagement from './components/CampaignManagement.vue'
export const routes = [
  { path: '/', name: 'login', component: Login },
  { path: '/campaign-management', name: 'management', component: CampaignManagement }
]
