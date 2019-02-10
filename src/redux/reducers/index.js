import { combineReducers } from 'redux';
import { authReducer } from './signupReducer';
import { loginReducer } from './loginReducer';

export default combineReducers({
  auth: authReducer,
  login: loginReducer
});
