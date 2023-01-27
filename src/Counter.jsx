import React from "react";

function Counter({ id, value, onChange }) {
  return (
    <div className="counter">
      <b>{value}</b>
      <div className="counter-controls">
        <button
          className="button is-danger is-small"
          onClick={() => onChange(id, -1)}
        >
          -
        </button>
        <button
          className="button is-success is-small"
          onClick={() => onChange(id, 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
