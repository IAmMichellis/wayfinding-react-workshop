import React from "react";

// TODO:
// 1.
// You want the string underneath the form to change
// based on the current "name"
// The name is managed inside this component, and it changes.
// That *probably* means it should be state.

// 2.
// Figure out how to keep name in sync with the value of the name input
// Hint: you need to add something to the input tag below.

function Greeting() {
  const name = "";

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

export { Greeting };
