import React from "react";
import { Switch } from "./Extras/switch";

// Flavor text:
//
// <Toggle> isn't doing anything... but conceptually, we know we want it,
// the same way we conceptually wrap <li> in <ul>.
//
// TODO:
// 1. Toggle is a higher level component that is managing state for children
// in unknown locations... which React hook have we used for this before?
// Set that up: make Toggle a component that manages on and setOn using useState,
// and make a helper function that lets its children access that via useToggle
// HINT: I think you can figure this out, but there's a spoiler at the bottom of the file :)
//
// 2. Stop managing on on state in <Exercise>, and stop accepting it as a prop in
// the three Toggle children components. Make them use useToggle to get what they need.
//
// That's it :)
//
// See the bottom of the file for a bit more flavor text.

function Toggle(props) {
  // This isn't really doing anything yet...
  return <div {...props} />;
}

function ToggleOn({ on, children }) {
  // const { on } = useToggle();
  return on ? children : null;
}

function ToggleOff({ on, children }) {
  // const { on } = useToggle();
  return on ? null : children;
}

function ToggleButton({ on, toggle, ...props }) {
  // const { on, toggle } = useToggle();
  return <Switch on={on} onClick={toggle} {...props} />;
}

function Exercise() {
  const [on, setOn] = React.useState(false);

  return (
    <div>
      <Toggle>
        <ToggleOn on={on}>We have power!</ToggleOn>
        <ToggleOff on={on}>Oh noes, no fun for you :(</ToggleOff>
        <div>
          <ToggleButton on={on} toggle={() => setOn(!on)} />
        </div>
      </Toggle>
    </div>
  );
}

export { Exercise };

// Spoilers below
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// 1. Toggle is going to be a ToggleContext.Provider
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Are you finished? Keep scrolling for more flavor text.
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// You might ask: how is this different from a global context provider like UserAuthContext?
// It's because this is meant to be used on a much smaller component: you could use this to implement a small
// tabbing component, or a toggle like we've done here.
// It's also very compelling in external libraries:
// an external library for something like a modal dialog wouldn't make you manage details of its child components,
// but neither would it presume to know exactly what buttons you want, and where to put them:
// it would give you child components for that.
