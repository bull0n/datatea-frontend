import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import NavListTeas from '@/components/navigation/NavListTeas.vue';

const localVue = createLocalVue();
const fetchTeas = jest.fn();
const retrieveUserFromToken = jest.fn();
const isUserLoggedIn = jest.fn();

localVue.use(Vuex);
localVue.use(VueRouter);

const store = {
  modules: {
    users: {
      actions: {
        retrieveUserFromToken,
      },
      getters: {
        isUserLoggedIn,
      },
      namespaced: true,
    },
    teas: {
      namespaced: true,
      actions: {
        fetchTeas,
      },
    },
  },
};

describe('App.vue', () => {
  it('checkListTeas is present when loggedIn', () => {
    isUserLoggedIn.mockReturnValue(true);
    const wrapper = shallowMount(App, {
      localVue,
      store: new Vuex.Store(store),
    });

    expect(wrapper.findComponent(NavListTeas).exists()).toBe(true);
  });

  it('checkListTeas is not present when not loggedIn', () => {
    isUserLoggedIn.mockReturnValue(false);

    const wrapper = shallowMount(App, {
      localVue,
      store: new Vuex.Store(store),
    });
    
    expect(wrapper.findComponent(NavListTeas).exists()).toBe(false);
  });
});