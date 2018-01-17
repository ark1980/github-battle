import React, { Component } from 'react';
import './App.css';
import Popular from './components/popular'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Github-Battle</h1>
          <Popular />
        </header>
      </div>
    );
  }
}

export default App;
