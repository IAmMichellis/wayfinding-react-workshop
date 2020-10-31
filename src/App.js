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
// This pattern is called Prop Collections and Getters.
//
// Real world examples:
// - [downshift](https://github.com/downshift-js/downshift) (uses prop getters)
// - [react-table](https://github.com/tannerlinsley/react-table) (uses prop
//   getters)
// - [`@reach/tooltip`](https://reacttraining.com/reach-ui/tooltip) (uses prop
//   collections)
//
// In typical UI components, you need to take accessibility into account. For a
// button functioning as a toggle, it should have the `aria-pressed` attribute set
// to `true` or `false` if it's toggled on or off. In addition to remembering that,
// people need to remember to also add the `onClick` handler to call `toggle`.
//
// Lots of the reusable/flexible components and hooks that we'll create have some
// common use-cases and it'd be cool if we could make it easier to use our
// components and hooks the right way without requiring people to wire things up
// for common use cases.

function App() {
  return <Exercise />;
}

export default App;
