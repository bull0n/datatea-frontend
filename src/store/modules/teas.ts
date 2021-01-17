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
      Vue.set(state, 'teas', newTeas);
    },
    addTea(state, tea: Tea) {
      state.teas.push(tea);
    },
    setIsLoading(state, isLoading: boolean) {
      state.isLoading = isLoading;
    },
  },
  getters: {
    getTeaById: (state) => (id) => state.teas.find((tea: Tea) => tea.id === id),
  },
  actions: {
    async fetchTeas(context) {
      try {
        context.commit('setIsLoading', true);
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
        context.commit('setIsLoading', false);
      }
    },
    async addTea(context, tea: Tea) {
      try {
        const response = await fetch(config.URL_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `mutation createTea {
                createTea(
                  name: "${tea.name}",
                  wouldBuyAgain: ${tea.wouldBuyAgain}
                  price: ${tea.price},
                  origin: "${tea.origin}",
                  vendor: "${tea.vendor}",
                  urlBought: "${tea.urlBought}",
                  vendorDescription: "${tea.vendorDescription}",
                  comment: "${tea.comment}",
                ) {
                  tea {
                    id
                    name,
                    wouldBuyAgain,
                    price,
                    origin,
                    vendor,
                    urlBought,
                    vendorDescription,
                    comment
                  }
                }
            }`,
          }),
        });
        const objectResponse = await response.json();
        const teaSaved = objectResponse.data.createTea.tea;
        context.commit('addTea', teaSaved);
        return Promise.resolve(tea);
      } finally {
        context.commit('setIsLoading', false);
      }
    },
  },
};

export default teas;
