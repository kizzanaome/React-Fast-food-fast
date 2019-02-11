import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import LoginView, { loginView } from '../views/loginView';
import 'babel-polyfill';
import { MemoryRouter } from 'react-router-dom';

describe('login view', () => {
  let wrapper;
  const mockStore = configureStore([thunk]);

  const expectedStore = {
    login: {
      loginMessage: 'message',
      loginError: 'error'
    }
  };
  const evt = { target: { name: 'Naome', value: 'Naome' } };

  const props = {
    message: 'message',
    history: {
      push: jest.fn()
    },
    handleLogin: jest.fn(() => Promise.resolve()),
    loginAction: jest.fn()
  };

  const store = mockStore(expectedStore);

  wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <LoginView {...props} />
      </Provider>
    </MemoryRouter>
  );

  it('renders login view', () => {
    expect(wrapper.length).toBeTruthy();
  });

  it('should simulate change', () => {
    wrapper.find('#username').simulate('change', evt);
    wrapper.setState({ username: 'Naome' });
    expect(wrapper.state('username')).toBe('Naome');
  });

  it('should simualte a click event', () => {
    wrapper.find('#login-Button').simulate('click', evt);
    wrapper.setState({ username: 'Naome' });
    expect(wrapper.state('username')).toBe('Naome');
  });
});
