import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="counter-container">
      <button id="decrement" className="counter-button" onClick={decrement}>
        -
      </button>
      <span id="span-counter">{count}</span>
      <button id="increment" className="counter-button" onClick={increment}>
        +
      </button>
      <button id="reset" className="counter-button" onClick={reset}>
        reset
      </button>
    </div>
  );
}
export default Counter;
