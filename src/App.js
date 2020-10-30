import "./App.css";
import { Greeting } from "./Components/Greeting.jsx";
// import { Greeting } from "./Components/Greeting-final.jsx";

// INSTRUCTIONS
//
// Now we're going to make a custom hook, building on step 2
//
// Wouldn't it be great if Greeting didn't have to manage local storage?
//
// Enter custom hooks!
//
// We already have the code to save to local storage working, but we want
// Greeting to be able to call it like this:
//
//    const [name, setName] = useLocalStorageState('name')
//
// and have name and setName read and write intuitively.
//
// Make it so.

function App() {
  return <Greeting />;
}

export default App;
