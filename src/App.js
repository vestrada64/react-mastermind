import React, { Component } from 'react';
import './App.css';

import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';

class App extends Component {
  render() {
    return (
      <div>
      <header className="App-header">React Mastermind</header>
      <GameBoard />
      <ColorPicker />
      </div>
    );
  }
}

export default App;
