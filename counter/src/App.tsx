import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <div className="container">
          <h1>Counter</h1>
          <span
            id="value"
            style={{
              color: count > 0 ? "green" : count === 0 ? "#222" : "red",
            }}
          >
            {count}
          </span>
          <div className="button-container">
            <button
              className="btn decrease"
              onClick={() => setCount(count - 1)}
            >
              decrease
            </button>
            <button className="btn reset" onClick={() => setCount(0)}>
              reset
            </button>
            <button
              className="btn increase"
              onClick={() => setCount(count + 1)}
            >
              increase
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
