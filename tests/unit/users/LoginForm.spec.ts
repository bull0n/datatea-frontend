import LoginForm from '@/components/users/LoginForm.vue';
import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();
const $router = { push: jest.fn() };

localVue.use(Vuex);
const actions = {
};

const getters = {
  isUserLoggedIn: jest.fn(),
};

const store = new Vuex.Store({
  modules: {
    users: {
      getters,
      actions,
      namespaced: true,
    },
  },
});

describe('LoginForm.vue', () => {
  it('Check redirect if already logged in', async () => {
    getters.isUserLoggedIn.mockReturnValue(true);
    mount(LoginForm, {
      localVue,
      store,
      mocks: {
        $router,
      },
    });

    expect(getters.isUserLoggedIn).toHaveBeenCalled();
    expect($router.push).toHaveBeenCalledWith({
      name: 'home',
    });
  });
});
