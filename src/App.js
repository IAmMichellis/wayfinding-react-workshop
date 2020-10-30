import "./App.css";
import { Exercise } from "./Components/Exercise.jsx";
// import { Exercise } from "./Components/Exercise-final.jsx";

// INSTRUCTIONS
//
// This exercise will walk you through sharing state between child components
// aka "lifting state."
//
// (All of the code is in Exercise.jsx. To see the final result, import Exercise-final above)
//
// Let's say we've already built a parent component (Exercise) that is managing
// state for `name`, and passing it to its children `Display` and `Name`. That's working great!
//
// I also have a component `FavoriteAnimal`, which behaves very similarly to `Name`.
//
// Our product team has decided we should remind our user what their favorite animal is.
//
// Your job is to figure out how "lift the state" of `animal` from `FavoriteAnimal` into it's parent,
// so that it can be used in `FavoriteAnimal` AND `Display`.

function App() {
  return <Exercise />;
}

export default App;
