import React, { useState } from "react";

export function StepCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <button className="button ml-5" onClick={handleClick}>
              Click me
            </button>
          </div>
          <div className="column is-one-third">
            <input
              className="input"
              type="text"
              placeholder="Step count..."
              value={count}
            />
          </div>
        </div>
      </div>
    </>
  );
}
