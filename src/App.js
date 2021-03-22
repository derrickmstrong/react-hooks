import React, { useReducer } from "react";

function App() {
  // useReducer(Takes in a function that will return a new state, the inital state)
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );

  return <h1 onClick={() => setNumber(1)}>{number}</h1>;
}

export default App;
