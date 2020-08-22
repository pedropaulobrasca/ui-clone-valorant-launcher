import React from 'react';

// importing css
import './styles/global.css';

// components
import Login from './components/Login';
import Background from './components/Background';

function App() {
  return (
    <div className="wrapper">
      <Login />
      <Background />
    </div>
  );
}

export default App;
