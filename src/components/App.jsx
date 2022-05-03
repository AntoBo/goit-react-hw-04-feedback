import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  vote = e => {
    const name = e.target.name;
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions vote={this.vote} />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </>
    );
  }
}
