import Vue from 'vue';
import { shallowMount, mount } from '@vue/test-utils';
import MyInput from '@/components/MyInput.vue';
import MyInputWrapper from './MyInputWrapper';

describe('MyInput', () => {
  it('simulating user input', () => {
    const wrapper = mount(MyInputWrapper);
    wrapper.find('input').setValue('test');
    expect(wrapper.find('.text').text()).toBe('test');
  });

  it('setting v-model initial value', () => {
    const wrapper = shallowMount(MyInputWrapper);
    wrapper.setData({ model: 'initial value' });
    expect(wrapper.find('.text').text()).toBe('initial value');
  });

  const MySecondInputWrapper = Vue.component('MySecondInputWrapper', {
    components: { MyInput },
    template: `<div>
      <my-input class="input" type="number" v-model="model" disabled></my-input>
      <p>{{model.length}}</p>
    </div>`,
    data() {
      return {
        model: '10',
      };
    },
  });

  it('passing html attributes to component', () => {
    const wrapper = shallowMount(MySecondInputWrapper);
    const input = wrapper.find('.input');
    const attributes = input.attributes();
    expect(attributes.value).toEqual('10');
    expect(attributes.type).toEqual('number');
    expect(attributes.disabled).toBe('');
    expect(input.classes()).toContain('input');
  });
});
