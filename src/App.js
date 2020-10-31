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
// This pattern is called Flexible Compound Components
//
// Think of something like <ul><li> : alone, they make no sense.
// A consumer needs to combine them.
// But clearly these elements interact in some way.
// This is what we are trying to accomplish:
// composible components for which the user doesn't know what state they share.
//
// Kent C Dodds gives a really compelling example of this using a tab bar component in this talk:
// https://www.youtube.com/watch?v=AiJ8tRRH0f8&list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf
//

// Instructions:
// We're going to have a <Toggle> component which has some possible child components:
// <ToggleOn>, which displays when the toggle is on.
// <ToggleOff>, which does the opposite
// <ToggleButton>
//
// As the consumer, I'm going to do something like this:
//<Toggle>
//  <ToggleOn>The button is on</ToggleOn>
//  <ToggleOff>The button is off</ToggleOff>
//  <div>
//    <ToggleButton />
//  </div>
//</Toggle>
//
// But I could do anything!
// - I could move the display components.
// - I could omit some of them.
// - I could have multiple <ToggleOn>.
// - I could nest <ToggleButton /> in something more interesting that a <div>
//
// In the starting point of the exercise, I have to pass around the state from the parent of <Toggle>
// We want to fix that.

function App() {
  return <Exercise />;
}

export default App;
