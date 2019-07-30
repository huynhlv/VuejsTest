import Login from './components/Authen/Login.vue'
import CampaignManagement from './components/CampaignManagement.vue'
import Dashboard from './components/Dashboard'
export const routes = [
  { path: '/', name: 'login', component: Login },
  { path: '/campaign-management', name: 'management', component: CampaignManagement },
  { path: '/dashboard', name: 'dashboard', component: Dashboard }
]
