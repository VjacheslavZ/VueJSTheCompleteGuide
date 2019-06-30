import Vue from 'vue';
import App from './App.vue';
import router from './routes';

import { MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import Button from './components/UI/button';
Vue.component('app-button', Button);

/* MATERIAL */
Vue.use(MdCard);

new Vue({
	router,
  render: h => h(App),
}).$mount('#app');
