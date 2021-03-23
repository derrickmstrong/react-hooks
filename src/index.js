import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Import Data
import { trees, apples } from './data'

// MyContext = A container that stores data that can be consumed by any components in the component tree
export const MyContext = createContext();

ReactDOM.render(
  <MyContext.Provider value={{ trees, apples }}>
    <App />
  </MyContext.Provider>,
  document.getElementById("root")
);
