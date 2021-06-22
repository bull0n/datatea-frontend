import Tea from '@/data-model/tea/tea';
import Vue from 'vue';
import client from '@/graphql/graphql_client';
import { $enum } from 'ts-enum-util';
import {
  ADD_TEA, FETCH_ALL_TEAS, FETCH_ONE_TEA, UPDATE_TEA_STATUS,
} from '@/graphql/queries/teas';
import Status from '@/data-model/tea/status';

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
    async fetchTea(context, teaId: any): Promise<Tea> {
      console.log('teaId', teaId);
      const response = await client.request(FETCH_ONE_TEA, { id: parseInt(teaId, 10) });
      console.log('tea: ', response.tea);
      return response.tea;
    },
    async addTea(context, tea: Tea): Promise<Tea> {
      await client.request(ADD_TEA, tea);
      context.dispatch('fetchTeasByStatus', $enum(Status).getKeyOrThrow(Status.AVAILABLE));
      return Promise.resolve(tea);
    },
    async updateTeaStatus(context, { tea, newStatus }): Promise<void> {
      await client.request(UPDATE_TEA_STATUS, { id: parseInt(tea.id, 10), status: newStatus });
      await context.dispatch('fetchTeasByStatus', $enum(Status).getKeyOrThrow(Status.AVAILABLE));
      await context.dispatch('fetchAllTeas');
    },
  },
};

export default teas;
