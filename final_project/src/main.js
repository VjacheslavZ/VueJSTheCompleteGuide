import Vue from 'vue';
import App from './App.vue';
import VueResourse from 'vue-resource';
import router from './routes';
import store from './Store/store';

import { MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import Button from './components/UI/button';
Vue.component('app-button', Button);

/* MATERIAL */
Vue.use(MdCard);
/* RESOURCE */
Vue.use(VueResourse);
Vue.http.options.root = '';

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app');
