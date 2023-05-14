import { useState } from "react";

const Statistics = ({ good, bad, neutral, total, currentReviewScore }) => {
  return (
    <>
      <h1>Statistics</h1>

      {total > 0 ? (
        <table>
          <tbody>
            <StatisticLine label="good" value={good} />
            <StatisticLine label="neutral" value={neutral} />
            <StatisticLine label="bad" value={bad} />
            <StatisticLine label="all" value={total} />
            <StatisticLine
              label="average"
              value={
                currentReviewScore
                  ? currentReviewScore / total
                  : currentReviewScore
              }
            />
            <StatisticLine
              label="positive"
              value={good ? (good / total) * 100 : 0}
              mark="%"
            />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const StatisticLine = ({ label, value, mark = null }) => {
  return (
    <tr>
      <td>{label} </td>
      <td>
        {value} {mark}
      </td>
    </tr>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [currentReviewScore, setCurrentReviewScore] = useState(0);

  console.log("current score", currentReviewScore);

  const handleGoodClick = () => {
    const newCount = good + 1;
    const newTotal = total - good + newCount;
    const newReviewScore = currentReviewScore + 1;
    setGood(newCount);
    setTotal(newTotal);
    setCurrentReviewScore(newReviewScore);
  };
  const handleNeutralClick = () => {
    const newCount = neutral + 1;
    const newTotal = total - neutral + newCount;
    const newReviewScore = currentReviewScore + 0;
    setNeutral(newCount);
    setTotal(newTotal);
    setCurrentReviewScore(newReviewScore);
  };
  const handleBadClick = () => {
    const newCount = bad + 1;
    const newTotal = total - bad + newCount;
    const newReviewScore = currentReviewScore - 1;
    setBad(newCount);
    setTotal(newTotal);
    setCurrentReviewScore(newReviewScore);
  };

  return (
    <>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleGoodClick}></Button>
      <Button text="neutral" handleClick={handleNeutralClick}></Button>
      <Button text="bad" handleClick={handleBadClick}></Button>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        currentReviewScore={currentReviewScore}
      />
    </>
  );
};

export default App;
