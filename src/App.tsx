import React from 'react';
import Board from './components/Board';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Board />
        <Footer />
      </div>
    </div>
  );
}

export default App;
