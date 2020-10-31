import "./App.css";
import { Exercise } from "./Components/Exercise.jsx";
// import { Exercise } from "./Components/Exercise-final.jsx";

// INSTRUCTIONS
//
// We are going to start combining tools to learn about advanced patterns.
// There's going to be a lot of noise: try to focus on understanding the pattern.
//
// Note: I'm going to shamelessly plagiarize since I've lifted most of this
// from the public repo https://github.com/kentcdodds/advanced-react-patterns
//
// Flavor text:
// We have a user settings page where we render a form for the user's
// information. We're storing the user's information in context.
// That context has chosen to use useReducer, since user state is complex.
//
// We don't like that our UserSettings component is micromanaging dispatch calls
// to update the user. Why wouldn't our UserProvider component manage that?
//
// THAT is the exercise: make the UserSettings component dumb:
// it should pass its form data to UserProvider (the UserContext wrapper),
// and let it micromanage User network updates.
//
// > FYI: In this exercise, if you enter the text "fail" in the tagline or biography
// > input, then the "backend" will reject the promise so you can test the error
// > case.
//
// Note: this is a real pattern used a lot by Facebook

function App() {
  return <Exercise />;
}

export default App;
