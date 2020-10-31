import React from "react";
import { Switch } from "../switch";

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
  const toggle = () => setOn(!on);

  return (
    <div>
      {/* <Toggle> */}
      <ToggleOn on={on}>The button is on</ToggleOn>
      <ToggleOff on={on}>The button is off</ToggleOff>
      <div>
        <ToggleButton on={on} toggle={toggle} />
      </div>
      {/* </Toggle> */}
    </div>
  );
}

export { Exercise };
