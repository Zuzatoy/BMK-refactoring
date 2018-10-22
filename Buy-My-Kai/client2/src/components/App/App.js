import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> */}
      </div>
    );
  }
}
