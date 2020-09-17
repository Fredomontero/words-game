import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
import { findByAttr } from '../test/testUtils';

Enzyme.configure({ adapter:  new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the congrats component
 * @function setup
 * @param {*} props  - component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  return shallow(<Congrats {...props} />);
}

test('Renders without error', () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('Renders not text when success prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');

});

test('Renders non-empty congrats message when success prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});