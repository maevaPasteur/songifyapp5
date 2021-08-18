import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from "@/router";
import axios from 'axios';

const APIMusic = axios.create({
  baseURL: '/test/'
});

APIMusic.interceptors.request.use(config => {
  console.log('config');
  console.log(config);
});

APIMusic.get('hell');


Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
