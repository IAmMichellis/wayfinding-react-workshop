import React from "react";

// The goal:
// The (arbitrary) API I want is:
// dispatch({ type: "increment" })
// OR
// dispatch({ type: "decrement" })

// TODO
//
// (Note that I've done a tiny bit of name massaging, and I've added the decrement button)
//
// The `action` will look like {action: "command"}
// Make your countReducer switch on the command: it should use its previous state
// and the command to return the new state.

const countReducer = (state, action) => state + action;

function Counter() {
  const [count, dispatch] = React.useReducer(countReducer, 0);
  const increment = () => dispatch(1);
  const decrement = () => dispatch(-1);

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
