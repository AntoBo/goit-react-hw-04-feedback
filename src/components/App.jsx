import '../styles/styles.scss';
import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

import Section from './Section/Section';

const App = () => {
  const [good, SetGood] = useState(0);
  const [bad, SetBad] = useState(0);
  const [neutral, SetNeutral] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed();
  };

  const vote = e => {
    const name = e.target.name;
    switch (name) {
      case 'good':
        SetGood(item => item + 1);
        break;
      case 'bad':
        SetBad(item => item + 1);
        break;
      case 'neutral':
        SetNeutral(item => item + 1);
        break;

      default:
        return;
    }
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions vote={vote} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification mess="No feedback yet" />
        )}
      </Section>
    </>
  );
};

export default App;
