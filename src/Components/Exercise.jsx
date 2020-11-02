import React from "react";
import { Switch } from "./Extras/switch";

// Flavor text:
//
// In the final version (switch imports in App to see it), we have an unmovidifed <Toggle>
// which works as normal,
// And a custom <Toggle> that can't be clicked too many times.
// Both use the same toggle code.
//
// Your job is to change the useToggle hook to enable the custom use case.
// We will enable a custom Toggle by allowing a consumer to implement
// their own reducer function.
//
// ^ This pattern is called Inversion of Control: coding the component
// so that a user can take control of the component's state management, if they want.
//
// TODO
//
// 1. We want to be able to pass our custom `toggleStateReducer` to useToggle,
// and have it override the default reducer. How would you do that?
// Hint: it's a *very* small code change: two lines in useToggle ;)
//
// 2. Verify that it's working! The custom toggle should only click 4 times,
// and the other toggle should keep toggling forever.
//
// 3. Head down to <Exercise> and make sure you understand why the <Toggle>s
// are doing different things. Understand why this is a good case to support.
//
// 4. Notice that we had to implement the entire reducer function in <Exercise>.
// That was easy for <Toggle>, but it would be error prone in a larger component.
// Replace toggleStateReducer in <Exercise> with the following, and
// change useToggle so that this custom reducer, which only overrides
// the action we care about, works:
//
// function toggleStateReducer(state, action) {
//   if (action.type === actionTypes.toggle && clickedTooMuch) {
//     return { on: state.on };
//   }
//   return toggleReducer(state, action);
// }

const callAll = (...fns) => (...args) => fns.forEach((fn) => fn?.(...args));

const actionTypes = {
  toggle: "toggle",
  reset: "reset",
};
function toggleReducer(state, { type, initialState }) {
  switch (type) {
    case actionTypes.toggle: {
      return { on: !state.on };
    }
    case actionTypes.reset: {
      return initialState;
    }
    default: {
      throw new Error(`Unsupported type: ${type}`);
    }
  }
}

function useToggle({ initialOn = false } = {}) {
  const { current: initialState } = React.useRef({ on: initialOn });
  const [state, dispatch] = React.useReducer(toggleReducer, initialState);
  const { on } = state;

  const toggle = () => dispatch({ type: "toggle" });
  const reset = () => dispatch({ type: "reset", initialState });

  function getTogglerProps({ onClick, ...props } = {}) {
    return {
      "aria-pressed": on,
      onClick: callAll(onClick, toggle),
      ...props,
    };
  }

  function getResetterProps({ onClick, ...props } = {}) {
    return {
      onClick: callAll(onClick, reset),
      ...props,
    };
  }

  return {
    on,
    reset,
    toggle,
    getTogglerProps,
    getResetterProps,
  };
}

// Seperate file

function Exercise() {
  const [timesClicked, setTimesClicked] = React.useState(0);
  const clickedTooMuch = timesClicked >= 4;

  function toggleStateReducer(state, action) {
    switch (action.type) {
      case actionTypes.toggle: {
        if (clickedTooMuch) {
          return { on: state.on };
        }
        return { on: !state.on };
      }
      case actionTypes.reset: {
        return { on: false };
      }
      default: {
        throw new Error(`Unsupported type: ${action.type}`);
      }
    }
  }

  const {
    on: customOn,
    getTogglerProps: getCustomTogglerProps,
    getResetterProps: getCustomResetterProps,
  } = useToggle({
    reducer: toggleStateReducer,
  });

  const {
    on: defaultOn,
    getTogglerProps: getDefaultTogglerProps,
  } = useToggle();

  return (
    <div>
      <Switch
        {...getCustomTogglerProps({
          disabled: clickedTooMuch,
          on: customOn,
          onClick: () => setTimesClicked((count) => count + 1),
        })}
      />
      {clickedTooMuch ? (
        <div data-testid="notice">
          Whoa, you clicked too much!
          <br />
        </div>
      ) : timesClicked > 0 ? (
        <div data-testid="click-count">Click count: {timesClicked}</div>
      ) : null}
      <button
        {...getCustomResetterProps({ onClick: () => setTimesClicked(0) })}
      >
        Reset
      </button>
      <hr />
      <div>
        <Switch {...getDefaultTogglerProps({ on: defaultOn })} />
        <div data-testid="notice">Go wild!</div>
      </div>
    </div>
  );
}

export { Exercise };
