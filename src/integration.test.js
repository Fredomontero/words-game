import { storeFactory } from '../test/testUtils';
import { guessWord } from './redux/actions/index';

describe('GuessWord action dispatcher', () => {
  const secretWord = "party";
  const unsuccessfulGuess = 'train';
  describe('No guessed words', () => {
    let store;
    let initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('Updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3
        }]
      };
      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{
          guessedWord: secretWord,
          letterMatchCount: 5
        }]
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe('Some guessed words', () => {
    const guessedWords = [{ guessWord: 'agile', letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord };
    let store; 
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('Updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords : [
          ...guessedWords, {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords : [
          ...guessedWords, {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
  });

});