import { REGISTER_USER, AUTH_ERROR } from '../actions/types';

const initialState = {
  message: '',
  error: ''
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        message: action.payload
      };
    case AUTH_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
