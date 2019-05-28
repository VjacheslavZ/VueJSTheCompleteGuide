import Vue from 'vue';
import App from './App.vue'

import Header from './Components/Header_footer/Header';

Vue.component('app-header', Header);

new Vue({
  el: '#app',
  render: h => h(App)
});
