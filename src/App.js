import React, { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked((checked) => !checked);
  };
  return (
    <div>
      <input type="checkbox" value={checked} onClick={handleClick} />
      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  );
}

export default App;
