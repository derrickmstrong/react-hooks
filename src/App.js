import React, { useState } from "react";

function App() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${sound} sounds like ${color}`);
    setSound("");
    setColor("");
  };
  return (
    <form onSubmit={submit}>
      <input
        value={sound}
        type="text"
        placeholder="Enter a sound"
        onChange={(e) => setSound(e.target.value)}
      />
      <input
        value={color}
        type="color"
        onChange={(e) => setColor(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default App;
