import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter((prev) => prev + 1);
  }
  function decrement() {
    setCounter((prev) => prev - 1);
  }
  return (
    <div>
      <h1>Counter</h1>
      <p>
        <button onClick={() => increment()}>Increment +</button>
        <button onClick={() => decrement()}>Decrement -</button>
      </p>
      <p>
        <span>{counter}</span>
      </p>
    </div>
  );
}
