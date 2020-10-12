import React from 'react';
import './App.css';
import Family from './components/Family';
import Beer from './components/Beer'
import Licor from './components/Licor'
import BrowserRouter from 'react-router-dom'

function App() {
  
  return (
  <BrowserRouter>
    <div className="App">
        <Family/>
        <h1 className="mt-5">CARTA DE CERVEZAS</h1>
        <Beer/>
        <h1 className="mt-5">CARTA DE LICORES</h1>
        <Licor/>
    </div>
    </BrowserRouter>
  );
}

export default App;
