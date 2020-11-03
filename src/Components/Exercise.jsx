import React from "react";
import { Switch } from "./Extras/switch";

// TODO
// 1. Take a look at the usage of <Toggle> in <Exercise>:
// You'll want to pull out those new props in useToggle.
// (Hint: since one of the props is called 'on', and you probably want
// an internal state called 'on', alias the prop to 'controlledOn'
// (that's {externalArg: myInternalArgName}))
//
// 2. const { on } needs to come from the state if it's uncontrolled,
// and from `controlledOn` if that's passed in: do that.
// - Also, you're going to need the concept of `isOnControlled` repeatedly,
//   so just assign that to a const now and use it.
//
// 3. Now we need to think about onChange:
// - if onChange is passed in, we want toggle() and reset()
//   to call THAT, INSTEAD of our dispatch.
// - otherwise, we want to call our dispatch
// - (it might not hurt anything to call our dispatch, and then the onChange,
//    but it isn't "right". Again, think of an input: if you provide `onChange`
//    to an input, onClick get's passed the proposed change, and let's you
//    decide what to do about that. <input> does NOT set the state value, and THEN
//    ask you what you want to do. That would cause extra rerenders, and
//    potentially side-effects you don't want if anyone is depending on that state)
//
//  To help simplify things, make a function called `dispatchWithOnChange`
//  (you can/should inline it in `useToggle`). It will:
//  1. accept an action
//  2. if isOnControlled is false, call dispatch with that action
//  3. Then call `onChange` (if it exists) with our "suggested changes" and the action.
//      - onChange?.(<suggestedChanges>, action);
//      - How do you get the suggested changes, without doing the dispatch?
//        What would dispatch have done? I want you to think about that.
//        Scroll down to the bottom for the answer :)
//
// 4. Now we can use our dispatchWithOnChange instead of dispatch: do that.
//
// 5. That's it! Go test it:
//    - The two controlled toggles should move together: the parent has
//      complete control over their state and changes.
//    - The bottom uncontrolled toggle should do its normal toggle thing

//
// Extra Credits:
// - In <Exercise>, try making an <input> that is only half controlled:
//   (give it a value but no onChange). Observe what happens the in dev console.
//   Can you update our useToggle to behave similarily?
//   (The solution is commented out in Exercise-final.jsx)
// - Did you notice how setBothOn was declared? I thought that was a clever,
//   slightly sneaky name
// - go look at where useToggle is used: obsever that controlled inputs
//   and prop getters are compatible! We supported controlled inputs by passing
//   optional inputs to useToggle, and useToggle returns getTogglerProps. No problems :)
// - Going back to the first extra credit, where we made a warning to tell users
//   if they initialized our component wrong: note that we could make this more robust:
//   - We could make that logic reusable in a custom hook useControlledDataComponentWarning,
//     and call it in useToggle roughly like this:
//       useControlledDataComponentWarning(controlledOn, 'on', 'useToggle')
//   - we could also turn these warnings off in production by wrapping the whole useEffect
//     (or our custom hook call) in:
//        if (process.env.NODE_ENV !== 'production') { <code to figure out if we should warn> }
//

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

  const toggle = () => dispatch({ type: actionTypes.toggle });
  const reset = () => dispatch({ type: actionTypes.reset, initialState });

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

function Toggle({ on: controlledOn, onChange }) {
  const { on, getTogglerProps } = useToggle({ on: controlledOn, onChange });
  const props = getTogglerProps({ on });
  return <Switch {...props} />;
}

function Exercise() {
  const [bothOn, setBothOn] = React.useState(false);
  const [timesClicked, setTimesClicked] = React.useState(0);

  function handleToggleChange(state, action) {
    if (action.type === actionTypes.toggle && timesClicked > 4) {
      return;
    }
    setBothOn(state.on);
    setTimesClicked((c) => c + 1);
  }

  function handleResetClick() {
    setBothOn(false);
    setTimesClicked(0);
  }

  return (
    <div>
      <div>
        <Toggle on={bothOn} onChange={handleToggleChange} />
        <Toggle on={bothOn} onChange={handleToggleChange} />
      </div>
      {timesClicked > 4 ? (
        <div data-testid="notice">
          Whoa, you clicked too much!
          <br />
        </div>
      ) : (
        <div data-testid="click-count">Click count: {timesClicked}</div>
      )}
      <button onClick={handleResetClick}>Reset</button>
      <hr />
      <div>
        <div>Uncontrolled Toggle:</div>
        <Toggle
          onChange={(...args) =>
            console.info("Uncontrolled Toggle onChange", ...args)
          }
        />
      </div>
    </div>
  );
}

export { Exercise };

//
// Hints below
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
// 3.3 How to get the "suggested" state change:
// You're reducer function does exactly that!
//    suggestedChanges = reducer({...state, on}, action)
// ^ dispatch would normally call our reducer with the current state, and the action
//   - the "current state" is the state plus `on`, because ** we don't control on **
//
//
//
//
