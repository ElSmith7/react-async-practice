import React, { lazy, Suspense, useReducer, useState } from "react";
import "./App.css";

const RiverInfo = lazy(() =>
  import(/* webpackChunkName: "RiverInformation" */ "./RiverInfo")
);

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
      <Suspense fallback={<div>loading component</div>}>
        {show && <RiverInfo name={river} />}
      </Suspense>
    </div>
  );
}

export default App;
