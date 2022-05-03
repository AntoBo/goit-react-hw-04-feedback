const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <ul>
        <li>Total: </li>
        <li></li>
      </ul>
    </>
  );
};

export default Statistics;
