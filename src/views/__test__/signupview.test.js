import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import SignupView from '../signupView';

const mockSTore = configureStore([thunk]);

const expectedStore = {
  authReducer: {
    message: '',
    error: ''
  }
};

const store = mockSTore(expectedStore);
const mockSignUp = {
  Message: 'Successfully signed up'
};

const mockLogin = {
  Message: 'naume',
  token: '312regwh4tr4hetrj6y5tu6yutu7y8u'
};
N;
const mockError = {
  errors: {
    username: ['Username already exists ']
  }
};

const errorItems = [
  { title: 'component will recieve props single error', error: mockError },
  { title: 'component will recieve props multiple error', error: mockErrors }
];
const historyMock = { push: jest.fn() };
const props = {
  history: historyMock,

  registerUser: jest.fn()
};

describe('authView component', () => {
  it('it renders ', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SignupView props={props} />
      </Provider>
    );
    const event = {
      preventDefault: jest.fn(),
      registerUser: jest.fn(),
      target: {
        elements: {
          username: { value: 'poseidon' },
          password: { value: 'poseidon234' }
        }
      }
    };
    const wrappedForm = wrapper.find('form');
    wrappedForm.simulate('submit', event);
    expect(wrapper.find('SignupView').state('loader')).toEqual({
      loading: true
    });
  });

  //   it('renders authView without crashing', () => {
  //     const wrapper = mount(
  //       <Provider store={store}>
  //         <MemoryRouter>
  //           <AuthViewConnected props={props} />
  //         </MemoryRouter>
  //       </Provider>
  //     );
  //     const newProps = { signUpData: mockSignUp };
  //     AuthViewConnected.prototype.props = newProps;

  //     expect(wrapper).toHaveLength(1);
  //   });

  //   it('component will recieve props user', () => {
  //     const wrapUser = shallow(<AuthViewTest {...props} />);
  //     wrapUser.setProps(
  //       {
  //         signUpData: mockSignUp,
  //         signUpErrors: null
  //       },
  //       () => {
  //         expect(wrapUser.state()).toEqual(
  //           expect.objectContaining({ loader: { loading: false } })
  //         );
  //   }
  // );
  //   });
});
