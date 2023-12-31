import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

export default function Course({ course }) {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
}
