import React, { useReducer, useState } from "react";
import "./App.css";
import RiverInfo from "./RiverInfo";

function App() {
  const [river, setRiver] = useState(`nile`);
  const [show, toggle] = useReducer((state) => !state, true);

  return (
    <div className="App">
      <h1>World's Longest Rivers</h1>
      <div>
        <button onClick={toggle}>Toggle Details</button>
      </div>
      <button onClick={() => setRiver("nile")}>Nile</button>
      <button onClick={() => setRiver("amazon")}>Amazon</button>
      <button onClick={() => setRiver("yangtze")}>Yangtze</button>
      <button onClick={() => setRiver("mississippi")}>Mississippi</button>
      {show && <RiverInfo name={river} />}
    </div>
  );
}

export default App;
