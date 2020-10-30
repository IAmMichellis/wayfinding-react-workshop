import React from "react";

// TODO
// We want to save name to local storage
// ( window.localStorage.setItem("name", name); )
//
// When should we do that? Hint: you will want to use useEffect
//
// Once it's stored you'll want to make sure you component loads with the right initial value:
// ( window.localStorage.getItem("name") )
//
// See if you can get to a point where the component remembers `name` after a page refresh.

function Greeting() {
  const [name, setName] = React.useState("");
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

export { Greeting };
