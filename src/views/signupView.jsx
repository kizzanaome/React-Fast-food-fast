import React, { Component } from 'react';
import SignupComponet from '../componets/signupComponet';
import validator from 'validator';

export class SignupView extends Component {
  render() {
    return (
      <div>
        <SignupComponet />
      </div>
    );
  }
}

export default SignupView;
