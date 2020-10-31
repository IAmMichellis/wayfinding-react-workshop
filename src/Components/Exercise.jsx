// useContext: simple Counter

import React from "react";

// TODO
//
// Look at Exercise: you have:
//
// Counter,
// Which is a button that currently manages a count state
//
// CountDisplay,
// Which needs to know the current count
//
// We don't actually want either of those components to manage the count state.
// We also don't want the parent to manage it because maybe these components
// are in wildly different parts of the UI.
//
// We're going to create a CountContext that manages the count state,
// wrap everything in Exercise in the CountProvider,
// and access the count state via useContext.
//
// Go!
//
// 1. Usually, CountProvider would be a seperate file, so have a look
// at the comments below to see what that would look like.
// Keep the appropriate code in the right "files".
//
// 2. In ContextProvider.jsx, create a CountContext
// ex MyContext = React.createContext();
// Remember to give CountContext a display name for debugging!
// MyContext.displayName = "MyContext"
//
// 3. Create a component CountProvider that does the following:
// - holds a counter state using React.useState
// - returns JSX that creates a special Provider component,
//   and forwards its props (so it can have children)
//   (ex: <MyContext.Provider value={something} {...props} />)
// - passes as the Provider value *whatever* your consumers
//   will need to know to do their jobs.
//
// 4. Stop managing any counter state in the consumer components,
// and instead retrieve them using React.useContext
// example: const {valueKey1, valueKey2} = React.useContext(MyContext)
//

// Extra credit:
//
// 1. Try removing the CountProvider from exercise: what happens?
//
// If we wanted to provide a better error to someone who forgets the provider,
// we could have a helper hook in CountContext.jsx called
// "useCount": which would wrap "React.useContext" to return
// its value, but also throw a readable error if the call to
// useContext fails. See if you can figure out how to do that!
//
// 2. You don't *need* CountProvider: you could just wrap everything in Exercise
// directly in CountContext.Provider. Exercise would need to manage the
// provider's value and pass it. Give it a try!
//

// **************************
// File: ContextProvider.jsx

// (at the end of the file you'd need to export these:)
// export {CountProvider, CountContext}

// ***************************
// File: Exercise.jsx
// import {CountProvider, CountContext} from 'CountProvider.jsx'

function CountDisplay() {
  const count = undefined;
  return <div>The current count is {count}</div>;
}

function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>Increment count {count} </button>;
}

function Exercise() {
  return (
    // Aside:
    // <> is a "React Fragment":
    // React needs you to return a single parent component in the return value
    // You could wrap everything in a div, but this let's you tell React
    // "hey, I meant to do this: I want two things"
    //
    // You can try removing it to see the error you get.
    // You can also remove it later when you have a CountProvider
    // (since that will satisfy the "single parent" constraint)
    <>
      <CountDisplay />
      <Counter />
    </>
  );
}

export { Exercise };
