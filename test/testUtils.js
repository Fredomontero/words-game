import checkPropTypes from 'check-prop-types';

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - enzyme shallow wrapper
 * @param {String} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

import { ShallowWrapper } from "enzyme";

export const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
}