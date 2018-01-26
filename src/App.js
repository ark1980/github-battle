import React, { Component } from 'react';
import './App.css';
import Popular from './components/Popular';
import Nav from './components/Nav';
import Home from './components/Home';
import Battle from './components/Battle';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <h1 className="app-title">Welcome to Github-Battle</h1>
            <Nav />
          </header>
          <Route exact path='/' component={Home}/>
          <Route path='/battle' component={Battle}/>
          <Route exact path='/popular' component={Popular}/>
        </div>
      </Router>
    );
  }
}

export default App;
