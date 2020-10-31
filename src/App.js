import "./App.css";
import { Exercise } from "./Components/Exercise.jsx";
// import { Exercise } from "./Components/Exercise-final.jsx";

// INSTRUCTIONS
//
// Note: I'm going to shamelessly plagiarize since I've lifted most of this
// from the public repo https://github.com/kentcdodds/advanced-react-patterns
//
// Flavor text:
// We have a user settings page where we render a form for the user's
// information. We're storing the user's information in context.
// We don't like that our UserSettings component is micromanaging calls
// to update the user. Why wouldn't our UserProvider component do that?
//
// THAT is the exercise: make the UserSettings component dumb:
// it should pass it form data to UserProvider (the UserContext wrapper),
// and let it micromanage User network updates.
//
// > FYI: In this exercise, if you enter the text "fail" in the tagline or biography
// > input, then the "backend" will reject the promise so you can test the error
// > case.
//
// Right now the `UserSettings` form is calling `userDispatch` directly. Your job
// is to move that to a module-level "helper" function that accepts dispatch as
// well as the rest of the information that's needed to execute the sequence of
// dispatches.
//
// > ASIDE: to keep things simple we're leaving everything in one file, but normally
// > you'll put the context in a separate module. (There are comments showing you the file seperations.)
//

///*************************************** */

// Inverstion of control: https://www.youtube.com/watch?v=AiJ8tRRH0f8&list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf

// INSTRUCTIONS
//
// Let's make the reducer from the previous exercise more of an API.
//
// Now we have 2 buttons: one will increment and one will decrement.
// You'll call dispatch like this:
//
// dispatch({ type: "increment" })
// OR
// dispatch({ type: "decrement" })
//
// See if you can update the reducer function to implement this API.

function App() {
  return <Exercise />;
}

export default App;
