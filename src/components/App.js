import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

const SearchBar = require('./search_bar').SearchBar;
const WeatherList = require('./weather_list').WeatherList;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Weather</h2>
        </div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
