import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const [first, second, third] = ["Derrick", "Dr. Rick", "Mario"];
console.log(first);
console.log(second);
console.log(third);

ReactDOM.render(
  <React.StrictMode>
    <App name="D.Strong" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
