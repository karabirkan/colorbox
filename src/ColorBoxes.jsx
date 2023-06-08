import "./ColorBoxes.css";
import { useState } from "react";

function randomIndex(arr) {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

export default function ColorBoxes({ colors }) {
  const [color, setColor] = useState(randomIndex(colors));
  const changeColor = () => {
    setColor(randomIndex(colors));
  };
  //   return <div className="ColorBox" style={{ backgroundColor: "green" }}></div>;
  return (
    <div
      className="ColorBox"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
}
