import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

/**
 * Factory function to create ShalloWrapper for the GuessedWords component
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns { ShallowWrapper }
 */
const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store}/>).dive().dive();
  return wrapper;
};


describe('Render', () => {
  describe('Word has not been guessed', () => {
    test('Renders component without error', () => {

    });
    test('Renders input box', () => {

    });
    test('Renders submit button', () => {

    });
  });
  describe('Word has been guessed', () => {
    test('Renders component without error', () => {

    });
    test('Does not render input box', () => {

    });
    test('Does not render submit button', () => {

    });
  });
});

describe('update state', () => {

});
