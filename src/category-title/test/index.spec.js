import { mount } from '@vue/test-utils';
import CategoryTitle from '../index';

test('render category title', () => {
  const wrapper = mount(CategoryTitle);
  expect(wrapper).toMatchSnapshot();
});
