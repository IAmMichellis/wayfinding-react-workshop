import React from "react";
import { Switch } from "./Extras/switch";

const ToggleContext = React.createContext();
ToggleContext.displayName = "ToggleContext";

function Toggle({ children }) {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

function useToggle() {
  return React.useContext(ToggleContext);
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
        <ToggleOn>We have power!</ToggleOn>
        <ToggleOff>Oh noes, no fun for you :(</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  );
}

export { Exercise };
