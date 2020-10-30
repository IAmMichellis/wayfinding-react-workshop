import React from "react";

const countReducer = (count, change) => count + change;

function Counter({ initialCount = 0 }) {
  const [count, dispatch] = React.useReducer(countReducer, initialCount);
  const increment = () => dispatch(2);
  return <button onClick={increment}>{count}</button>;
}

function Exercise() {
  return <Counter />;
}

export { Exercise };
