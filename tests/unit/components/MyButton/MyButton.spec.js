
import { shallowMount, mount } from '@vue/test-utils';
import MyButtonWrapper from './MyButtonWrapper.vue';

describe('MyButton', () => {
  it('return correct html', () => {
    const wrapper = mount(MyButtonWrapper);
    expect(wrapper.html()).toBe('<button class="btn btn-action">Nacisnij mnie!</button>');
  });

  it('render default slot', () => {
    const wrapper = shallowMount(MyButtonWrapper);
    expect(wrapper.find('my-button-stub').text()).toBe('Nacisnij mnie!');
  });

  it('trigger click event', () => {
    const wrapper = mount(MyButtonWrapper);
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.text).toBe('nacisnąłeś mnie!');
  });

  it('button has btn-action class', () => {
    const wrapper = mount(MyButtonWrapper);
    const button = wrapper.find('button');
    expect(button.classes('btn-action')).toBe(true);
  });
});
