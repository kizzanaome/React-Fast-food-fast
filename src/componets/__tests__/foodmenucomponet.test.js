import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import FoodMenuComponet from '../FoodMenuComponet';

describe('FoodMenuComponet component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <MemoryRouter>
        <FoodMenuComponet />
      </MemoryRouter>
    );
    expect(wrapper).toHaveLength(1);
  });
});
