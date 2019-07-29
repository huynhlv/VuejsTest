import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import VueLoading from 'vuejs-loading-plugin'
import App from './App'
import { routes } from './routes.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueResource);
Vue.http.options.root = 'https://sherpa-api-huynhlv.herokuapp.com/api/'
Vue.use(VueRouter)
Vue.use(VueLoading)
/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
