import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Weather</h2>
        </div>
        <p className="App-intro">
          Current Weather
        </p>
        <h5>Weather Card Here</h5>
      </div>
    );
  }
}

export default App;