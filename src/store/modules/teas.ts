import Tea from '@/data-model/tea/tea';
import Vue from 'vue';
import client from '@/graphql/graphql_client';
import { ADD_TEA, FETCH_ALL_TEAS } from '@/graphql/queries/teas';

export interface ModuleTeaState {
  teasByStatus: {
    available: Tea[],
    finished: Tea[],
    ordered: Tea[]
  };
  allTeas: Tea[];
}

const teas = {
  namespaced: true,
  state: {
    teasByStatus: {
      available: [],
      finished: [],
      ordered: [],
    },
    allTeas: [],
  } as ModuleTeaState,
  mutations: {
    setTeasByStatus(state, { status, teasByStatus }): void {
      Vue.set(state.teasByStatus, status.toString().toLowerCase(), teasByStatus);
    },
    setAllTeas(state, allTeas: Tea[]): void {
      Vue.set(state, 'allTeas', allTeas);
    },
    addTea(state, tea: Tea): void {
      state.availableTeas.push(tea);
    },
    setIsLoading(state, isLoading: boolean): void {
      state.isLoading = isLoading;
    },
  },
  getters: {
    getTeaById: (state) => (id: string):
      Tea => state.teasByStatus.available.find((tea: Tea) => tea.id === id),
  },
  actions: {
    async fetchTeasByStatus(context, status: string): Promise<void> {
      const response = await client.request(FETCH_ALL_TEAS, { status });
      context.commit('setTeasByStatus', { teasByStatus: response.teas, status });
    },
    async fetchAllTeas(context): Promise<void> {
      const response = await client.request(FETCH_ALL_TEAS);
      context.commit('setAllTeas', response.teas);
    },
    async addTea(context, tea: Tea): Promise<Tea> {
      await client.request(ADD_TEA, tea);
      context.dispatch('fetchTeas');
      return Promise.resolve(tea);
    },
  },
};

export default teas;
