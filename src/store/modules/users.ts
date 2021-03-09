import LoggedInUser from '@/data-model/users/logged-in-user';

const users = {
  namespaced: true,
  state: {
    loggedInUser: null,
  },
  mutations: {
    setUser(state, user: LoggedInUser): void {
      state.loggedInUser = user;
    },
  },
  getters: {
    isUserLoggedIn: (state) => state.loggedInUser !== null && state.loggedInUser !== undefined,
  },
  actions: {
    setLoggedInUser(context, user: LoggedInUser): void {
      context.commit('setUser', user);
    },
  },
};

export default users;
