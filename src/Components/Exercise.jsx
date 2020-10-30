import React from "react";

// The goal:
// The (arbitrary) API I want is:
// the dispatch function accepts a number, and the counter increases by that number

// TODO
// 1. Create the reducer function:
// a reducer function takes
// - the current state (in this case, a number)
// - the `action` (the object you pass to the dispatch. In this case, ex '1')
// It returns the new state
//
// 2. Replace the useState in Counter with a useReducer.
// ex [state, dispatch] = React.useReducer(<reducer function>, <initial state>)
//
// 3. Since setCount is gone, you want `increment` to call the dispatch with the `action`
// => the number you want to increase by
//
// 4. Make sure it works! Try calling dispatch with something besides `1`!

function Counter({ initialCount = 0 }) {
  const [count, setCount] = React.useState(initialCount);

  const increment = () => setCount(count + 1);
  return <button onClick={increment}>{count}</button>;
}

function Exercise() {
  return <Counter />;
}

export { Exercise };
