import Cookies from 'js-cookie';
import UserLogin from '@/data-model/users/user-login-form-data';
import client from '@/graphql/graphql_client';
import LoggedInUser from '@/data-model/users/logged-in-user';
import { LOGIN, REFRESH_TOKEN } from '@/graphql/queries/users';
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
      Cookies.set('auth_token', state.loggedInUser.token, { secure: true, sameSite: 'strict' });
    },
    removeUser(state): void {
      Vue.set(state, 'loggedInUser', null);
    },
  },
  getters: {
    isUserLoggedIn: (state): boolean => state.loggedInUser !== null
      && state.loggedInUser !== undefined,
  },
  actions: {
    async login(context, user: UserLogin): Promise<void> {
      const response = await client.request(LOGIN, user);
      context.commit('setUser', response.tokenAuth);
      return response;
    },
    async retrieveUserFromToken(context, token: string): Promise<void> {
      const response = await client.request(REFRESH_TOKEN, { token });
      context.commit('setUser', response.refreshToken);
      return response;
    },
    async logout(context): Promise<void> {
      Cookies.remove('auth_token');
      context.commit('removeUser');
      client.setHeader('authorization', '');
    },
  },
};

export default users;
