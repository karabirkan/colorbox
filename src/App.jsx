import { useState } from "react";
import "./App.css";
import ColorBoxes from "./ColorBoxes";
import ColorBoxGrid from "./ColorBoxGrid";
function App() {
  return (
    <div>
      <ColorBoxGrid
        colors={[
          "yellow",
          "pink",
          "green",
          "red",
          "blue",
          "teal",
          "grey",
          "black",
        ]}
      />
      {/* <ColorBoxes
        colors={[
          "yellow",
          "pink",
          "green",
          "red",
          "blue",
          "teal",
          "grey",
          "black",
        ]} */}
      />
    </div>
  );
}

export default App;
