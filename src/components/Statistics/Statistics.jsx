const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    `${((good / countTotalFeedback()) * 100).toFixed()}%`;
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <ul>
        <li>Total: {countTotalFeedback()}</li>
        <li>Positive feedback: {countPositiveFeedbackPercentage()}</li>
      </ul>
    </>
  );
};

export default Statistics;
