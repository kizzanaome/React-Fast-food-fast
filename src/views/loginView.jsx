import React, { Component } from 'react';
import LoginComponent from '../componets/loginComponet';
import { connect } from 'react-redux';
import { handleLogin } from '../redux/actions/AuthAction';

export class loginView extends Component {
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
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onClick = async evt => {
    evt.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    await this.props.handleLogin(userData);
    if (this.props.message) {
      this.props.history.push('/');
    }
  };
  render() {
    const { handleLogin } = this.props;
    return (
      <div>
        <LoginComponent
          handleLogin={handleLogin}
          onChange={this.onChange}
          onClick={this.onClick}
          message={this.props.message}
          error={this.props.error}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.login.loginError,
    message: state.login.loginMessage
  };
};

export default connect(
  mapStateToProps,
  { handleLogin }
)(loginView);
