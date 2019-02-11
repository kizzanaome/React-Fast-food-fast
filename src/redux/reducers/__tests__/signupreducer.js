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
      error: '',
      message: {
        Message: 'Successfully signed up'
      }
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
      errors: {
        username: 'username already exists'
      }
    };

    const expected = {
      signUpFailure: {
        username: 'user already exists'
      },
      signUpSuccess: null
    };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
});
