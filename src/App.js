import "./App.css";
import { Exercise } from "./Components/Exercise.jsx";
// import { Exercise } from "./Components/Exercise-final.jsx";

// Note:
// We are continuing to combine tools to learn about advanced patterns.
// There's going to be a lot of noise: try to focus on understanding the pattern.
//
// Note:
// I'm going to continue shamelessly plagiarizing
// from the public repo https://github.com/kentcdodds/advanced-react-patterns

// Flavor text:
//
// This pattern is called inversion of control
//
// Real world examples:
// - [downshift](https://github.com/downshift-js/downshift) (uses prop getters)
//
//
//
// This is an example of where the state reducer can be really powerful.
//
// Say you have a component with a lot of complex state logic that you've codified
// using useReducer.
// Now a user comes along who wants a tiny tweak to one of the reducer actions.
// With inversion of control, you can let users take complete control over
// the reducer, while simultaneously supporting the common case.
// You can ALSO provide the custom user with sane defaults ;)
//
// We're going to walk through what this looks like with a very contrived toggle example.
//
// In the final version (switch imports in App to see it), we have an unmodifed <Toggle>
// which works as normal,
// And a custom <Toggle> that can't be clicked too many times.
// Both use the same toggle code.

function App() {
  return <Exercise />;
}

export default App;
