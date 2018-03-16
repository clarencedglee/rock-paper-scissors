//@flow
import 'normalize.css';
import './App.css';

import React, { Component, Fragment } from 'react';
import { options, randomOption, xBeatsY } from './rockPaperScissorsLogic';
import type { Option } from './rockPaperScissorsLogic';
import OutcomeDisplay from './OutcomeDisplay';

type Props = {};
type State = {
  user: Option,
  computer: Option,
  outcome: -1 | 0 | 1 | typeof undefined
};

class App extends Component<Props, State> {
  state = {
    user: 'rock',
    computer: 'scissors',
    outcome: undefined,
  };

  render() {
    const {user, computer, outcome} = this.state
    const outcomeClass = ['lose', 'tie', 'win'][outcome + 1]

    return (
      <div className="app">
        <h1 className={outcomeClass}>
          {user}
          <OutcomeDisplay outcome={outcome}>
            <Fragment>paper</Fragment>
            <Fragment>loses to</Fragment>
            <Fragment>ties with</Fragment>
            <Fragment>beats</Fragment>
          </OutcomeDisplay>
          {computer}
        </h1>

        <OutcomeDisplay outcome={outcome}>
          <Fragment>Pick Rock, Paper, or Scissors below.</Fragment>
          <Fragment>Computer wins...</Fragment>
          <Fragment>Tie</Fragment>
          <Fragment>You win!</Fragment>
        </OutcomeDisplay>

        <div className="buttons">
          {options.map((option, i) =>
            <button onClick={this.choose(option)} className={option} key={i}>
              {option}
            </button>
          )}
        </div>
      </div>
    )
  };

  /**
   * Handle a choice from the user
   * Keep the event element general for now,
   * since we don't use it in our logic
   */
  choose = (option: Option) => 
           (event:  SyntheticEvent<HTMLElement>) =>
  {
    const user     = option
    const computer = randomOption()
    const outcome  = xBeatsY(user, computer)
    this.setState({user, computer, outcome})
  };
};

export default App
