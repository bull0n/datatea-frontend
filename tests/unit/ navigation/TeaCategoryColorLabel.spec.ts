import TeaCategoryColorLabel from '@/components/navigation/TeaCategoryColorLabel.vue';
import { shallowMount } from '@vue/test-utils';

describe('TeaCategoryColorLabel.vue', () => {
  it('check color oolong is returned correctly', () => {
    const wrapper = shallowMount(TeaCategoryColorLabel, {
      propsData: {
        teaCategory: 'OOLONG',
      },
    });

    const container = wrapper.find('span');
    expect(container.text()).toEqual('🔵');
  });

  it('check color white is returned correctly', () => {
    const wrapper = shallowMount(TeaCategoryColorLabel, {
      propsData: {
        teaCategory: 'WHITE',
      },
    });

    const container = wrapper.find('span');
    expect(container.text()).toEqual('⚪');
  });
});
