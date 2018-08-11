import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    const name = "sarim"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <a href="https://www.google.com" target="_blank" title="Google" >Click for Google  </a>
        </header>
        <p className="App-intro">
          Welcome To {name}.
        </p>
      </div>
    );
  }
}

export default App;
