import React, { Component } from 'react';
import SignupComponet from '../componets/signupComponet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../redux/actions/AuthAction';
import { MemoryRouter } from 'react-router-dom';

export class SignupView extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    error: '',
    usernameError: '',
    passwordError: '',
    message: ''
  };

  onChange = evt => {
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value
    });
  };

  onClick = async evt => {
    evt.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    await this.props.registerUser(userData);
    if (this.props.fail) {
    } else {
      this.props.history.push('/');
    }
  };

  render() {
    const { registerUser } = this.props;

    return (
      <div>
        <SignupComponet
          registerUser={registerUser}
          onChange={this.onChange}
          onClick={this.onClick}
          error={this.props.fail}
        />
      </div>
    );
  }
}

SignupView.propTypes = {
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    fail: state.auth.error,
    succes: state.auth.message
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(SignupView);
