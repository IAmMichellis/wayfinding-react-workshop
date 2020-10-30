import React from "react";

// TODO
//
// You need to "lift the state" of `animal`, exactly the same way that `name` has already been lifted.
//
// I've given you the desired render output of `Display` in a comment:
// Figure out how to make that work.
//
// HINT: your just copying what `Name` did. Copy it and focus on understanding the change.

// Extra credit: if you finish this and are bored, see if you can make `Display` smarter:
// It looks pretty dumb when there's nothing in `name` or `animal`

function Name({ name, onNameChange }) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  );
}

function FavoriteAnimal() {
  const [animal, setAnimal] = React.useState("");
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={(event) => setAnimal(event.target.value)}
      />
    </div>
  );
}

function Display({ name }) {
  return <div>{`Hey ${name}, you are great!`}</div>;
  // HINT: you probably want to display this:
  //   return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}

function Exercise() {
  const [name, setName] = React.useState("");

  return (
    <form>
      <Name name={name} onNameChange={(event) => setName(event.target.value)} />
      <FavoriteAnimal />
      <Display name={name} />
    </form>
  );
}

export { Exercise };
