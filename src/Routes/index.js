import React, { Component } from 'react';
import HomeView from '../views/homeView';
import SignupView from '../views/signupView';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

export class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/signup" component={SignupView} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
