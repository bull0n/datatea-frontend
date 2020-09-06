import Tea from '@/data-model/tea';
import Vue from 'vue';
import config from '@/config';
import { FETCH_ALL_TEA } from './graphql_queries';

export interface Module1State {
  teas: Tea[];
}

const teas = {
  namespaced: true,
  state: {
    teas: [],
    isLoading: false,
  } as Module1State,
  mutations: {
    setTeas(state, newTeas: Tea[]) {
      Vue.set(state, 'teas', [...newTeas]);
    },
    setIsLoding(state, isLoading: boolean) {
      state.isLoading = isLoading;
    },
  },
  getters: {
    getTeaById: (state) => (id) => state.teas.find((tea: Tea) => tea.id === id),
  },
  actions: {
    async fetchTeas(context) {
      try {
        context.commit('setIsLoding', true);
        const response = await fetch(config.URL_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: FETCH_ALL_TEA,
          }),
        });
        const objectResponse = await response.json();
        context.commit('setTeas', objectResponse.data.teas);
      } finally {
        context.commit('setIsLoding', false);
      }
    },
  },
};

export default teas;
