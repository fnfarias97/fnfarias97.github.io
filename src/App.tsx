import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
// import {useDarkMode} from './components/useDarkMode'

function App() {
  // const [theme, toggleTheme] = useDarkMode();

  return (
    <div className="bg-white dark:bg-gray-900 flex">
      <Sidebar />
      <h1 className="text-red-500">Holaaa</h1>
      {/* <button onClick={() => toggleTheme}>Toggle Dark Mode</button> */}


    </div>
  );
}

export default App;
