import axios from 'axios';
import { getLetterMatchCount } from '../helpers/index';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action and (consitionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - guessed Word
 * @returns { function } - Redux Thunk function.
 */
export const guessWord = (guessedWord) => {
  return function(dispatch, getState){
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    });

    if(guessedWord === secretWord)
      dispatch({ type: actionTypes.CORRECT_GUESS })

  };
};

export const getSecretWord = () => {
  return dispatch => {
    axios.get('http://localhost:3030');
  }
}