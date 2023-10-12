import { useState } from "react";

function Statistics({ good, neutral, bad }) {
  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No Feedback Given!</p>
      </div>
    );
  }
  const all = good + neutral + bad;
  const average = (good + neutral * 0 + bad * -1) / all;
  const positive = (good / all) * 100;
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StaticLine text="good" data={good} />
          <StaticLine text="neutral" data={neutral} />
          <StaticLine text="bad" data={bad} />
          <StaticLine text="all" data={all} />
          <StaticLine text="average" data={average} />
          <StaticLine text="positive" data={positive} />
        </tbody>
      </table>
    </div>
  );
}

function StaticLine({ text, data }) {
  if (text == "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{data} %</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{data}</td>
    </tr>
  );
}

function Button({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>;
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood((prev) => prev + 1)} text="good" />
      <Button
        handleClick={() => setNeutral((prev) => prev + 1)}
        text="neutral"
      />
      <Button handleClick={() => setBad((prev) => prev + 1)} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        // all={all}
        // average={average}
        // positive={positive}
      />
    </>
  );
};

export default App;
