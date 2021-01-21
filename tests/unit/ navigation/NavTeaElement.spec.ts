import NavTeaElement from '@/components/navigation/NavTeaElement.vue';
import { shallowMount } from '@vue/test-utils';

const teaId = '42';

const $route = {
  name: 'tea',
  params: {
    teaId,
  },
};

describe('NavTeaElement.vue', () => {
  it('check isActive is true when id is the same', () => {
    const wrapper = shallowMount(NavTeaElement, {
      mocks: {
        $route,
      },
      stubs: ['router-link'],
      propsData: {
        tea: {
          id: teaId,
          name: 'whatever',
        },
      },
    });
    expect((wrapper.vm as any).isActive).toBe(true);
  });

  it('check isActive is false when id is the different', () => {
    const wrapper = shallowMount(NavTeaElement, {
      mocks: {
        $route,
      },
      stubs: ['router-link'],
      propsData: {
        tea: {
          id: '1',
          name: 'whatever',
        },
      },
    });
    expect((wrapper.vm as any).isActive).toBe(false);
  });
});
