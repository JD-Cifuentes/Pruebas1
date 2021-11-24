import React from 'react';
import './App.css';
import UsuarioFuncional from './components/functionComponent';
import UsuarioClase from './components/classComponent';


function App() {
  return (
    <div className="App">
      <h1>
        Intro a React
      </h1>
      <br/>
      <UsuarioFuncional/>
      <UsuarioClase/>   

     
    </div>
  );
}

export default App;
