import React from 'react';
import { connect } from 'react-redux';
import { guessWord } from './redux/actions/index';

export class UnconnectedInput extends React.Component {

  /**
   * @method constructor
   * @param {object} props - Component props
   * @returns {undefined}
   */
  constructor(props){
    super(props);

    //initialize the state
    this.state = { currentGuess: null }

    //bind this for submitGuessedWord
    this.submitGuessedWord = this.submitGuessedWord.bind(this);

  }

  submitGuessedWord(evt){
    evt.preventDefault();
    const guessedWord = this.state.currentGuess;
    if(guessedWord && guessedWord.length > 0){
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: ''});
    }
  }

  render(){
    const contents = this.props.success 
    ? null
    : (
      <form className="form-line">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          value={this.state.currentGuess}
          onChange={(evt) => this.setState({currentGuess: evt.target.value})}
          placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          className="btn btn-primary"
          onClick={this.submitGuessedWord}
          type="submit"
        >
          Submit  
        </button>
      </form>
    )
    return(
      <div data-test="component-input">
        { contents }
      </div>
    )
  }
};

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);