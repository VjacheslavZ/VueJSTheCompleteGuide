import Vue from 'vue';
import router from '../../routes';

import { FbAuth, FbApiKey } from "../../config/index";

const admin = {
	namespaced: true,
	state: {
		token: null,
		refresh: null,
		authFailed: false
	},
	getters: {
		isAuth(state) {
			return !!state.token;
		}
	},
	mutations: {
		authUser(state, authData) {
			state.token = authData.idToken;
			state.refresh = authData.refreshToken;

			if (authData.type === 'signin') {
				router.push('/dashboard');
			}
		},
		authFailed(state, type) {
			if (type === 'reset') {
				state.authFailed = false
			} else {
				state.authFailed = true
			}
		},
		logoutUser(state) {
			state.token = null;
			state.refresh = null;

			localStorage.removeItem('token');
			localStorage.removeItem('refresh');

			router.push('/')
		}
	},
	actions: {
		signIn({commit}, payload) {
			Vue.http.post(`${FbAuth}/verifyPassword?key=${FbApiKey}`, {
				...payload,
				returnSecureToken: true,
			})
				.then(response => response.json())
				.then(authData => {
					commit('authUser', {
						...authData,
						type: 'signin'
					});

					localStorage.setItem('token', authData.idToken);
					localStorage.setItem('refresh', authData.refreshToken);
				})
				.catch(error => {
					commit('authFailed')
				})
		}
	}
};

export default admin;
