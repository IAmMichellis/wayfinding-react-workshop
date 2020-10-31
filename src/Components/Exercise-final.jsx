// useContext: simple Counter
// http://localhost:3000/isolated/final/03.js

import React from "react";

const CountContext = React.createContext();
CountContext.displayName = "CountContext";

function CountProvider(props) {
  const [count, setCount] = React.useState(0);
  const value = [count, setCount];
  // could also do it like this:
  // const value = React.useState(0)
  return <CountContext.Provider value={value} {...props} />;
}

function CountDisplay() {
  const [count] = React.useContext(CountContext);
  return <div>{`The current count is ${count}`}</div>;
}

function Counter() {
  // I omitted the display of 'count' so I could rehighlight this
  // cooky syntax ;)
  const [, setCount] = React.useContext(CountContext);
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>Increment count</button>;
}

function Exercise() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  );
}

export { Exercise };
