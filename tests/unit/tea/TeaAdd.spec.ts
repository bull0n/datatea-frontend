import { createLocalVue, mount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import Vuex from 'vuex';
import TeaAdd from '@/components/tea/TeaAdd.vue';

const TEA_ID = '42';
const TEA_NAME = 'Oolong';
const localVue = createLocalVue();

const $router = { push: jest.fn() };

const addTeaAction = jest.fn();
addTeaAction.mockReturnValue({
  id: TEA_ID,
  name: TEA_NAME,
});

localVue.use(Vuex);
const actions = {
  addTea: addTeaAction,
};

const store = new Vuex.Store({
  modules: {
    teas: {
      actions,
      namespaced: true,
    },
  },
});

describe('TeaAdd.vue', () => {
  it('redirect when action "teas/addTea" is called', async () => {
    const wrapper = mount(TeaAdd, {
      localVue,
      store,
      mocks: {
        $router,
      },
    });

    const input = wrapper.find('.tea-name');
    (input.element as HTMLInputElement).value = TEA_NAME;
    input.trigger('input');
    wrapper.find('form').trigger('submit');

    await flushPromises();

    expect(actions.addTea).toHaveBeenCalled();
    expect($router.push).toHaveBeenCalledWith({
      name: 'tea',
      params: {
        teaId: TEA_ID,
      },
    });
  });
});
