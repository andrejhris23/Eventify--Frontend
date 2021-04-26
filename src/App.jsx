import { useState } from "react";
import { UserIdContext } from "./contexts/UserIdContext";
import "./App.css";

import Landing from "./components/LandingPage/Landing";

function App() {
  const [id, setId] = useState(null);
  const [userToken, setUserToken] = useState(null);

  return (
    <UserIdContext.Provider value={{ id, setId, userToken, setUserToken }}>
      <div className="App">
        <Landing />
      </div>
    </UserIdContext.Provider>
  );
}

export default App;
