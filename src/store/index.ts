import Vue from 'vue';
import Vuex from 'vuex';
import teas from './modules/teas';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    teas,
    users,
  },
});
