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
  } as Module1State,
  mutations: {
    setTeas(state, newTeas: Tea[]) {
      Vue.set(state, 'teas', [...newTeas]);
    },
  },
  actions: {
    fetchTeas(context) {
      fetch(config.URL_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: FETCH_ALL_TEA,
        }),
      }).then(
        (r) => r.json(),
      ).then((data) => {
        context.commit('setTeas', data.data.teas);
      });
    },
  },
};

export default teas;
