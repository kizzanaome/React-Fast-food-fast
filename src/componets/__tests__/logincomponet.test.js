import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import LoginComponet from '../loginComponet';

const props = {
  onChange: jest.fn(),
  onClick: jest.fn(),
  handlelogin: jest.fn(),
  message: 'You have succesfully logedin',
  error: 'Invalid crentials'
};
LoginComponet.defaultProps = props;
describe('LoginComponet component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <MemoryRouter>
        <LoginComponet {...props} />
      </MemoryRouter>
    );
    expect(wrapper).toHaveLength(1);
  });
});
