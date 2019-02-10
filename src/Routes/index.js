import React, { Component } from 'react';
import HomeView from '../views/homeView';
import SignupView from '../views/signupView';
import FoodMenuView from '../views/foodMenuView';
import { Provider } from 'react-redux';

import LoginView from '../views/loginView';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Store from '../redux/store/Store';

export class Routes extends Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomeView} exact />
            <Route path="/signup" component={SignupView} />
            <Route path="/login" component={LoginView} />
            <Route path="/home" component={FoodMenuView} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Routes;
