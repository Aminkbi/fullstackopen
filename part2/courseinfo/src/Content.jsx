import Part from "./Part";

export default function Content({ parts }) {
  const renderParts = parts.map((part, index) => {
    return <Part key={index} part={part} />;
  });
  return <div>{renderParts}</div>;
}
