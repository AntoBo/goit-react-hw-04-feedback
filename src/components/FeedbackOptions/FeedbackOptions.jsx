const FeedbackOptions = ({ vote }) => {
  return (
    <>
      <div className="btnWrap">
        <button
          onClick={e => {
            vote(e);
          }}
          name="good"
          type="button"
        >
          Good
        </button>
        <button
          onClick={e => {
            vote(e);
          }}
          name="neutral"
          type="button"
        >
          Neutral
        </button>
        <button
          onClick={e => {
            vote(e);
          }}
          name="bad"
          type="button"
        >
          Bad
        </button>
      </div>
    </>
  );
};

export default FeedbackOptions;
