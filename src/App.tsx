import React from "react";
import "bulma/css/bulma.css";
import { StepCounter } from "./components/StepCounter";

function App() {
  return (
    <>
      <div className="App">
        <h1>Welcome to the step counter app</h1>
        <StepCounter />
      </div>
    </>
  );
}

export default App;
