import "./App.css";
import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    setNum(num - 1);
  };

  return (
    <div className="App">
      <div className="counter">
        <h1>{num}</h1>

        <div className="btn">
          <button className="increment" onClick={incNum}>
            increment
          </button>
          <button className="decrement" onClick={decNum}>
            decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
