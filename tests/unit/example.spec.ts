import { mount } from '@vue/test-utils';
import NavTeaElement from '@/components/navigation/NavTeaElement.vue';

const teaId = '23';
const teaName = 'Oolong';
const $route = {
  name: 'tea',
  params: { teaId },
};

it('renders props.msg when passed', () => {
  const wrapper = mount(NavTeaElement, {
    mocks: {
      $route,
    },
    stubs: ['router-link'],
    propsData: {
      tea: {
        id: teaId,
        name: teaName,
      },
    },
  });

  expect(wrapper.text()).toContain(teaName);
});
