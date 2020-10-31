import React from "react";
import { Switch } from "./Extras/switch";

// Flavor text:
//
// Here you have a custom <Toggle> and a button that behaves like a toggle.
// You also have a useToggle hook that gives you the state you need to implement a typical toggle.
// Typically that would be a simple wrapper for useState(isOn).
// However, all toggles should also implement 'aria-pressed' for screen readers.
// They will also always need an onClick:
// - usually that onClick will call setToggle (or just "toggle") from the useState call.
// - but it might also do something: maybe it needs to send analytics.
//
// It would be nice not to have to repeat all that state everytime we use a toggle in our app.
//
// TODO:
//
// 1. This example is broken right now, but the useToggle API is right. Have a look at <Exercise>:
// - observe that instead of getting a setToggle/toggle function from useToggle,
//   we want a function that will return the props to spread on a toggle.
//
// - observe that we've simply spread the result of getTogglerProps on <Switch>,
//   and that we had to pass in the `on` state to getTogglerProps
//   (because how could it possibly return the right states and setters?)
//
// - observe what we passed to getTogglerProps in the <button>:
//   - we happen to want a custom screen reader label, so we passed it in
//   - we need to log on onClick: we've passed in an onClick function...
//     but this is a toggle, so we still expect onClick to perform the toggle action.
//   - a custom id
//
// 2. Implement getTogglerProps() so that it takes the custom props the user wants,
//    and returns those props combined with the "typical" toggle props.
//    Hints:
//      - a toggle should always have "aria-pressed": {on}, so it can be used by screen readers
//      - if an onClick prop gets passed in, we want to return a new onClick
//        that calls the one passed in, and then calls our typical onClick (toggle)
//           - you can do this with callAll(customOnClick, toggle)
//
// 3. Make sure your toggles work, but also make sure your props got set:
//    Go inspect the button.
//

// Extra credit:
// 1. You might be thinking "Woah, what if I don't want you to override my onClick????"
//    Don't worry, you can completely override the onClick without changing anything about useToggle.
//    How would you do that?
// 2. Sure, you made your own onClick. But I mean.... you had to implement your own toggle, and that sucked...
//    How could you change useToggle to support users who want to implement their own onClick using toggle() ?

// This is a handy util function that takes any number of functions and calls them all.
const callAll = (...fns) => (...args) => fns.forEach((fn) => fn?.(...args));

function useToggle() {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  // TODO implement this
  function getTogglerProps() {}

  return { on, getTogglerProps };
}

function Exercise() {
  const { on, getTogglerProps } = useToggle();
  return (
    <div>
      {/*
        Without getTogglerProps, your consumer would have to remember to setup all 
        the typical Switch props. Something like this:  

        <Switch on={on} 'aria-pressed': on, onClick: toggle} />
       */}

      <Switch {...getTogglerProps({ on })} />
      <hr />
      <button
        {...getTogglerProps({
          "aria-label": "custom-button",
          onClick: () => console.info("onButtonClick"),
          id: "custom-button-id",
        })}
      >
        {on ? "on" : "off"}
      </button>
    </div>
  );
}

export { Exercise };
