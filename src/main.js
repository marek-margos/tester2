import 'babel-polyfill'
import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import App from './App.vue'

//const axios = require('axios')

import Nawigacja from './components/Nawigacja.vue';
Vue.component('nawigacja', Nawigacja);

//import axios from 'axios'
//Vue.use(axios)
//const axios = require('axios');
window.axios = require('axios');

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
