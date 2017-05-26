import React, { Component } from 'react';

// import SearchBar from './search_bar';
import logo from '../logo.svg';
import '../styles/App.css';
const SearchBar = require('./search_bar').SearchBar;
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Weather</h2>
        </div>
        <SearchBar />
        <h5>Weather Card Here</h5>
      </div>
    );
  }
}

export default App;
