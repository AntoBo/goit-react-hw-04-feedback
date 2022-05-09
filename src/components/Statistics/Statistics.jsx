import Pt from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <ul>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = Pt.arrayOf(Pt.number.isRequired);

export default Statistics;
