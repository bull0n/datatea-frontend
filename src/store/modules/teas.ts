import Tea from '@/data-model/tea/tea';
import Vue from 'vue';
import client from '@/graphql/graphql_client';
import { ADD_TEA, FETCH_ALL_TEAS } from '@/graphql/queries/teas';

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
    setTeas(state, newTeas: Tea[]): void {
      Vue.set(state, 'teas', newTeas);
    },
    addTea(state, tea: Tea): void {
      state.teas.push(tea);
    },
    setIsLoading(state, isLoading: boolean): void {
      state.isLoading = isLoading;
    },
  },
  getters: {
    getTeaById: (state) => (id: string): Tea => state.teas.find((tea: Tea) => tea.id === id),
  },
  actions: {
    async fetchTeas(context): Promise<void> {
      try {
        context.commit('setIsLoading', true);
        const response = await client.request(FETCH_ALL_TEAS);
        context.commit('setTeas', response.teas);
      } finally {
        context.commit('setIsLoading', false);
      }
    },
    async addTea(context, tea: Tea): Promise<Tea> {
      try {
        const response = await client.request(ADD_TEA, tea);
        const teaSaved = response.createTea.tea;
        context.commit('addTea', teaSaved);
        return Promise.resolve(tea);
      } finally {
        context.commit('setIsLoading', false);
      }
    },
  },
};

export default teas;
