import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import 'babel-polyfill';
import { registerUser, handleLogin, axiosInstance } from '../AuthAction';
import { REGISTER_USER, AUTH_ERROR, LOGIN, LOGIN_ERROR } from '../types';

describe('test registration actions', () => {
  let store;
  let response_data;
  let httpMock;
  let requestUrl;

  const requestData = { username: 'testuser', password: 'password' };
  let requestData2;

  beforeEach(() => {
    requestData2 = { username: 'testsrg', password: 'password' };

    const mockStore = configureMockStore([thunk]);
    store = mockStore({ auth: jest.fn() });

    requestUrl = '/auth/signup';
    response_data = { message: 'You have succesfully logged in' };
    httpMock = new MockAdapter(axiosInstance);
  });

  it('should register a user successfully', () => {
    httpMock.onPost(requestUrl).reply(201, response_data);
    store.dispatch(registerUser(requestData2)).then(() => {
      expect(store.getActions()).toEqual([
        { type: REGISTER_USER, payload: undefined }
      ]);
    });
  });

  it('should login a user successfully', () => {
    httpMock.onPost('/auth/login').reply(200, response_data);
    store
      .dispatch(handleLogin({ username: 'testuser', password: 'password' }))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: LOGIN, payload: response_data.message }
        ]);
      });
  });

  it('should fail to login', () => {
    httpMock.onPost('auth/login').reply(400, response_data);
    store
      .dispatch(handleLogin({ username: 'testuse', password: 'password' }))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: LOGIN_ERROR, payload: response_data.message }
        ]);
      });
  });
});
