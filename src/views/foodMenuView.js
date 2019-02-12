import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoodMenuComponet from '../componets/FoodMenuComponet';

export class FoodMenuView extends Component {
  render() {
    return (
      <div>
        <FoodMenuComponet />
      </div>
    );
  }
}

export default FoodMenuView;
