import React, { Component } from 'react';
import '../styles/App.css';
import {Route,Switch,NavLink} from 'react-router-dom';

import Home from './HomeComponents'
import AppLayout from './AppLayout';
import ProtectedRoute from './ProtectedRoute'
import Error from './Error'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          
          <hr/>
          {/* Routes will go here */}
          <Switch>
          <Route exact path="/" component={Home}/>
          <ProtectedRoute path="/app" component={AppLayout}/>
          <Route component={Error}/> 
          </Switch>
      </div>
  </div>
    );
  }
}
export default App;