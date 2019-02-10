import axios from 'axios';

export function userLoginRequest(userData) {
  return dispatch => {
    return axios.post(
      'https://noma-fast-food-fast-db.herokuapp.com/api/v1/auth/login',
      userData
    );
  };
}
