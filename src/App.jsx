import { useState } from 'react';
import { UserIdContext } from './contexts/UserIdContext';
import './App.css';

function App() {

  const [id, setId] = useState(null);
  const [userToken, setUserToken] = useState(null);

  return (
    <UserIdContext.Provider value={{id, setId, userToken, setUserToken}}>
    <div className="App">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
    </div>
    </UserIdContext.Provider>
  );
}

export default App;
