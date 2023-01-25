import React, { useState } from "react";

function Counter({ id, value, handleChange }) {
  const [count, setCount] = useState(0);

  value = count;

  //1.Update the Counter component to take onIncrement and onDecrement callbacks as props and ensure they update the counter's values independently. Each callback should take a single, integer value as a parameter which is the amount to increment the counter's existing value by.

  const onDecrement = (id, value) => {
    const updatedValue = value - 1;
    setCount(updatedValue);
    handleChange(-1);
    console.log(`Key at ${id} : -, value: ${updatedValue}`);
  };
  const onIncrement = (id, value) => {
    const updatedValue = value + 1;
    setCount(updatedValue);
    handleChange(1);
    console.log(`Key at ${id} : +, value: ${updatedValue}`);
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
