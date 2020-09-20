import checkPropTypes from 'check-prop-types';
import { ShallowWrapper } from "enzyme";
import { createStore } from 'redux';

import rootReducer from '../src/redux/reducers/index';

/**
 * Return node(s) with the given data-test attribute
 * @param {object} initialState - Initial state for store
 * @function storeFactory
 * @returns {store} - Redux Store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - enzyme shallow wrapper
 * @param {String} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
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
};

