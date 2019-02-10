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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodMenuView);
