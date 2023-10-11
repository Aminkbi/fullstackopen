function Header({ course }) {
  return <h1>{course.name}</h1>;
}

function Content({ parts }) {
  const renderParts = parts.map((part, index) => {
    return <Part key={index} part={part} />;
  });
  return <div>{renderParts}</div>;
}

function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

function Total({ parts }) {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return <p>Number of exercises {totalExercises}</p>;
}
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
