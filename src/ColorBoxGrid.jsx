import ColorBoxes from "./ColorBoxes";
import "./ColorBoxGrid.css";

export default function ColorBoxGrid({ colors }) {
  const arr = [];
  for (let i = 0; i < 25; i++) {
    arr.push(<ColorBoxes colors={colors} />);
  }
  return <div className="ColorBoxGrid">{arr}</div>;
}
