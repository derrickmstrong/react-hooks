import React, { Fragment, useReducer } from "react";

function App() {
  // useReducer(Takes in a function that will return a new state, the inital state)
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );

  return (
    <Fragment>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "checked" : "unchecked"}</p>
    </Fragment>
  )
}

export default App;
