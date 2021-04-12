import NavMain from '@/components/navigation/NavMain.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
const logout = jest.fn();
const isUserLoggedIn = jest.fn();

localVue.use(Vuex);
localVue.use(VueRouter);

const store = new Vuex.Store({
  modules: {
    users: {
      actions: {
        logout,
      },
      getters: {
        isUserLoggedIn,
      },
      namespaced: true,
    },
  },
});

describe('NavMain.vue', () => {
  beforeAll(() => {
    const reloadSpy = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: reloadSpy },
    });
  });

  it('check logout reload page', () => {
    isUserLoggedIn.mockReturnValue(true);
    const wrapper = shallowMount(NavMain, {
      localVue,
      store,
    });

    wrapper.find('a[href="#"]').trigger('click');

    expect(window.location.reload).toHaveBeenCalled();
    expect(logout).toHaveBeenCalled();
  });
});
