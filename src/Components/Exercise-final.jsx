// state reducer
// 💯 default state reducer
// http://localhost:3000/isolated/final/05.extra-1.js

import React from "react";
import { Switch } from "./Extras/switch";

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
function useToggle({ initialOn = false, reducer = toggleReducer } = {}) {
  const { current: initialState } = React.useRef({ on: initialOn });
  const [state, dispatch] = React.useReducer(reducer, initialState);
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
// export {useToggle, toggleReducer}

// import {useToggle, toggleReducer} from './use-toggle'

function Exercise() {
  const [timesClicked, setTimesClicked] = React.useState(0);
  const clickedTooMuch = timesClicked >= 4;

  function toggleStateReducer(state, action) {
    if (action.type === actionTypes.toggle && clickedTooMuch) {
      return { on: state.on };
    }
    return toggleReducer(state, action);
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
    <>
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
      </div>
      <hr />
      <div>
        <Switch {...getDefaultTogglerProps({ on: defaultOn })} />
        <div data-testid="notice">Go wild!</div>
      </div>
    </>
  );
}

export { Exercise };
