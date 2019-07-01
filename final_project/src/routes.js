import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home/index';
import SignIn from './components/SignIn/index'

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Home },
	{ path: '/signin', component: SignIn },
];

export default new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior(from, to, savePosition) {
		return {x: 0, y: 0}
	}
})
