import React from 'react';
import './App.css';
import Family from './components/Family';
import Beer from './components/Beer'


function App() {
  
  return (
    <div className="App">
        <Family/>
        <h1 className="mt-5">CARTA DE CERVEZAS</h1>
        <Beer/> 
    </div>
  );
}

export default App;
