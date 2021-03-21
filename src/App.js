import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data
    fetch(`https://api.github.com/users`)
      // Parse response to json
      .then((res) => res.json())
      // Set data to response results
      .then((res) => setData(res));
    return () => {};
  }, []);

  const handleClick = () => {
    setData([]);
  };

  if (data) {
    return (
      <>
        <ul>
          {data.map(({ login, avatar_url, id }) => (
            <li key={id} style={{ listStyle: "none" }}>
              <img src={avatar_url} width="50" />
              <br />
              {login}
              <br />
              <br />
            </li>
          ))}
        </ul>
        <button onClick={handleClick}>Remove Data</button>
      </>
    );
  }
  return "No data";
}

export default App;
