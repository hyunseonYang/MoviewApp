import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie />
      </div>
    );
  }
}

export default App;
