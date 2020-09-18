import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
import { findByAttr, checkProps } from '../test/testUtils';


Enzyme.configure({ adapter:  new EnzymeAdapter() });

const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for the congrats component
 * @function setup
 * @param {*} props  - component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Congrats {...setupProps} />);
}

test('Renders without error', () => {
  const wrapper = setup({ success: false });
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

test('Does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});