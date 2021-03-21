import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("Derrick");
  const handleClick = () => setName("Rick");

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  }, [name]);

  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={handleClick}>Change Winner</button>
    </section>
  );
}

export default App;
