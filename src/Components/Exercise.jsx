import React from "react";
import { Switch } from "../switch";

const ToggleContext = React.createContext();
ToggleContext.displayName = "ToggleContext";

function Toggle({ children }) {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  // 🐨 remove all this 💣 and instead return <ToggleContext.Provider> where
  // the value is an object that has `on` and `toggle` on it.
  return React.Children.map(children, (child) => {
    return typeof child.type === "string"
      ? child
      : React.cloneElement(child, { on, toggle });
  });
}

function ToggleOn({ children }) {
  const { on } = useToggle();
  return on ? children : null;
}

function ToggleOff({ children }) {
  const { on } = useToggle();
  return on ? null : children;
}

function ToggleButton({ ...props }) {
  const { on, toggle } = useToggle();
  return <Switch on={on} onClick={toggle} {...props} />;
}

function Exercise() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  );
}

export { Exercise };
