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
// This patterns is called Control Props.
//
// Real world examples:
// - [downshift](https://github.com/downshift-js/downshift)
// - [`@reach/listbox`](https://reacttraining.com/reach-ui/listbox)
//
// Think about <input> : it has 3 "modes"
// 1. No value or onChange is provided: React completely controls the value
//    of the input (which you can access using useRef)
// 2. value and onChange are provided: the value of the input is controlled
//    by the consumer.
// 3. value and "readOnly" are provided: <input> is immutable
//
// We can make components that behave this way using control props.
//
// To see why we need this, compare the behaviour of Exercise and  Exercise-final:
// currently we can do all sorts of things to react smartly to <Toggle> state changes,
// and we can pass <Toggle> an initial value, but we can't actually take control and set
// the value whenever we want.
//
// This will let you do that.

function App() {
  return <Exercise />;
}

export default App;
