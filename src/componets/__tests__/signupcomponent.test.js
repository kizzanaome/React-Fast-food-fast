import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import SignupComponet from '../signupComponet';

const props = {
  onChange: jest.fn(),
  onClick: jest.fn(),
  registerUser: jest.fn(),
  message: 'You have succesfully signedup',
  error: 'Invalid crentials'
};
SignupComponet.defaultProps = props;
describe('SignUpForm component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <MemoryRouter>
        <SignupComponet {...props} />
      </MemoryRouter>
    );
    expect(wrapper).toHaveLength(1);
  });
});
