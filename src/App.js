import React, { useState } from 'react'

function App() {
  const [status, setStatus] = useState("Not Delivered")
  const handleClick = () => {
    setStatus("Delivered")
  }
  return (
    <div>
      <h1>The package is: {status} </h1>
      <button onClick={handleClick}>Deliver</button>
    </div>
  );
}

export default App;
