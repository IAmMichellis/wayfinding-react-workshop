import React from "react";

function countReducer(state, action) {
  const { type } = action;
  switch (type) {
    case "increment": {
      return state + 1;
    }
    case "decrement": {
      return state - 1;
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function Counter() {
  const [count, dispatch] = React.useReducer(countReducer, 0);
  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  return (
    <div>
      <button onClick={increment}>{count}</button>
      <button onClick={decrement}>{count}</button>
    </div>
  );
}

function Exercise() {
  return <Counter />;
}

export { Exercise };
