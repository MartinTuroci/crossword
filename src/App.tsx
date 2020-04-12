import React from 'react';
import Board from './components/Board';
import './App.css';
import Footer from './components/Footer';
import Help from './components/Help';
import { helpers } from './util/crossword';
function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Board />
        <Help helpers={helpers} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
