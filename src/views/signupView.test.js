import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import SignupView from '../views/signupView';
import 'babel-polyfill';
import { MemoryRouter } from 'react-router-dom';

describe('signup view', () => {
  let wrapper;
  const mockStore = configureStore([thunk]);

  const expectedStore = {
    auth: {
      succes: 'message',
      fail: 'error'
    }
  };
  const evt = { target: { name: 'Naome', value: 'Naome' } };

  const props = {
    message: 'message',
    history: {
      push: jest.fn()
    },
    registerUser: jest.fn(() => Promise.resolve()),
    AutherrorAction: jest.fn()
  };

  const store = mockStore(expectedStore);

  wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <SignupView {...props} />
      </Provider>
    </MemoryRouter>
  );

  it('renders signup view', () => {
    expect(wrapper.length).toBeTruthy();
  });

  it('should simulate change', () => {
    wrapper.find('#username').simulate('change', evt);
    wrapper.setState({ username: 'Naome' });
    expect(wrapper.state('username')).toBe('Naome');
  });

  it('should simualte a click event', () => {
    wrapper.find('#signup-form').simulate('submit', evt);
    wrapper.setState({ username: 'Naome' });
    expect(wrapper.state('username')).toBe('Naome');
  });
});
