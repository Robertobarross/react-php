import {useEffect,useState} from 'react';
import './App.css';

function App() {

  useEffect(()=>{
    alert('Olá, vamos começar?');
  },[])

  return (
    <div className="App">
      <h1>Projeto ReactPHP</h1>
    </div>
  );
}

export default App;
