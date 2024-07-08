import React,{useState} from 'react';
import Dashboard from './DashboardPage';
import Login from './Login';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>

      {isLoggedIn ? (
        <Dashboard></Dashboard>
      ) : (
        <Login onLogin={setIsLoggedIn}></Login>
      )}
      
    </div>
  );
}

export default App;
