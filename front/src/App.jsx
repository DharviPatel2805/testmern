import { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setBackendData(data));
  }, []);

  return <div>
    {backendData.users.map((user, i) => {
      <p key={i}>{user}</p> 
    })}
  </div>;
}

export default App;
