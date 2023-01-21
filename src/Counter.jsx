import React, { useState } from "react";

function Counter({ id, value }) {
  const [count, setCount] = useState(0);

  value = count;

  const onDecrement = (id, value) => {
    console.log(`Key at ${id} : -, value: ${value}`);
    setCount(value - 1);
  };
  const onIncrement = (id, value) => {
    console.log(`Key at ${id} : +, value: ${value}`);
    setCount(value + 1);
  };

  return (
    <div className="counter">
      <b>{value}</b>
      <div className="counter-controls">
        <button
          className="button is-danger is-small"
          onClick={() => onDecrement(id, value)}
        >
          -
        </button>
        <button
          className="button is-success is-small"
          onClick={() => onIncrement(id, value)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
