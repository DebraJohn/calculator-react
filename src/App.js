import React from 'react';
import './App.css';
import Calc from './components/calc';
import UI from './assets/ui.png';

function App() {
  return (
    <div className="App">
      <img src={UI} className="UI" alt="" />
      <Calc />
    </div>
  );
}

export default App;
