import React from 'react';
import Sidebar from './Sidebar'

import  Header from './Header';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app-body">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
