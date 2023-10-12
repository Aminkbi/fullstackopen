import { useState } from "react";

function Button({ handler, text }) {
  return <button onClick={handler}>{text}</button>;
}

const App = () => {
  const [anecdotes, setAnectodes] = useState([
    { text: "If it hurts, do it more often.", votes: 0 },
    {
      text: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      text: "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    { text: "Premature optimization is the root of all evil.", votes: 0 },
    {
      text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
    {
      text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votes: 0,
    },
    { text: "The only way to go fast, is to go well.", votes: 0 },
  ]);
  const [selected, setSelected] = useState(0);

  function handleSelectedAnecdote() {
    const rand = Math.floor(Math.random() * anecdotes.length);

    setSelected(rand);
  }

  function handleIncrementingVotes() {
    setAnectodes([
      ...anecdotes,
      {
        text: anecdotes[selected].text,
        votes: (anecdotes[selected].votes += 1),
      },
    ]);
  }

  const anecdoteWithMostVotes = anecdotes.reduce((prev, current) =>
    prev.votes > current.votes ? prev : current
  );

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected].text}</div>
      <div>has {anecdotes[selected].votes} votes</div>
      <Button handler={handleIncrementingVotes} text="vote" />
      <Button handler={handleSelectedAnecdote} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      {anecdoteWithMostVotes.votes > 0 ? (
        <>
          <div>{anecdoteWithMostVotes.text}</div>
          <div>has {anecdoteWithMostVotes.votes} votes</div>
        </>
      ) : (
        <div>No votes yet</div>
      )}
    </>
  );
};

export default App;
