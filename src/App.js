import React from 'react';
import './App.css';
import Family from './components/Family';
import data from './data/data';

function App() {
  
  return (
    <div className="App">
        <Family products="data"/> 
    </div>
  );
}

export default App;
