import React, { Component } from 'react';
import './App.css';
import Popular from './components/Popular';
import {BrowserRouter as Router,
        Link,
        Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Github-Battle</h1>
        </header>
        <Popular />
      </div>
    );
  }
}

export default App;
