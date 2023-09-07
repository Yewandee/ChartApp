import React, { useState } from 'react';
import '../toggle/toggle.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <h1>Welcome to My App</h1>
    </div>
  );
}

export default App;
