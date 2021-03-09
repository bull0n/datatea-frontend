import Cookies from 'js-cookie';
import UserLogin from '@/data-model/users/user-login-form-data';
import client from '@/graphql/graphql_client';
import LoggedInUser from '@/data-model/users/logged-in-user';
import { LOGIN } from '@/graphql/queries/users';
import Vue from 'vue';

const users = {
  namespaced: true,
  state: {
    loggedInUser: null,
  },
  mutations: {
    setUser(state, r): void {
      const user = new LoggedInUser();
      user.username = r.payload.username;
      user.token = r.token;

      client.setHeader('authorization', `JWT ${user.token}`);
      Vue.set(state, 'loggedInUser', user);
    },
    setTokenInCookies(state): void {
      Cookies.set('auth_token', state.loggedInUser.token);
    },
  },
  getters: {
    isUserLoggedIn: (state) => state.loggedInUser !== null && state.loggedInUser !== undefined,
  },
  actions: {
    async login(context, user: UserLogin): Promise<void> {
      const response = await client.request(LOGIN, user);
      console.log(response);
      await context.commit('setUser', response.tokenAuth);
      return response;
    },
  },
};

export default users;
