import { LOGIN, LOGIN_ERROR } from '../actions/types';

const initialState = {
  loginMessage: '',
  loginError: ''
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loginMessage: action.payload };
    case LOGIN_ERROR:
      return { ...state, loginError: action.payload };

    default:
      return state;
  }
};
