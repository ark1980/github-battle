import React, { Component } from 'react';
import './App.css';
import Popular from './components/Popular';
import Nav from './components/Nav';
import Home from './components/Home';
import Battle from './components/Battle';
import Results from './components/Results';
import NotMatch from './components/NotMatch';
import {
  BrowserRouter as Router,
  Route,
  Switch
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
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/battle' component={Battle}/>
            <Route path='/battle/results' component={Results} />
            <Route exact path='/popular' component={Popular}/>
            <Route component={NotMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
