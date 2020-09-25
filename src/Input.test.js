import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr, storeFactory } from '../test/testUtils';
import Input from './Input';
import { guessWord } from './redux/actions';

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

    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test('Renders component without error', () => {
      const component = findByAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test('Renders input box', () => {
      const inputBox = findByAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test('Renders submit button', () => {
      const submitButton = findByAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });
  describe('Word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    })
    test('Renders component without error', () => {
      const component = findByAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test('Does not render input box', () => {
      const inputBox = findByAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test('Does not render submit button', () => {
      const submitButton = findByAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe('redux props', () => {
  
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);  
  });

  test('guessWord action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });

});
