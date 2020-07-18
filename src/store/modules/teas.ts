import Tea from '@/data-model/tea';
import Vue from 'vue';
import config from '@/config';

const teas = {
  namespaced: true,
  state: {
    teas: Array<Tea>(),
  },
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
          query: `query teas {
            teas {
              name
            },
          }`,
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
