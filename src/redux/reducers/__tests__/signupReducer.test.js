import {
  REGISTER_USER,
  AUTH_ERROR,
  LOGIN,
  LOGIN_ERROR
} from '../../actions/types';

import { authReducer } from '../signupReducer';

describe('Authentication reducers', () => {
  it('should allow sign up action start', () => {
    const initialState = {
      message: '',
      error: ''
    };
    const action = {
      type: REGISTER_USER,
      payload: {
        user: {
          Message: 'Successfully signed up'
        }
      }
    };

    const expected = {
      ...initialState,
      message: {
        user: {
          Message: 'Successfully signed up'
        }
      },
      error: ''
    };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('user sign up not successful', () => {
    const initialState = {
      message: '',
      error: ''
    };
    const action = {
      type: AUTH_ERROR,
      payload: 'username already exists'
    };

    const expected = {
      ...initialState,
      error: 'username already exists'
    };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
});
