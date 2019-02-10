import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post(
      'https://noma-fast-food-fast-db.herokuapp.com/api/v1/auth/signup',
      userData
    );
  };
}
