import React from "react";
import { useInput } from "./useInput";
function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle("");
    resetColor("");
  };
  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="Enter a sound" />
      <input {...colorProps} type="color" />
      <button>Add</button>
    </form>
  );
}

export default App;
