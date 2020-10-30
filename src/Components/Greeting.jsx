import React from "react";

// TODO:
//
// Everything is working right now.
//
// On the first line of Greeting, I've shown you how to call your custom hook.
// Uncomment that line, and figure out how to make that hook work.
//
// Reminder: custom hooks aren't scary: they are JUST FUNCTIONS that follow the rules of hooks.
// But mostly, you just have to remember that you use them like React hooks,
// and you can call them the same way as hooks.
//
// When you're done, Greeting shouldn't worry about local storage at alll: it should just
// trust that setName does the right thing.
//
// One more hint: you are passing "name" to useLocalStorageState as the local storage key.
// It's not the name. Just in case that was confusing :)

// Extra credit: if you are done and bored, feel free to make useLocalStorageState more flexible.
// How could it take a primative like a string, OR an object?

function Greeting({ initialName = "" }) {
  // const [name, setName] = useLocalStorageState("name");

  const [name, setName] = React.useState(
    window.localStorage.getItem("name") || initialName
  );

  React.useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

export { Greeting };
