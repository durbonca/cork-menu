import React from 'react';
import './App.css';
import Family from './components/Family';
import Beer from './components/Beer'
import Licor from './components/Licor'

function App() {
  return (
    <div className="App">
        <Family/>
        <h1 className="mt-5">CARTA DE CERVEZAS</h1>
        <Beer/>
        <h1 className="mt-5">CARTA DE LICORES</h1>
        <Licor/>
    </div>
  );
}

export default App;
