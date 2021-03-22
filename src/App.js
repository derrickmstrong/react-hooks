import React, { Fragment, useReducer } from "react";

const initialState = {
  message: "Hi",
};

// Reducer takes in state and action and switch based on action type
function reducer(state, action) {
  // action is some type of an event
  switch (action.type) {
    case "yell":
      return {
        // Below state.message will return the previous state and can be helpf ul in calculations
        message: "HEY! I JUST SAID " + state.message,
      };
    case "whisper":
      return {
        message: "excuse me",
      };
  }
}

function App() {
  // useReducer(Takes in a function that will return a new state, the inital state)
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <p>Message {state.message} </p>
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper" })}>excuse me</button>
    </Fragment>
  );
}

export default App;
