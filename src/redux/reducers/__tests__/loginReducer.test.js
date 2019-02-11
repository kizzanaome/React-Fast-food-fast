import {
  REGISTER_USER,
  AUTH_ERROR,
  LOGIN,
  LOGIN_ERROR
} from '../../actions/types';

import { loginReducer } from '../loginReducer';

describe('Authentication reducers', () => {
  it('should allow login  action start', () => {
    const initialState = {
      loginMessage: '',
      loginError: ''
    };
    const action = {
      type: LOGIN,
      payload: 'Successfully logged in'
    };

    const expected = {
      ...initialState,
      loginMessage: 'Successfully logged in',
      loginError: ''
    };
    const newState = loginReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('user loggened  not successful', () => {
    const initialState = {
      message: '',
      error: ''
    };
    const action = {
      type: LOGIN_ERROR,
      payload: 'invalid credentials'
    };

    const expected = {
      ...initialState,
      loginError: 'invalid credentials'
    };
    const newState = loginReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
});
