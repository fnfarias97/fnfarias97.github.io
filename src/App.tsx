import React from 'react';
import './App.css';

import HeroProvider from './context/HeroContext'

import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (<HeroProvider>
    <div className="bg-white dark:bg-gray-100 flex">
      <Sidebar />
      <Main />
    </div>
  </HeroProvider>);
}

export default App;
