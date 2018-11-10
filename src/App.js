import React, { Component } from 'react';
import Crypto from './Crypto';
import './App.css';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Crypto Rate</h1>
        </header>
        <Crypto />
      </div>
    );
  }
}

export default App;