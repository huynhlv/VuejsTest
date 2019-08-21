import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import VueLoading from 'vuejs-loading-plugin'
import App from './App'
import { routes } from './routes.js'
import { store } from './store/store.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueClazyLoad from 'vue-clazy-load'
Vue.use(VueClazyLoad)
import VueSession from 'vue-session'
Vue.use(VueSession)
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueResource);
// Vue.http.options.root = 'https://sherpa-api-huynhlv.herokuapp.com/api/'
Vue.use(VueRouter)
Vue.use(VueLoading)
import Highcharts from 'highcharts';
import HighchartsNoData from 'highcharts-no-data-to-display';

HighchartsNoData(Highcharts);

/* eslint-disable no-new */
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
