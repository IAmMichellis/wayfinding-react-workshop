import "./App.css";
// import { Exercise } from "./Components/Exercise.jsx";
import { Exercise } from "./Components/Exercise-final.jsx";

// INSTRUCTIONS
//
// This exercise will walk you through making and using a context.
//
// Remember that contexts let you create state somewhere 'higher'
// In the component tree, so you can access that state in
// components that might not be near each other.
// A good example is a AuthContext, which holds a user auth token
// to avoid 'prop drilling' the auth token to every component
// that needs to auth the user.
//
// Note: this is crazy overkill in this example: we should be using
// component composition to manage the counter state state
// in the Exercise component.
//
// Head over to Exercise.jsx, and remember that you can see
// the final solution in Exercise-final.jsx
// (and see it working by switching the import in this file)

function App() {
  return <Exercise />;
}

export default App;
