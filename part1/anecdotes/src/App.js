import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const handleNextClick = () => {
    let randomIndex = null;
    while (randomIndex === null || randomIndex === selected) {
      randomIndex = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(randomIndex);
    console.log(randomIndex);
  };

  const handleVoteClick = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
    console.log(votes);
  };

  const getMostVotedAnecdote = () => {
    return votes.indexOf(Math.max(...votes));
  };

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNextClick}>next anecdote</button>
      {votes.some((e) => e > 0) && (
        <>
          <h1>Anecdote with most votes</h1>
          <p>{anecdotes[getMostVotedAnecdote()]}</p>
          <p>has {votes[getMostVotedAnecdote()]} votes</p>
        </>
      )}
    </>
  );
};

export default App;
