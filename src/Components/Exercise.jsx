// Context Module Functions

import React from "react";
import { dequal } from "dequal";

// INSTRUCTIONS:
//
// Right now the `UserSettings` form is calling `userDispatch` directly. Your job
// is to move that to a module-level "helper" function that accepts dispatch as
// well as the rest of the information that's needed to execute the sequence of
// dispatches.
//
// > ASIDE: to keep things simple we're leaving everything in one file, but normally
// > you'll put the context in a separate module. (There are comments showing you the file seperations.)
//
// You can completely ignore most of this file. The only things you're interested in are
// the handleSubmit function in UserSettings (because that's the smell),
// and our new helper function updateUser.
//
// Go!
//
// 1. Comment out handleSubmit (so you can refer to it later), and turn it into what you want it to be:
//
// function handleSubmit(event) {
//   event.preventDefault();
//   updateUser(userDispatch, user, formState);
// }
//
// ^ why do we want this?
// UserSettings is dealing with a user and a form, so it makes sense we need to pass both of those
// to something that's going to update the user.
// We pass the dispatch for the same reason: remember that the dispatch is our version of "userSetter":
// we have to pass the setter that came with the state.
//
// 2. Now we need to implement our new updateUser helper:
// it should accept: dispatch, user, and updates.
// Take the old implementation of handleSubmit and put it here.
//
// ...
//
// That's it! Now the consumer of UserContext doesn't need to understand
// the complex internals of UserContext: it just needs to
// 'updateUser' for its instance of user (and its setter) with the new user data.
//

// Extra credit: go understand the rest of the file:
// - everything is working, but what if UserSettings wanted to promise chain off of
//   updateUser? Return the updatedUser, or reject the promise, to enable that.
// - check out the updates to user that are happening in userReducer
// - what's useUser doing? Why don't we need to export UserContext? Why is this good?
// - have a look at that isPending ternary
// - do you understand that first line in UserDataDisplay ?

import * as userClient from "./Extras/user-client";
import { useAuth } from "./Extras/auth-context";

const UserContext = React.createContext();
UserContext.displayName = "UserContext";

function userReducer(state, action) {
  switch (action.type) {
    case "start update": {
      return {
        ...state,
        user: { ...state.user, ...action.updates },
        status: "pending",
        storedUser: state.user,
      };
    }
    case "finish update": {
      return {
        ...state,
        user: action.updatedUser,
        status: "resolved",
        storedUser: null,
        error: null,
      };
    }
    case "fail update": {
      return {
        ...state,
        status: "rejected",
        error: action.error,
        user: state.storedUser,
        storedUser: null,
      };
    }
    case "reset": {
      return {
        ...state,
        status: null,
        error: null,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  const { user } = useAuth();
  const [state, dispatch] = React.useReducer(userReducer, {
    status: null,
    error: null,
    storedUser: user,
    user,
  });
  const value = [state, dispatch];
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
}

// TODO updateUser will go here

// export {UserProvider, useUser, updateUser}

// *******************************
// This might be your actual component file: src/screens/user-profile.js
// import {UserProvider, useUser, updateUser} from './context/user-context'
function UserSettings() {
  const [{ user, status, error }, userDispatch] = useUser();

  const isPending = status === "pending";
  const isRejected = status === "rejected";

  const [formState, setFormState] = React.useState(user);

  const isChanged = !dequal(user, formState);

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // move the following logic to the `updateUser` function you create above
    userDispatch({ type: "start update", updates: formState });
    userClient.updateUser(user, formState).then(
      (updatedUser) => userDispatch({ type: "finish update", updatedUser }),
      (error) => userDispatch({ type: "fail update", error })
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: 12 }}>
        <label style={{ display: "block" }} htmlFor="username">
          Username
        </label>
        <input
          id="username"
          name="username"
          disabled
          readOnly
          value={formState.username}
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label style={{ display: "block" }} htmlFor="tagline">
          Tagline
        </label>
        <input
          id="tagline"
          name="tagline"
          value={formState.tagline}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label style={{ display: "block" }} htmlFor="bio">
          Biography
        </label>
        <textarea
          id="bio"
          name="bio"
          value={formState.bio}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            setFormState(user);
            userDispatch({ type: "reset" });
          }}
          disabled={!isChanged || isPending}
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={(!isChanged && !isRejected) || isPending}
        >
          {isPending
            ? "..."
            : isRejected
            ? "✖ Try again"
            : isChanged
            ? "Submit"
            : "✔"}
        </button>
        {isRejected ? (
          <pre style={{ color: "red" }}>{error.message}</pre>
        ) : null}
      </div>
    </form>
  );
}

function UserDataDisplay() {
  const [{ user }] = useUser();
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}

function Exercise() {
  return (
    <div
      style={{
        height: 350,
        width: 300,
        backgroundColor: "#ddd",
        borderRadius: 4,
        padding: 10,
        overflow: "scroll",
      }}
    >
      <UserProvider>
        <UserSettings />
        <UserDataDisplay />
      </UserProvider>
    </div>
  );
}

export { Exercise };
