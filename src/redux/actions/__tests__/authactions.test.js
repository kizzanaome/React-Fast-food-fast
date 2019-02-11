import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../AuthAction';
import { REGISTER_USER, AUTH_ERROR, LOGIN, LOGIN_ERROR } from '../types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const signupdetails = [
  {
    title: 'should handle USER_LOGGED_IN success',
    action: actions.registerAction({
      user: { password: '1234567890q', username: 'wasswajoel' }
    }),
    expectedAction: {
      type: 'REGISTER_USER',
      payload: {
        user: {
          password: '1234567890q',
          username: 'wasswajoel'
        }
      }
    }
  },
  {
    title: 'should handle USER_LOGGED_IN failure',
    action: actions.AutherrorAction({
      user: { password: 'hhgy8uo', username: 'wasswajoel' }
    }),
    expectedAction: {
      payload: {
        user: {
          password: 'hhgy8uo',
          username: 'wasswajoel'
        }
      },
      type: 'AUTH_ERROR'
    }
  }
];
describe('Login actions', () => {
  signupdetails.forEach(item =>
    it(item.title, () => {
      expect(item.action).toEqual(item.expectedAction);
    })
  );
});
// import configureMockStore from 'redux-mock-store';
// import MockAdapter from 'axios-mock-adapter';
// import 'babel-polyfill';
// import { registerUser, handleLogin, axiosInstance } from '../AuthAction';
// import { REGISTER_USER, AUTH_ERROR, LOGIN, LOGIN_ERROR } from '../types';

// describe('test registration actions', () => {
//   let store;
//   let response_data;
//   let httpMock;
//   let requestUrl;
//   const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));
//   const requestData = { username: 'testuser', password: 'password' };

//   beforeEach(() => {
//     const mockStore = configureMockStore();
//     store = mockStore({ auth: jest.fn() });
//     requestUrl = '/auth/signup';
//     response_data = { message: 'succes message' };
//     httpMock = new MockAdapter(axiosInstance);
//   });

//   it('should register a user successfully', async () => {
//     httpMock.onPost(requestUrl).reply(201, response_data);
//     registerUser(requestData)(store.dispatch);
//     await flushAllPromises();
//     expect(store.getActions()).toEqual([{ type: REGISTER_USER }]);
//   });

//   it('should fail to register a  user', async () => {
//     httpMock.onPost(requestUrl).reply(409, response_data);
//     registerUser({ username: '', password: '' })(store.dispatch);
//     await flushAllPromises();
//     expect(store.getActions()).toEqual([
//       { type: AUTH_ERROR, payload: response_data.message }
//     ]);
//   });

//   //   it('should login a user successfully', async () => {
//   //     httpMock.onPost('/auth/login').reply(200, response_data);
//   //     handleLogin({ username: 'testuser', password: 'password' })(store.dispatch);
//   //     await flushAllPromises();
//   //     expect(store.getActions()).toEqual([
//   //       { type: LOGIN_PROCESSING, payload: true },
//   //       { type: LOGIN, payload: response_data.message },
//   //       { type: LOGIN_PROCESSING, payload: false }
//   //     ]);
//   //   });

//   //   it('should fail to login', async () => {
//   //     httpMock.onPost('auth/login').reply(400, response_data);
//   //     handleLogin({ username: '', password: '' })(store.dispatch);
//   //     await flushAllPromises();
//   //     expect(store.getActions()).toEqual([
//   //       { type: LOGIN_PROCESSING, payload: true },
//   //       { type: LOGIN_ERROR, payload: response_data.message },
//   //       { type: LOGIN_PROCESSING, payload: false }
//   //     ]);
//   //   });
// });
